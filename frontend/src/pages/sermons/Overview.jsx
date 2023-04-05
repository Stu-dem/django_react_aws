import React from "react";
import Hero from "../../components/layout/Hero";

function Overview() {
  const content = (
    <>
      <div className="lg:h-48">
        <p class="max-w-2xl mb-2 font-light text-gray-500 lg:mb-3 md:text-lg lg:text-xl">
          You can find out more about us, our beliefs, history and governance on
          this page.
        </p>
      </div>
    </>
  );

  return (
    <>
      <section class="bg-center bg-no-repeat m-5 bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat ">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              {title}
            </h1>
            {content}
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
