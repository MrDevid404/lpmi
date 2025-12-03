const Ministries = () => {
  const ministries = [
    {
      name: "Youth Ministry",
      img: "https://plus.unsplash.com/premium_photo-1669050701110-a5eb879f1b6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, perspiciatis ad sunt dolore nobis quasi architecto! perspiciatis ad sunt dolore nobis quasi architecto!",
    },
    {
      name: "Youth Ministry",
      img: "https://plus.unsplash.com/premium_photo-1669050701110-a5eb879f1b6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, perspiciatis ad sunt dolore nobis quasi architecto! perspiciatis ad sunt dolore nobis quasi architecto!",
    },
    {
      name: "Youth Ministry",
      img: "https://plus.unsplash.com/premium_photo-1669050701110-a5eb879f1b6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, perspiciatis ad sunt dolore nobis quasi architecto! perspiciatis ad sunt dolore nobis quasi architecto!",
    },
  ];
  return (
    <section className="mainsection">
      <h2 className="text-5xl font-bold text-center text-primary mb-10">
        Ministries
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {ministries.map((ministry, i) => (
          <div
            key={i}
            className="group ministry-card flex flex-col h-full transition-all duration-300"
            style={{
              backgroundImage: `url(${ministry.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* On hover, fade in a dark overlay so text stays readable */}
            <div className="flex justify-center items-center relative h-[272px] w-full inset-0 bg-secondary group-hover:opacity-60 transition duration-300">
              <div className="flex justify-center items-center">
                <img
                  src={ministry.img || "/images/placeholder.png"}
                  alt={ministry.name}
                  className="w-48 h-48 bg-primary rounded-full object-cover group-hover:hidden transition duration-300"
                />
              </div>

              <div className="hidden group-hover:sm:flex relative z-10 content p-6 flex-col justify-center items-center space-y-4 text-center flex-1">
                <h2 className="font-bold text- text-xl group-hover:text-black transition duration-300">
                  {ministry.name}
                </h2>
                <p className="group-hover:text-gray-700 transition duration-300">
                  {ministry.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Ministries;
