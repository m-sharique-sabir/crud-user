import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import developerImage from '../assets/m-sharique-sabir.jpeg';

const DeveloperBanner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-8 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-6">
            {/* Developer Image Section */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  className="h-37 w-32 rounded-full object-cover border-4 border-white shadow-lg"
                  src={developerImage}
                  alt="Mohammad Sharique Sabir"
                  onError={(e) => {
                    console.log('Image failed to load, showing fallback');
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-32 w-32 rounded-full bg-linear-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-3xl">MS</span>
                </div>
              </div>
            </div>
            
            <div className="text-white">
              <h2 className="text-2xl font-bold">Mohammad Sharique Sabir</h2>
              <p className="text-indigo-100 text-lg">Full Stack Developer</p>
              <p className="text-indigo-200 mt-2 max-w-md">
                Passionate about creating modern web applications with React, 
                building user-friendly interfaces, and delivering efficient solutions.
              </p>
            </div>
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white">
                <EnvelopeIcon className="h-5 w-5 text-indigo-200" />
                <a 
                  href="mailto:mohammadsharique2409959@gmail.com"
                  className="text-sm hover:text-indigo-200 transition-colors"
                >
                  mohammadsharique2409959@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <PhoneIcon className="h-5 w-5 text-indigo-200" />
                <a 
                  href="https://wa.me/923392409950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-indigo-200 transition-colors"
                >
                  +92 339 2409950
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex space-x-3">
                <a
                  href="mailto:mohammadsharique2409959@gmail.com"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
                >
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  Contact Me
                </a>
                <a
                  href="https://wa.me/923392409950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-white text-sm font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
                >
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
    </div>
  );
};

export default DeveloperBanner;
