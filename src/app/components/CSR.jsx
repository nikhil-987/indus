import React from "react";
import IndustryReadyIntro from "./IndustryReadyIntro";
import CSRIntro from "./CSRIntro";

const CSR = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* explore start */}
      <div className="flex flex-col justify-center items-center p-10 order-2 md:order-1">
        {/* <h1 class="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Save $500 today on your purchase <br />
          of a new iMac computer.
        </h1>
        <p class="mb-6 text-gray-500 dark:text-gray-400">
          Reserve your new Apple iMac 27” today and enjoy exclusive savings with
          qualified activation. Pre-order now to secure your discount.
        </p>
        <a
          href="#"
          class="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          {" "}
          Pre-order now{" "}
        </a> */}
        <CSRIntro/>
      </div>
      {/* explore end */} {/* login start */}
      <div className="bg-white p-10 md:order-2">
        <a href="#">
          <img
            class="mb-4  dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full"
            src="images/5257047.jpg"
            alt="peripherals"
          />
          {/* h-56 w-56 */}
          {/*
      <img
        class="mb-4 hidden dark:block md:h-full"
        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
        alt="peripherals"
      />
      */}
        </a>
      </div>
      {/* login end */}
    </div>
  );
};

export default CSR;
