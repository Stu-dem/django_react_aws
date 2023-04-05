import React from "react";

function Hero({ title, content, image_url, ref }) {
  const backgroundClass =
    "bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat lg:bg-[url('" +
    image_url +
    "')]";
  return (
    <>
      <section class={backgroundClass}>
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

export default Hero;
