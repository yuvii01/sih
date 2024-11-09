import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          
          {/* About Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h4 className="text-xl font-bold mb-2">About Us</h4>
            <p>
              We are dedicated to supporting the deaf and hard-of-hearing community by providing accessible communication tools. Our platform bridges the gap between sign language, speech, and text, making it easier for everyone to communicate.
            </p>
          </div>
          
          {/* Contact Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h4 className="text-xl font-bold mb-2">Contact Us</h4>
            <ul>
              <li>Email: <a href="mailto:support@example.com" className="hover:underline">support@example.com</a></li>
              <li>Phone: <a href="tel:+123456789" className="hover:underline">+1 234 567 89</a></li>
              <li>Address: 123 Deaf & Hearing Center, City, Country</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h4 className="text-xl font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-300" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.482v-9.294H9.692v-3.622h3.115V8.413c0-3.1 1.894-4.788 4.661-4.788 1.325 0 2.462.098 2.793.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.31h3.588l-.467 3.622h-3.121V24h6.116c.732 0 1.325-.593 1.325-1.324V1.325C24 .593 23.406 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-blue-300" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.933 4.933 0 002.163-2.723 9.865 9.865 0 01-3.127 1.196 4.917 4.917 0 00-8.384 4.482 13.944 13.944 0 01-10.125-5.13 4.897 4.897 0 001.523 6.573A4.902 4.902 0 01.96 9.17v.062a4.915 4.915 0 003.946 4.808 4.935 4.935 0 01-2.224.085 4.917 4.917 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.79-.023-1.175-.069a13.946 13.946 0 007.548 2.212c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.426-.015-.637A10.025 10.025 0 0024 4.59z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="hover:text-blue-300" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.292 3.608 1.267.975.975 1.205 2.241 1.267 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.292 2.633-1.267 3.608-.975.975-2.241 1.205-3.608 1.267-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.292-3.608-1.267-.975-.975-1.205-2.241-1.267-3.608-.058-1.266-.069-1.646-.069-4.85s.011-3.584.069-4.85c.062-1.366.292-2.633 1.267-3.608.975-.975 2.241-1.205 3.608-1.267 1.266-.058 1.646-.069 4.85-.069m0-2.163c-3.259 0-3.667.012-4.947.072-1.524.067-2.887.334-3.945 1.392-1.058 1.058-1.326 2.421-1.393 3.945-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.067 1.524.334 2.887 1.392 3.945 1.058 1.058 2.421 1.326 3.945 1.393 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.524-.067 2.887-.334 3.945-1.392 1.058-1.058 1.326-2.421 1.393-3.945.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.067-1.524-.334-2.887-1.392-3.945-1.058-1.058-2.421-1.326-3.945-1.393-1.28-.06-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
