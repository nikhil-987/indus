'use client'
import React, { useState } from 'react';
import IndustryReady from './components/IndustryReady';
import CSR from './components/CSR';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <div class="antialiased font-['Roboto','sans serif']">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* explore start */}
          <div className="bg-blue-500 flex flex-col justify-center items-center p-10 order-1 md:order-2 text-white">
            <h1 className="text-2xl font-bold mb-4">Welcome to ADRO INDUS!</h1>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                <strong>Industry Readiness</strong>:
                <ul className="list-none pl-4">
                  <li>- Bridging the gap between academic knowledge and industry requirements.</li>
                  <li>- Equipping new graduates with the skills and insights needed for the IT and Software Engineering industries.</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Corporate Social Responsibility (CSR)</strong>:
                <ul className="list-none pl-4">
                  <li>- Committed to making a positive impact on society.</li>
                  <li>- Optional donations for meaningful CSR projects as you learn.</li>
                </ul>
              </li>
              <li className="mb-2">
                <strong>Join Us</strong>:
                <ul className="list-none pl-4">
                  <li>- Enhance your professional skills.</li>
                  <li>- Make a difference in the world.</li>
                </ul>
              </li>
            </ul>
            <p className="mt-4"> <strong>ADRO INDUS,</strong> where learning meets responsibility.</p>
          </div>
          {/* explore end */}

          {/* login start */}
          <div className="bg-white p-10 order-2 md:order-1">
            <section className="bg-gray-50 dark:bg-gray-900">
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                  ADRO INDUS!
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@bitmesra.ac.in" required="" />
                      </div>
                      <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                      </div>
                      <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <a href="#" className="font-medium text-blue-600 hover:underline dark:text-primary-500">Sign up</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* login end */}
        </div>

        {/* <IndustryReady/> */}
      </div>

      
        <IndustryReady/>
        <CSR/>
      
    </>





  );
}

export default App;
