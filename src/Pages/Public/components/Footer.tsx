const Footer = () => {
  return (
    <>
      <footer className="bg-auth ">
        <div className="container ">
          <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-4 lg:grid-cols-4">
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold font-segoe text-[#FFE530]">
                About
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    Locations
                  </a>
                </li>

                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    {" "}
                    Franchise With Us{" "}
                  </a>
                </li>

                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    Partners
                  </a>
                </li>

                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    {" "}
                    About Us{" "}
                  </a>
                </li>
                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    {" "}
                    Make Fetch Happen!{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-bold font-segoe text-[#FFE530]">
                Resources
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    Reviews
                  </a>
                </li>

                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    {" "}
                    Pet Resource Center{" "}
                  </a>
                </li>

                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    {" "}
                    Media Fact Sheet{" "}
                  </a>
                </li>

                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    {" "}
                    Blog{" "}
                  </a>
                </li>
                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    {" "}
                    News{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left ">
              <p className="text-lg font-medium text-transparent">
                Helpful Links
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    {" "}
                    Gift Cards{" "}
                  </a>
                </li>

                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    Services
                  </a>
                </li>

                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    {" "}
                    Franchisee Login{" "}
                  </a>
                </li>

                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    {" "}
                    Terms of Use{" "}
                  </a>
                </li>

                <li>
                  <a className="text-[#FFFFFF] font-segoe text-lg" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center  sm:text-left ">
              <p className="text-lg font-bold font-segoe text-[#FFE530]">
                NewsLetter
              </p>

              <div className="mx-auto mt-8 max-w-md sm:ms-0">
                <p className=" leading-relaxed text-[#FFFFFF] font-segoe text-lg ltr:sm:text-left rtl:sm:text-right mb-4">
                  Sign up to receive the Fetch! Family Newsletter
                </p>

                <form className="relative w-[200px]">
                  <label htmlFor="Search" className="sr-only">
                    Sign up Newsletter
                  </label>
                  <input
                    type="text"
                    id="Search"
                    placeholder="Email Adress"
                    className=" input-service-shadow px-4 py-4 pe-10 shadow-sm sm:text-sm rounded-[40px]"
                  />

                  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button
                      type="submit"
                      className="rounded-full py-2 px-2 text-white bg-[#ff6752] "
                    >
                      <span className="sr-only">Email</span>

                      <svg
                        className="w-5 h-5 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
