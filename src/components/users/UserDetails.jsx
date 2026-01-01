import { useParams, Link } from 'react-router-dom';
import { useUsers } from '../../context/UserContext.jsx';
import { PencilIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { getAvatarInitials, getRandomGradient } from '../../utils/imageUtils.js';

const UserDetails = () => {
  const { id } = useParams();
  const { getUserById } = useUsers();
  const user = getUserById(id);

  if (!user) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">User not found</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">The requested user could not be found.</p>
          <div className="mt-4">
            <Link
              to="/users"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ArrowLeftIcon className="-ml-1 mr-2 h-5 w-5" />
              Back to Users
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="px-4 sm:px-0 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">User Information</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Personal details and contact information.</p>
        </div>
        <Link
          to={`/edit-user/${user.id}`}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PencilIcon className="-ml-1 mr-2 h-5 w-5" />
          Edit User
        </Link>
      </div>
      
      {/* User Avatar Section */}
      <div className="mt-6 flex justify-center">
        <div className="text-center">
          {user.image ? (
            <img
              className="h-24 w-24 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
              src={user.image}
              alt={user.name}
            />
          ) : (
            <div className={`h-24 w-24 rounded-full bg-linear-to-br ${getRandomGradient(user.id)} flex items-center justify-center shadow-lg`}>
              <span className="text-white font-bold text-2xl">
                {getAvatarInitials(user.name)}
              </span>
            </div>
          )}
          <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{user.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">User ID: {user.id}</p>
        </div>
      </div>
      
      <div className="mt-5 border-t border-gray-200 dark:border-gray-700">
        <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-700">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">{user.name}</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
              <a href={`mailto:${user.email}`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
                {user.email}
              </a>
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
              <a href={`tel:${user.phone}`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300">
                {user.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
              </a>
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">User ID</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2 font-mono">{user.id}</dd>
          </div>
        </dl>
      </div>
      
      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-5">
        <div className="flex justify-end">
          <Link
            to="/users"
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <ArrowLeftIcon className="-ml-1 mr-2 h-5 w-5" />
            Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
