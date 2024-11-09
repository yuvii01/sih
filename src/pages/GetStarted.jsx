import React from 'react';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        
        {/* Title Section */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-900">
            Welcome to MyApp
          </h2>
          <p className="mt-2 text-center text-sm text-blue-600">
            Your gateway to inclusive communication for the deaf and hard-of-hearing community.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Get Started with Our Features</h3>
          <ul className="list-disc list-inside text-blue-700 space-y-2">
            <li><strong>ISL Conversion:</strong> Convert Indian Sign Language gestures into speech and text.</li>
            <li><strong>Speech/Text Conversion:</strong> Translate speech into text, making conversations more accessible.</li>
            <li><strong>Educational Playground:</strong> Learn and practice sign language with interactive tools.</li>
          </ul>
        </div>

        {/* How to Get Started Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">How to Get Started?</h3>
          <p className="text-blue-700 mb-2">1. <strong>Sign Up</strong> for a free account.</p>
          <p className="text-blue-700 mb-2">2. <strong>Login</strong> to access all the features.</p>
          <p className="text-blue-700 mb-2">3. Start exploring our tools for sign language conversion and communication!</p>
        </div>

        {/* Get Started Button */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
            Get Started Now
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default GetStarted;
