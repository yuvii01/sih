import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  // const [pyodide, setPyodide] = useState(null);
  // const [isPyodideReady, setIsPyodideReady] = useState(false);

  const navigate =useNavigate() ;

  async function loadPyodideAndPackages() {
    // Load Pyodide and any necessary packages (if required by your Python script)
    window.pyodide = await loadPyodide();
    await pyodide.loadPackage(["micropip", "numpy", "opencv-python"]);  // Add required packages here
    console.log("Pyodide loaded");
  }
  loadPyodideAndPackages();

  // Function to execute Python script
  async function convert() {
    // Fetch the Python code (assuming 'hand.py' is available)
    const response = await fetch('/hand.py');
    const pythonCode = await response.text();

    // Execute the Python code in Pyodide
    await pyodide.runPythonAsync(pythonCode);

    console.log("Python code executed successfully");
  }



    const getstart = () => {
        navigate('/getstart');
    }



    const tutorial = () => {
      navigate('/tutorial');
  }


    const chatbot = () => {
      navigate('/chatbot');
  }
  return (
    <div className="flex flex-col relative items-center min-h-screen bg-blue-50">
      
      {/* Header Section */}

     
      <header className="bg-blue-600 w-full py-8">
        <div className="flex flex-col items-center text-center space-y-4 text-white">
          {/* Hand Icons */}







     



          
          <div className="flex space-x-6 text-6xl">
            <span role="img" aria-label="hand-sign-1">👌</span>
            <span role="img" aria-label="hand-sign-2">👌</span>
          </div>
          
          {/* Header Text */}
          <h1 className="text-4xl font-bold">Let’s Talk, Sign, and Connect!</h1>
          <p className="max-w-xl">
            Communication is for everyone, and so is our platform. From sign language to speech and text, 
            we’re here to help you express yourself without boundaries. Jump in and discover how easy and fun 
            inclusive communication can be!
          </p>
          
          {/* Get Started Button */}
          <button onClick={getstart} className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </header>
      {/* <div className='fixed bottom-[100px] right-[20px] z-[100] h-[400px] w-[400px]'>
  <video autoplay loop muted width="400" height="400" playsinline>
    <source src="/videos/btmright.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div> */}



      {/* Services Section */}
      <section className="my-10">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">We Provide:</h2>
        <div className="flex justify-center space-x-10">
          
          {/* ISL Conversion */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-200 rounded-full p-4 mb-3">
              <img src="/images/help.png" alt="ISL Conversion Icon" className="w-12 h-12" />
            </div>
            <p className="text-blue-600 font-medium">ISL Conversion</p>
          </div>
          
          {/* Speech/Text Conversion */}
          <div onClick={convert} className="flex flex-col items-center">
            <div className="bg-blue-200 rounded-full p-4 mb-3">
              <img src="/images/interpreter.png" alt="Speech/Text Conversion Icon" className="w-12 h-12" />
            </div>
            <p className="text-blue-600 font-medium">Speech/Text Conversion</p>
          </div>
          
          {/* Educational Playground */}
          <div onClick={tutorial} className="flex flex-col items-center">
            <div className="bg-blue-200 rounded-full p-4 mb-3">
              <img src="/images/portal.png" alt="Educational Playground Icon" className="w-12 h-12" />
            </div>
            <p className="text-blue-600 font-medium">Educational Playground</p>
          </div>


          <div className="flex flex-col items-center">
            <div className="bg-blue-200 rounded-full p-4 mb-3">
              <img src="/images/letter-v.png" alt="Educational Playground Icon" className="w-12 h-12" />
            </div>
            <p className="text-blue-600 font-medium"> Add your personalize Signs </p>
          </div>


          {/* <div onClick={chatbot} className="flex flex-col items-center">
            <div className="bg-blue-200 rounded-full p-4 mb-3">
              <img  src="/images/robot.png" alt="Educational Playground Icon" className="w-12 h-12" />
            </div>
            <p className="text-blue-600 font-medium"> Deafaverse  </p>
          </div>  */}


          <div onClick={chatbot} className="flex flex-col items-center">
            <div className="bg-blue-200 rounded-full p-4 mb-3">
              <img  src="/images/robot.png" alt="Educational Playground Icon" className="w-12 h-12" />
            </div>
            <p className="text-blue-600 font-medium"> Languange ChatBot  </p>
          </div>  


        </div>
      </section>


      <section className="mt-16 p-8 bg-blue-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">What Do We Do?</h3>
          <p className="text-lg text-center mb-6">
            We work with NGOs and communities dedicated to improving communication for the deaf and hard-of-hearing individuals.
            Our platform is designed to convert Indian Sign Language (ISL) to text and speech, making communication easier for everyone.
          </p>
        </section>

        {/* NGO Images Section */}
        <section className="mt-16 p-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Supporting the Deaf & Hard-of-Hearing Community</h3>
          <div className="flex justify-center space-x-12">
            {/* Image 1 */}
            <div className="w-48 h-48 bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <img src="path_to_your_image_1" alt="Deaf and Hard-of-Hearing People in NGO 1" className="w-full h-full object-cover" />
            </div>
            {/* Image 2 */}
            <div className="w-48 h-48 bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <img src="path_to_your_image_2" alt="Deaf and Hard-of-Hearing People in NGO 2" className="w-full h-full object-cover" />
            </div>
            {/* Image 3 */}
            <div className="w-48 h-48 bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <img src="path_to_your_image_3" alt="Deaf and Hard-of-Hearing People in NGO 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      
    </div>
  );
};

export default Home;
