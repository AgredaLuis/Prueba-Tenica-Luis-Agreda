


const ServicesType = [
  {
    id: 1,
    name: "Dog Walking",
    image: "/dog.svg",
  },
  {
    id: 2,
    name: "Pet Sitting",
    image: "/cat.svg",
  },
  {
    id: 3,
    name: "Overnight Care",
    image: "/house.svg",
  },
  {
    id: 4,
    name: "Other Services",
    image: "/paw.svg",
  },
]



const Services = () => {
  return (
    <section id="services" className="bg-[#f2f5fa]">
      <div className="container">
        <div className=" px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          {/* services span 1 */}
          <div className="col-span-2 mb-8 ">
            <h2 className="mb-6 text-4xl md:text-5xl font-comfortaa font-extrabold text-[#ff6752]">
              Our Services
            </h2>
            <p className="font-light text-[#808080] sm:text-xl md:w-[300px] opacity-80 mb-6">
              National Brand With a Local Feel. Experience the Fetch! Difference
            </p>
            <div className="space-y-4">
                <p className="inline-flex items-center text-base font-segoe font-bold text-[#ff6752] mb-2">
                  Enter Your Location and Fetch Our Services
                </p>
              <form className="relative w-[200px]">
                <label htmlFor="Search" className="sr-only">
                  Search by Zip Code
                </label>
                <input
                  type="text"
                  id="Search"
                  placeholder="Zip Code"
                  className=" input-service-shadow px-4 py-4 pe-10 shadow-sm sm:text-sm rounded-[40px] "
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    type="submit"
                    className="rounded-full py-2 px-2 text-white bg-[#ff6752] "
                  >
                    <span className="sr-only">Search</span>

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

          {/* services span 2 */}
          <div className="col-span-2 space-y-8 flex flex-col items-center md:grid md:grid-cols-3 md:gap-12 md:space-y-0  lg:grid-cols-2">
            {ServicesType.map((service) => (
              <div key={service.id} className="card-shadow rounded-3xl w-[190px] h-[190px] flex flex-col justify-around items-center  ">
              <img src={service.image} alt="" className="w-20 h-20" />
              <p className="mb-2 text-xl font-bold font-comfortaa text-[#707070]">{service.name}</p>
            </div>
            ))}
        </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
