import HeroImg from "../assets/hero-img.png";

const Hero = () => {
  return (
    <section id="home">
      <div className="z-40">
        <div className="container flex items-center justify-center text-center h-screen">
          <div className="max-w-[800px] mx-auto">
            {/* Hero image */}
            <div className="mb-6">
              <img
                className="size-[100px] rounded-full object-cover mx-auto bg-gradient-to-r from-indigo-700 to-purple-600"
                src={HeroImg}
                alt="hero image"
              />
            </div>
            {/* Hero content */}
            <div>
              <h1 className="mb-2 text-3xl font-extrabold leading-[1.2] md:text-5xl">Developing <span className="bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">Seamless</span> Web Solutions</h1>
              <p className="mb-4 md:text-lg"> 
                I create sleek, high-performng web solutions that solve real
                problems by aligning every feature with your goals and users'
                needs. Let's bring your vision to life!
              </p>
              <a href="#projects" className="px-6 py-3 inline-block capitalize font-semibold bg-gradient-to-r from-indigo-700 to-purple-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-600 duration-500 transition-transform hover:-translate-y-1 ease-in-out text-white rounded-full">View My Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
