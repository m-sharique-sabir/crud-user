import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xs text-gray-600 dark:text-gray-300">
        {isDarkMode ? 'Dark' : 'Light'}
      </span>
      <button
        onClick={toggleDarkMode}
        className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        style={{ backgroundColor: isDarkMode ? '#4f46e5' : '#d1d5db' }}
        aria-label="Toggle dark mode"
      >
      <span className="sr-only">Toggle dark mode</span>
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          isDarkMode ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
      <span className="absolute left-1 flex items-center justify-center">
        <SunIcon 
          className={`h-3 w-3 text-yellow-500 transition-opacity ${
            isDarkMode ? 'opacity-0' : 'opacity-100'
          }`} 
        />
      </span>
      <span className="absolute right-1 flex items-center justify-center">
        <MoonIcon 
          className={`h-3 w-3 text-blue-200 transition-opacity ${
            isDarkMode ? 'opacity-100' : 'opacity-0'
          }`} 
        />
      </span>
    </button>
    </div>
  );
};

export default ThemeToggle;
