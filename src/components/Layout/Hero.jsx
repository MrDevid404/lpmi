import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  {
    src: "https://placehold.co/600x400",
    alt: "Church Gathering",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Worship Team",
  },
  {
    src: "https://placehold.co/600x400",
    alt: "Community Outreach",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero group">
      {/* Dark overlay */}
      <div
        className="blur-overlay absolute inset-0 bg-black/40 backdrop-blur-sm z-10"
        aria-hidden="true"
      ></div>

      {/* Hero Content */}
      <div
        className="relative z-20 grid grid-cols-1 md:grid-cols-2
       gap-10 items-center max-w-6xl mx-auto"
      >
        {/* LEFT COLUMN */}
        <div className="content-left flex flex-col gap-6 text-center lg:text-left animate-slide-up-fade">
          <h1 className="text-5xl lg:text-8xl font-bold ">
            Welcome <span className="text-primary">Home</span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0">
            In this house, hearts find peace, burdens find rest, and every soul
            finds a place to call home.
          </p>

          <p className="italic text-xs text-gray-300">
            “Come to me, all you who are weary and burdened, and I will give you
            rest.” — Matthew 11:28 (NIV)
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="btn btn-outline text-md rounded-full w-56 hover:scale-105 transition-transform duration-300">
              Join Us This Sunday
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN (Carousel) */}
        <div className="relative flex justify-center items-center animate-slide-up-fade [animation-delay:0.1s]">
          <div className="w-full h-80 sm:h-96 lg:h-128 rounded-xl overflow-hidden shadow-lg relative">
            <img
              src={carouselImages[currentIndex].src}
              alt={carouselImages[currentIndex].alt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            />
          </div>

          {/* Optional arrows */}
          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0
                  ? carouselImages.length - 1
                  : currentIndex - 1
              )
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % carouselImages.length)
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
