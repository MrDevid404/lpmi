const AboutHero = () => {
  return (
    <section className="hero group">
      <div
        className="blur-overlay absolute inset-0 bg-black/40 backdrop-blur-sm z-10"
        aria-hidden="true"
      ></div>

      {/* Hero Content */}
      <div
        className="relative z-20 grid grid-cols-1 md:grid-cols-2
       gap-2 items-center max-w-6xl mx-auto"
      >
        {/* LEFT COLUMN */}
        <div className="content-left flex flex-col gap-6 text-center lg:text-left animate-slide-up-fade ">
          <h1 className="text-5xl lg:text-8xl font-bold leading-tight">
            About Us
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Even so then at this present time also there is a remnant according to the election of grace. - Romans 11:5
          </p>
        </div>

        {/* RIGHT COLUMN */}
      </div>
    </section>
  );
};

export default AboutHero;
