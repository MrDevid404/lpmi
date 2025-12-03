// Remove the import line
const img = "https://placehold.co/600x400";

const MinistriesBanner = () => {
  const mincards = [
    {
      title: "Green Pasture Christian Center",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur ipsum laudantium explicabo cum exercitationem aliquam molestias magni molestiae hic rerum nam dolor obcaecati iste neque sunt assumenda sit, asperiores, temporibus magnam dolorem. Harum reiciendis aliquid eius repudiandae pariatur quibusdam iure velit omnis, fugit, ipsam tempora dolorem, rem similique! Impedit.",
      color: "bg-red-500",
    },
    {
      title: "Singles Agenda",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur ipsum laudantium explicabo cum exercitationem aliquam molestias magni molestiae hic rerum nam dolor obcaecati iste neque sunt assumenda sit, asperiores, temporibus magnam dolorem. Harum reiciendis aliquid eius repudiandae pariatur quibusdam iure velit omnis, fugit, ipsam tempora dolorem, rem similique! Impedit.",
      color: "bg-green-500",
    },
    {
      title: "Green Pasture Christian Center",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur ipsum laudantium explicabo cum exercitationem aliquam molestias magni molestiae hic rerum nam dolor obcaecati iste neque sunt assumenda sit, asperiores, temporibus magnam dolorem. Harum reiciendis aliquid eius repudiandae pariatur quibusdam iure velit omnis, fugit, ipsam tempora dolorem, rem similique! Impedit.",
      color: "bg-blue-500",
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
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className={`flex flex-col justify-center items-center relative h-full w-full ${mincard.color} group-hover/mincard:opacity-60 transition duration-300`}
            >
              <div className="flex justify-center items-center">
                <img
                  src={img}
                  alt={mincard.title}
                  className="h-46 w-46 rounded-full group-hover/mincard:hidden transition duration-300 bg-primary object-cover"
                />
              </div>

              <div className="relative z-10 content p-6 flex flex-col justify-center items-center text-center group-hover/mincard:mt-auto">
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
