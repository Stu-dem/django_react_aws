import React from "react";

function Map() {
  const image = (
    <iframe
      marginheight="0"
      marginwidth="0"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3462.3841460123404!2d29.503149587222204!3d-29.79544446839127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef463fb0ec857e3%3A0x1f04fa6c0ced5311!2sUnderberg%20Congregational%20Church!5e0!3m2!1sen!2sza!4v1680457581604!5m2!1sen!2sza"
      width="100%"
      height="200"
      frameborder="0"
    ></iframe>
  );

  return (
    <div class="p-4 bg-white rounded-xl shadow sm:p-8">
      <div class="flex flex-col items-start justify-between mb-4">
        <h2 className="card-title">Directions</h2>
        <p className="pt-4">
          Old Main Rd, Underberg, 3257. Opposite Underberg Primary School
        </p>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200">
          {image}
        </ul>
      </div>
    </div>
  );
}

export default Map;
