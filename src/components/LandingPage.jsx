import React from 'react';

function LandingPage() {
  return (
    <div>
      {/* Header Section */}
      <div className="landing-page bg-gray-500 text-center py-20">
        <div className="p-6 rounded-lg shadow-lg inline-block transition-transform transform hover:scale-105 duration-300 bg-gray-800 bg-opacity-70">
          <h1 className="text-5xl font-bold mb-4 text-white">Welcome to The ITwiz</h1>
          <p className="text-lg text-white">Your one-stop shop for the best products.</p>
        </div>
      </div>

      {/* About Me Section */}
      <div className="landing-page-body bg-gray-500 px-6 py-10 max-w-4xl mx-auto">
        <div className="p-6 rounded-lg shadow-lg mb-8 transition-transform transform hover:scale-105 duration-300 bg-gray-800 bg-opacity-70">
          <h2 className="text-3xl font-bold mb-4 text-white text-center">About Me</h2>
          <p className="text-lg leading-relaxed text-white">
            Hi, I'm Ethan. I've been into computers my whole life. From a young age, I remember playing classic games on my dad's home PC. Even though the games were what interested me, as I aged, I started enjoying working with computers. From hardware, software, and even code, I became infatuated with technology to the point that I'm deeply invested in the tech industry.
          </p>
        </div>

        {/* Services Section */}
        <div className="p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 bg-gray-500 bg-opacity-70">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Services</h2>
          <ul className="space-y-8">
            <li className="p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 bg-gray-900 bg-opacity-70">
              <h3 className="text-2xl font-semibold text-white mb-2">Hardware/Software</h3>
              <p className="text-lg text-white">
                I can help you find the right computer or software for the job, with 100% satisfaction guaranteed.
              </p>
            </li>

            <li className="p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 bg-gray-900 bg-opacity-70">
              <h3 className="text-2xl font-semibold text-white mb-2">Websites</h3>
              <p className="text-lg text-white">
                I have experience creating websites. From e-commerce to blogs, I can provide the solution you need.
              </p>
            </li>

            <li className="p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 bg-gray-900 bg-opacity-70">
              <h3 className="text-2xl font-semibold text-white mb-2">Consultation</h3>
              <p className="text-lg text-white">
                If you need more hands-on help, you can submit a query through the consultation page.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;