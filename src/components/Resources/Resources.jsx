import { useState } from "react";


const Resources = () => {

    const [resources, setResources] = useState([
    { title: "OOPS week 10",  link: "" },
    { title: "OOPS week 10",  link: "" },
    { title: "OOPS week 10",  link: "" },
    { title: "OOPS week 10",  link: "" },
  ]);
    return ( <>
    <div className=" space-y-4 mt-4">
      {resources.map((resource) => (
        <div class="lg:w-2/5  w-11/12 md:w-3/4 m-auto  p-6 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {resource.title}
            </h5>
          </a>

          <a
            href={resource.link}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Drive 
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
    </> );
}
 
export default Resources;