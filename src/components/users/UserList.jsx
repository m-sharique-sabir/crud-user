import { Link } from 'react-router-dom';
import { useUsers } from '../../context/UserContext.jsx';
import { PencilIcon, TrashIcon, EyeIcon, UserIcon } from '@heroicons/react/24/outline';
import { getAvatarInitials, getRandomGradient } from '../../utils/imageUtils.js';

const UserList = () => {
  const { users, deleteUser, loading } = useUsers();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(id);
    }
  };


  const formatPhone = (phone) => {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  };

  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-bold leading-6 text-gray-900 dark:text-white">Users</h1>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Manage all users in your system. View, edit, or remove user accounts.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            to="/add-user"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
          >
            <UserIcon className="h-4 w-4 mr-2" />
            Add User
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Users</dt>
                  <dd className="text-lg font-medium text-gray-900 dark:text-white">{users.length}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 dark:ring-gray-600 rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6">
                      User
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Contact Information
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Phone Number
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Status
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-3 py-12 text-center">
                        <div className="flex flex-col items-center">
                          <UserIcon className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">No users found</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Get started by adding a new user to your system.</p>
                          <Link
                            to="/add-user"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <UserIcon className="h-4 w-4 mr-2" />
                            Add First User
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    users.map((user, index) => (
                      <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              {user.image ? (
                                <img
                                  className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
                                  src={user.image}
                                  alt={user.name}
                                />
                              ) : (
                                <div className={`h-10 w-10 rounded-full bg-linear-to-br ${getRandomGradient(user.id)} flex items-center justify-center`}>
                                  <span className="text-sm font-medium text-white">
                                    {getAvatarInitials(user.name)}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">ID: {user.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4">
                          <div className="text-sm text-gray-900 dark:text-white">{user.email}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Primary contact</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4">
                          <div className="text-sm text-gray-900 dark:text-white">{formatPhone(user.phone)}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Mobile</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user.status === 'active' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                          }`}>
                            {user.status === 'active' ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <div className="flex items-center justify-end space-x-2">
                            <Link
                              to={`/user/${user.id}`}
                              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                              title="View Details"
                            >
                              <EyeIcon className="h-4 w-4 mr-1" />
                              View
                            </Link>
                            <Link
                              to={`/edit-user/${user.id}`}
                              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                              title="Edit User"
                            >
                              <PencilIcon className="h-4 w-4 mr-1" />
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                              title="Delete User"
                            >
                              <TrashIcon className="h-4 w-4 mr-1" />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      {users.length > 0 && (
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
            <span className="font-medium">{users.length}</span>
            <span className="mx-1">total users</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Data stored locally in your browser
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
