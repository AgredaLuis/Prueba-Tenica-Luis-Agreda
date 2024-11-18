const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-0 md:pb-10 bg-[#FE6845] overflow-x-clip">
      <div className="container">
        <div className="md:flex justify-between items-center">
          <div className="md:w-[518px]">
            <h1 className="text-5xl md:text-[64px] font-museo font-bold text-[#FFFFFF]">
              We get Pet Care!
            </h1>
            <p className="text-xl text-[#FFFFFF] tracking-tight mt-4">
              For over 17 Years, Fetch! Pet Care has been a trusted partner in
              keeping pet healthy and happy!
            </p>
            <div className="flex gap-4 items-center mt-8">
              <button className="main-button">Schedule Service</button>
              <button className="text-white gap-1 text-sm">
                <span>Or Call 866.338.2463</span>
              </button>
            </div>
          </div>
          <div className="md:h-[498px] pt-10">
            <figure className=" absolute w-[340px] h-[340px] bg-[#FFE530] rounded-full mt-20"></figure>
            <figure className="w-[340px] h-[380px] bg-transparent rounded-b-full mt-10 relative overflow-hidden">
              <img
                src="/golden-retriever.png"
                alt="Pet image"
                className="absolute -top-3 left-[60%] transform -translate-x-1/2"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
