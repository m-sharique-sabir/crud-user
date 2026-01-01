import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUsers } from '../../context/UserContext.jsx';
import { processImageFile, getAvatarInitials, getRandomGradient } from '../../utils/imageUtils.js';
import { PhotoIcon } from '@heroicons/react/24/outline';

const EditUser = () => {
  const { id } = useParams();
  const { getUserById, updateUser } = useUsers();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    image: null,
    status: 'active'
  });
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [imageError, setImageError] = useState('');

  useEffect(() => {
    const user = getUserById(id);
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        image: user.image || null,
        status: user.status || 'active'
      });
      setImagePreview(user.image || null);
    } else {
      navigate('/users');
    }
  }, [id, getUserById, navigate]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setImageError('');
      const imageData = await processImageFile(file);
      setFormData({
        ...formData,
        image: imageData
      });
      setImagePreview(URL.createObjectURL(file));
    } catch (error) {
      setImageError(error.message);
      setFormData({
        ...formData,
        image: null
      });
      setImagePreview(null);
    }
  };

  const removeImage = () => {
    setFormData({
      ...formData,
      image: null
    });
    setImagePreview(null);
    setImageError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      updateUser(parseInt(id), formData);
      navigate('/users');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Edit User</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Update the user information below.</p>
      </div>
      
      <div className="mt-5 md:mt-0">
        <form onSubmit={handleSubmit}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white dark:bg-gray-800 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base px-4 py-3 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.name ? 'border-red-500' : 'border'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base px-4 py-3 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.email ? 'border-red-500' : 'border'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="1234567890"
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base px-4 py-3 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.phone ? 'border-red-500' : 'border'
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base px-4 py-3 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white border"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Profile Image (Optional)
                  </label>
                  <div className="mt-1 flex items-center space-x-6">
                    <div className="shrink-0">
                      {imagePreview ? (
                        <img
                          className="h-16 w-16 object-cover rounded-full border-2 border-gray-300 dark:border-gray-600"
                          src={imagePreview}
                          alt="Preview"
                        />
                      ) : formData.image ? (
                        <img
                          className="h-16 w-16 object-cover rounded-full border-2 border-gray-300 dark:border-gray-600"
                          src={formData.image}
                          alt="Current"
                        />
                      ) : (
                        <div className={`h-16 w-16 rounded-full bg-linear-to-br ${getRandomGradient(formData.name.length)} flex items-center justify-center`}>
                          <span className="text-white font-medium text-lg">
                            {formData.name ? getAvatarInitials(formData.name) : 'U'}
                          </span>
                        </div>
                      )}
                    </div>
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-slate-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-indigo-50 file:text-indigo-700
                          hover:file:bg-indigo-100
                          file:cursor-pointer cursor-pointer"
                      />
                    </label>
                  </div>
                  {imageError && <p className="mt-1 text-sm text-red-600">{imageError}</p>}
                  {formData.image && (
                    <button
                      type="button"
                      onClick={removeImage}
                      className="mt-2 text-sm text-red-600 hover:text-red-800"
                    >
                      Remove image
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
              <button
                type="button"
                onClick={() => navigate('/users')}
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-3 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Update User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
