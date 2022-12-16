const TabNavigator = () => {
  return (
    <>
      <section class="block fixed bottom-0 inset-x-0 z-50 shadow-lg text-white   bg-opacity-30 dark:bg-opacity-30 dark:text-gray-400 border-t-2 border-royal/20 lg:w-2/5  w-11/12 md:w-3/4 m-auto">
        <div id="tabs" class="flex justify-between ">
          <a
            href="#"
            class="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 transform transition duration-500 hover:scale-125"
            activeClass="dark:text-gray-100 text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline-block mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span class="tab block text-xs">Assignments</span>
          </a>
          <a
            href="#"
            class="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1transform transition duration-500 hover:scale-125"
            activeClass="dark:text-gray-100 text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline-block mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span class="tab block text-xs">Resources</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default TabNavigator;
