const img = "https://placehold.co/600x400";
import gpcc from "../../assets/images/gpcc.jpg";
import sa from "../../assets/images/sa.jpg"

const MinistriesBanner = () => {
  const mincards = [
    {
      title: "Green Pasture Christian Center",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur ipsum laudantium explicabo cum exercitationem aliquam molestias magni molestiae hic rerum nam dolor obcaecati iste neque sunt assumenda sit, asperiores, temporibus magnam dolorem. Harum reiciendis aliquid eius repudiandae pariatur quibusdam iure velit omnis, fugit, ipsam tempora dolorem, rem similique! Impedit.",
      color: "bg-green-500",
      hoverClass: "group-hover/mincard:bg-green-500/60",
      img: "../../assets/images/gpcc.jpg"
    },
    {
      title: "Singles Agenda",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur ipsum laudantium explicabo cum exercitationem aliquam molestias magni molestiae hic rerum nam dolor obcaecati iste neque sunt assumenda sit, asperiores, temporibus magnam dolorem. Harum reiciendis aliquid eius repudiandae pariatur quibusdam iure velit omnis, fugit, ipsam tempora dolorem, rem similique! Impedit.",
      color: "bg-[#12ADC9]",
      hoverClass: "group-hover/mincard:bg-[#12ADC999]",
      img: "../../assets/images/gpcc.jpg"
    },
    {
      title: "Green Pasture Christian Center",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur ipsum laudantium explicabo cum exercitationem aliquam molestias magni molestiae hic rerum nam dolor obcaecati iste neque sunt assumenda sit, asperiores, temporibus magnam dolorem. Harum reiciendis aliquid eius repudiandae pariatur quibusdam iure velit omnis, fugit, ipsam tempora dolorem, rem similique! Impedit.",
      color: "bg-blue-500",
      hoverClass: "group-hover/mincard:bg-blue-500/60",
    },
  ];
  return (
    <section className="w-screen h-[710px] overflow-hidden">
      <div className="flex justify-center items-center h-full group/general">
        {mincards.map((mincard, i) => (
          <div
            key={i}
            className="group/mincard group-hover/mincard:items-end flex flex-col h-full w-1/3 justify-center items-center hover:w-[80%] transition-all duration-300 delay-100"
            style={{
              backgroundImage: `url(${mincard.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className={`flex flex-col justify-center items-center relative h-full w-full ${mincard.color} ${mincard.hoverClass} transition duration-300`}
            >
              <div className="flex justify-center items-center">
                <img
                  src={`${mincard.img}`}
                  alt={mincard.title}
                  className="h-46 w-46 rounded-full group-hover/mincard:hidden transition duration-300 object-cover"
                />
              </div>

              <div className="relative z-10 content p-6 flex flex-col gap-4 group-hover/mincard:mt-auto">
                <h1 className="font-bold group-hover/mincard:text-white transition duration-300 text-5xl text-center group-hover/mincard:text-start">
                  {mincard.title}
                </h1>
                <p className="group-hover/mincard:text-gray-200 transition duration-300 text-xl hidden group-hover/mincard:flex text-start">
                  {mincard.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default MinistriesBanner;
