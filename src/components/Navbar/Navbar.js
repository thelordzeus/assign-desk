const NavBar = () => {
  return (
    <nav className="p-[20px] flex  items-center max-w-[600px] m-auto border-b-2 border-white o ">
      <h1 className="text-red-600 font-bold text-2xl">AssignDesk</h1>
      <div className="  ml-auto z-10">
        <div className="ml-16 no-underline space-x-3 text-blue-600 font-bold ">
          <a href="https://thelordzeus.vercel.app/" target="_blank">
            Developer
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
