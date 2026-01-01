import { Link } from 'react-router-dom';
import { useUsers } from '../context/UserContext.jsx';
import { UserGroupIcon, UserPlusIcon, ChartBarIcon, ArrowRightIcon, EyeIcon } from '@heroicons/react/24/outline';
import { getAvatarInitials, getRandomGradient } from '../utils/imageUtils.js';
import DeveloperBanner from './DeveloperBanner.jsx';

const Home = () => {
  const { users, loading } = useUsers();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const totalUsers = users.length;
  const recentUsers = users.slice(-3).reverse(); // Last 3 users
  const activeUsers = users.filter(user => user.status === 'active').length;

  return (
    <div className="space-y-6">
      {/* Developer Banner */}
      <DeveloperBanner />

      {/* Welcome Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Welcome to User Manager
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Manage your users efficiently with our comprehensive CRUD application. 
          Add, edit, view, and delete user information with ease.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-linear-to-br from-blue-500 to-blue-600 overflow-hidden shadow-lg rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserGroupIcon className="h-8 w-8 text-white" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-blue-100 truncate">
                    Total Users
                  </dt>
                  <dd className="text-2xl font-bold text-white">
                    {totalUsers}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-green-500 to-green-600 overflow-hidden shadow-lg rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ChartBarIcon className="h-8 w-8 text-white" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-green-100 truncate">
                    Active Records
                  </dt>
                  <dd className="text-2xl font-bold text-white">
                    {activeUsers}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-purple-500 to-purple-600 overflow-hidden shadow-lg rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserPlusIcon className="h-8 w-8 text-white" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-purple-100 truncate">
                    Storage Type
                  </dt>
                  <dd className="text-lg font-bold text-white">
                    LocalStorage
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              to="/add-user"
              className="relative group bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 ring-4 ring-white dark:ring-gray-700">
                  <UserPlusIcon className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Add New User
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Create a new user account with name, email, and phone information.
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                  Get started
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link
              to="/users"
              className="relative group bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 ring-4 ring-white dark:ring-gray-700">
                  <UserGroupIcon className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  View All Users
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Browse, edit, or delete existing user records.
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                  <EyeIcon className="mr-1 h-4 w-4" />
                  View users
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Users */}
      {recentUsers.length > 0 && (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
              Recent Users
            </h3>
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                {recentUsers.map((user) => (
                  <li key={user.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {user.image ? (
                          <img
                            className="h-8 w-8 rounded-full object-cover border border-gray-200 dark:border-gray-600"
                            src={user.image}
                            alt={user.name}
                          />
                        ) : (
                          <div className={`h-8 w-8 rounded-full bg-linear-to-br ${getRandomGradient(user.id)} flex items-center justify-center`}>
                            <span className="text-sm font-medium text-white">
                              {getAvatarInitials(user.name)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {user.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                          {user.email}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
                          to={`/user/${user.id}`}
                          className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          <EyeIcon className="h-4 w-4 mr-1" />
                          View
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {totalUsers > 3 && (
              <div className="mt-6">
                <Link
                  to="/users"
                  className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <EyeIcon className="h-4 w-4 mr-2" />
                  View all users
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
            Features
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-green-500 text-white">
                  ✓
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Persistent Storage</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Data saved in browser's localStorage</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-green-500 text-white">
                  ✓
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Full CRUD Operations</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Create, Read, Update, Delete users</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-green-500 text-white">
                  ✓
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Form Validation</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Client-side validation for all forms</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-green-500 text-white">
                  ✓
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Responsive Design</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Works on desktop and mobile devices</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-green-500 text-white">
                  ✓
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Modern UI</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Built with Tailwind CSS and Heroicons</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-green-500 text-white">
                  ✓
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">React Router</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Client-side routing for SPA experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
