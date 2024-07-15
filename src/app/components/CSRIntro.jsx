import React from "react";

const CSRIntro = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      {/* <h1 className="text-2xl font-bold mb-4">Welcome to ADRO-INDUS!</h1>
      {/* <ul className="list-disc list-inside mb-4">
        <li>Begin your learning journey with us</li>
        <li>Unlock new opportunities for growth and knowledge</li>
      </ul> */} 
    <h2 className="text-2xl font-bold mb-4">Corporate Social Responsibility</h2>
      <h2 className="text-sm font-semibold mb-2">Make a Meaningful Impact</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Beyond the digital realm</li>
        <li>Real-world difference through our CSR activities</li>
      </ul>

      <h3 className="text-sm font-semibold mb-2">
        Participate in CSR Activities
      </h3>
      <ul className="list-disc list-inside mb-4">
        <li>Engage in various Corporate Social Responsibility initiatives:</li>
        <ul className="list-disc list-inside ml-6 mb-4">
          <li>Tree plantation drives to improve the environment</li>
          <li>Promoting education to empower communities</li>
        </ul>
      </ul>

      <h3 className="text-sm font-semibold mb-2">Optional Donations</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Donations are entirely optional</li>
        <li>The decision to contribute is completely up to you</li>
        <li>Ensure your generosity comes from a place of genuine intent</li>
      </ul>

      <h3 className="text-sm font-semibold mb-2">Significant Contributions</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          Every contribution, no matter the size, has the power to create a
          positive change
        </li>
        <li>
          Support initiatives that foster a healthier planet and a more educated
          society
        </li>
      </ul>

      <h3 className="text-sm font-semibold mb-2">
        Join Us in Making a Positive Change
      </h3>
      <ul className="list-disc list-inside mb-4">
        {/* <li>Learn and grow with ADRO-INDUS</li> */}
        <li>Take the opportunity to give back to the community</li>
        <li>
          Enhance your learning experience by contributing to a better future
          for all
        </li>
      </ul>
    </div>
  );
};

export default CSRIntro;
