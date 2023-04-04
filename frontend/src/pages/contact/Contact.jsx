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
                <div class="w-full lg:w-6/12 px-4">
                  <h1 class="text-gray-900 text-4xl font-bold mb-2">
                    Upcoming events
                  </h1>
                  <p class="text-gray-700 text-lg font-light">
                    With over 100 years of combined experience, we've got a
                    well-seasoned team at the helm.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-3">
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
