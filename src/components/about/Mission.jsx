const Mission = () => {
  const MissionCards = [
    {
      title: "Our Mission",
      sub: "Preserving The Remnants Unto God.",
      desc: "We exist to proclaim Christ with clarity, calling people into a life shaped by truth and transformed by grace. Through teaching, discipleship, and sincere fellowship, we nurture believers into maturity. Our mission is to equip every heart to live boldly for God, carrying His light into families, communities, and every space where their influence reaches.",
    },
    {
      title: "The Vision",
      sub: "Raising a people preserved for God.",
      desc: "Our vision is to raise a preserved remnant, a people strengthened in faith and established in the Word. We seek to build believers who carry God’s presence with conviction and character. Through prayer, service, and intentional spiritual growth, we aim to shape generations that honor Christ and reveal His kingdom in every aspect of life.",
    },
    {
      title: "Core Values",
      sub: "What shapes who we are.",
      desc: "We uphold values rooted in Scripture: love expressed through compassion, integrity shown in daily choices, and faith demonstrated through obedience. Our commitment to excellence shapes our worship, service, and relationships. These values guide how we live, how we lead, and how we represent Christ, ensuring that everything we do reflects His heart and purpose.",
    },
  ];
  return (
    <section className="mainsection border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-10">
        {MissionCards.map((card, i) => (
          <div
            key={i}
            className="group"
          >
            <div className="relative group-hover:scale-105 transition-transform duration-300 flex flex-col gap-4 group items-center justify-center">
              <div className="relative inline-block cursor-pointer px-3">
                <span className="absolute inset-0 -z-10 left-0 -bottom-0.5 h-full bg-primary w-0 transition-all duration-300 group-hover:w-full group-hover:h-full" />
                <h1 className="relative z-10 text-4xl font-bold text-center group-hover:text-white transition-all duration-300">
                  {" "}
                  {card.title}{" "}
                </h1>
              </div>
              <p className="italic text-xs text-gray-300">{card.sub}</p>
              <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed text-gray-700">
                {" "}
                {card.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Mission;
