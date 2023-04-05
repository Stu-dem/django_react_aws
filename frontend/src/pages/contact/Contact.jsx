import React from "react";

import ContactDetails from "./ContactDetails";
import Map from "./Map";

function Contact() {
  return (
    <>
      <div class="flex items-center justify-center p-8 rounded-xl bg-base-200 shadow-xl">
        <div class="flex flex-col">
          <div class="flex flex-col">
            <div class="container max-w-7xl px-4">
              <div class="flex flex-wrap justify-center text-center mb-4">
                <div class="w-full lg:w-8/12 px-4">
                  <h1 class="text-gray-900 text-4xl font-bold mb-2">
                    Contact us
                  </h1>
                  <p class="text-gray-700 text-lg font-light">
                    If you ever need to reach our to us you can call or email us
                    any time. Our church is also located in the heart of
                    Underberg's suburbs making it easy to find and join in for a
                    service.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-3 lg:flex-row lg:space-x-3">
                <ContactDetails />
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
