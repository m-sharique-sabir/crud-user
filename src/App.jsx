import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { UserProvider } from './context/UserContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Home from './components/Home';
import UserList from './components/users/UserList';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import UserDetails from './components/users/UserDetails';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { HomeIcon, UserGroupIcon, UserPlusIcon } from '@heroicons/react/24/outline';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
          {/* Navigation */}
          <nav className="bg-white dark:bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                   <Link to={'/'}><h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">M-Sharique-Sabir</h1></Link> 
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <NavLink 
                      to="/" 
                      className={({ isActive }) =>
                        `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                          isActive
                            ? 'border-indigo-500 text-gray-900 dark:text-white'
                            : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-white'
                        }`
                      }
                    >
                      <HomeIcon className="h-5 w-5 mr-1" />
                      Home
                    </NavLink>
                    <NavLink 
                      to="/users" 
                      className={({ isActive }) =>
                        `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                          isActive
                            ? 'border-indigo-500 text-gray-900 dark:text-white'
                            : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-white'
                        }`
                      }
                    >
                      <UserGroupIcon className="h-5 w-5 mr-1" />
                      Users
                    </NavLink>
                    <NavLink 
                      to="/add-user" 
                      className={({ isActive }) =>
                        `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                          isActive
                            ? 'border-indigo-500 text-gray-900 dark:text-white'
                            : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700 dark:hover:text-white'
                        }`
                      }
                    >
                      <UserPlusIcon className="h-5 w-5 mr-1" />
                      Add User
                    </NavLink>
                  </div>
                </div>
                <div className="flex items-center">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 w-full">
            <div className="px-4 py-6 sm:px-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/add-user" element={<AddUser />} />
                    <Route path="/edit-user/:id" element={<EditUser />} />
                    <Route path="/user/:id" element={<UserDetails />} />
                  </Routes>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </UserProvider>
  </ThemeProvider>
  );
}

export default App;
