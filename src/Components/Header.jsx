import React, { useState } from 'react';

const Header = () => {
  // State to manage whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login/logout state
  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="bg-blue-200 text-blue-900 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Welcome to MyApp</h1>

      {/* Conditionally render buttons based on login state */}
      <div>
        {!isLoggedIn ? (
          // Login / Signin button when logged out
          <button
            onClick={handleLoginLogout}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition"
          >
            Login / Sign In
          </button>
        ) : (
          // Show message and Logout button when logged in
          <div className="flex items-center space-x-4">
            <span className="text-lg">Hello, User!</span>
            <button
              onClick={handleLoginLogout}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
