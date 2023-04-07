import React from "react";

import { BsMusicNoteBeamed } from "react-icons/bs";

// icons
import { IoPlaySharp } from "react-icons/io5";

function SermonCard({ sermon, setCurrentSermon }) {
  const handleSermonPlay = (sermon) => {
    setCurrentSermon(sermon);
  };

  return (
    <>
      <div class="bg-white border rounded-lg overflow-hidden ">
        <div className="flex flex-row justify-center">
          {sermon.thumbnail ? (
            <img
              class="h-48 w-full object-cover"
              src={sermon.thumbnail}
              alt="sermon image"
            />
          ) : (
            <div className="h-48">
              <BsMusicNoteBeamed size={55} />
            </div>
          )}
        </div>
        <div class="flex flex-col justify-start p-6">
          <h1 class="text-lg">
            <a class="no-underline hover:underline text-black" href="#">
              {sermon.title}
            </a>
          </h1>
          <p class="text-grey-darker text-sm">11/1/19</p>
          <footer class="flex flex-row justify-between leading-none w-full pt-2 md:pt-4">
            <a
              class="flex items-center no-underline hover:underline text-black"
              href="#"
            >
              <img
                alt="Placeholder"
                class="block rounded-full"
                src="https://picsum.photos/32/32/?random"
              />
              <p class="ml-2 text-sm">{sermon.author}</p>
            </a>
            <button
              className="btn btn-primary"
              onClick={() => handleSermonPlay(sermon)}
            >
              <IoPlaySharp size={24} />
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default SermonCard;

// <div class="my-1 px-1 w-full">
//   <article class="overflow-hidden rounded-lg shadow-lg bg-base-100">
//     <div className="h-2/3 w-full">
//       <a href="#" className="object-cover overflow-hidden">
//         {sermon.thumbnail ? (
//           <img
//             alt="Placeholder"
//             class="block w-full"
//             src={sermon.thumbnail}
//           />
//         ) : (
//           <div className="pt-5 place-content-center">
//             <span>
//               <BsMusicNoteBeamed size={55} />
//             </span>
//           </div>
//         )}
//       </a>
//     </div>

//     <header class="flex flex-col items-start justify-between leading-tight p-2 md:p-4">
//       <h1 class="text-lg">
//         <a class="no-underline hover:underline text-black" href="#">
//           {sermon.title}
//         </a>
//       </h1>
//       <p class="text-grey-darker text-sm">11/1/19</p>
//     </header>

//     <footer class="flex items-center justify-between leading-none p-2 md:p-4">
//       <a
//         class="flex items-center no-underline hover:underline text-black"
//         href="#"
//       >
//         <img
//           alt="Placeholder"
//           class="block rounded-full"
//           src="https://picsum.photos/32/32/?random"
//         />
//         <p class="ml-2 text-sm">{sermon.author}</p>
//       </a>
//       <button
//         className="btn btn-primary"
//         onClick={() => handleSermonPlay(sermon)}
//       >
//         <IoPlaySharp size={24} />
//       </button>
//     </footer>
//   </article>
// </div>
