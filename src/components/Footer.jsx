import { HeartIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">User Manager</h3>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A modern CRUD application built with React
              </p>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <span>Built with</span>
                <HeartIcon className="h-4 w-4 text-red-500 mx-1" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <span>© {currentYear} User Manager. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span>Data stored locally in your browser</span>
            </div>
            
            <div className="mt-2 sm:mt-0 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">LocalStorage Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">React Router</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-400 dark:text-gray-500">
            <div>
              <h4 className="font-medium text-gray-600 dark:text-gray-300 mb-2">Features</h4>
              <ul className="space-y-1">
                <li>• User CRUD Operations</li>
                <li>• Image Upload & Management</li>
                <li>• Form Validation</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-600 dark:text-gray-300 mb-2">Technology</h4>
              <ul className="space-y-1">
                <li>• React 19</li>
                <li>• React Router v6</li>
                <li>• Tailwind CSS</li>
                <li>• Heroicons</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-600 dark:text-gray-300 mb-2">Storage</h4>
              <ul className="space-y-1">
                <li>• Browser localStorage</li>
                <li>• Base64 Image Storage</li>
                <li>• Client-side Persistence</li>
                <li>• No External Database</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
