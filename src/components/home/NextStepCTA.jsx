const NextStepCTA = () => {
  return (
    <section className="hero relative text-white body-font min-h-screen px-6 py-16 md:px-10 lg:px-20 bg-[url('https://plus.unsplash.com/premium_photo-1669050701110-a5eb879f1b6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870')] bg-cover bg-center">
      <div className="hero-content text-center">
        <div className="max-w-[792px] mx-auto px-4 animate-slide-up-fade">
          <p className="uppercase tracking-[0.2em] text-xs text-primary rounded-full border-2 bg-white/35 mb-3 font-bold inline-block px-3 py-1">
            Your Journey Starts Here
          </p>

          <h1 className="text-5xl font-bold text-center w-full [animation-delay:0.1s] animate-slide-up-fade">
            Take the Next Step in Your Faith Journey
          </h1>

          <div className="flex flex-col sm:flex-row justify-center items-center [animation-delay:0.2s] animate-slide-up-fade gap-x-6 gap-y-4 mt-6 mb-8">
            <button className="btn-primary border-0 py-2.5 px-6 leading-8 transition-colors duration-200 ease-in-out focus:outline-none hover:bg-[#464646] text-lg">
              Give Your Life To Christ
            </button>
            <button className="btn-outline border-0 py-2.5 px-6 leading-8 transition-colors duration-200 ease-in-out focus:outline-none hover:bg-[#464646] text-lg">
              Serve With Us
            </button>
          </div>

          <p className="text-lg text-center text-gray-200 max-w-prose mx-auto [animation-delay:0.3s] animate-slide-up-fade">
            “The Lord will guide you always; He will satisfy your needs in a
            sun-scorched land and will strengthen your frame.” — Isaiah 58:11
            (NIV)
          </p>
        </div>
      </div>
    </section>
  );
};
export default NextStepCTA;
