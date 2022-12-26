import { useState, useEffect } from "react";
import sanityClient from "../../client.js";
const Assignments = () => {
  const [assigns, setAssign] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "assignment"]{
      name,
      date,
      solution
    }`
      )
      .then((data) => setAssign(data))
      .catch(console.error);
  }, []);

  if (assigns.length === 0) {
    return (
      <div class="m  mt-12 space-y-5">
        <h1 className=" boujee-text text-2xl font-bold">
          No Assignments. Party!
        </h1>
        <img
          src="https://media.tenor.com/HaHE49a50HsAAAAC/teo-cat.gif"
          alt=""
          className="w-[300px] h-[300px] m-auto rounded-lg"
        />
      </div>
    );
  }
  // #e1bc29
  return (
    <div className=" space-y-4 mt-4 pb-14">
      {assigns.map((assign) => (
        <div class="lg:w-2/5  w-11/12 md:w-3/4 m-auto  p-6 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {assign.name}
            </h5>
          </a>
          <p class="mb-3 font-normal text-[#e1bc29] ">{assign.date}</p>
          <a
            href={assign.solution}
            target="_blank"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
          >
            Solution
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Assignments;
