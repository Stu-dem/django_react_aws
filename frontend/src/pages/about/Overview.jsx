import React from "react";
import Hero from "../../components/layout/Hero";

function Welcome({ scrollBeliefs, scrollHistory }) {
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
      <Hero
        title="About Underberg Congregational Church"
        content={content}
        image_url="https://images.unsplash.com/photo-1517837016564-bfc3ffd67455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
      />
    </>
  );
}

export default Welcome;
