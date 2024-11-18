const Navbar = () => {
  return (
    <header className="bg-[#FE6845]">
      <div className="py-3">
        <div className="container">
          <div className="flex items-center justify-between">
            <figure className="h-12 w-12 bg-white rounded-full flex justify-center items-center">
              <img src="/pet.svg" alt="Saas Logo" height={36} width={36} />
            </figure>
            {/* <MenuIcon className="h-5 w-5 md:hidden" /> */}
            <nav className="hidden md:flex gap-6 text-white items-center">
              <a href="" className="cursor-pointer">
                Location
              </a>
              <a href="" className="cursor-pointer">
                Blog
              </a>
              <a href="" className="cursor-pointer">
                Services
              </a>
              <a href="" className="cursor-pointer">
                About US
              </a>
              <a href="" className="cursor-pointer">
                Franchise with US
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
