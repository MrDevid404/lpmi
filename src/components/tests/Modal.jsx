<div
            key={i}
            className={`group/mincard group-hover/mincard:items-end flex flex-col gap-y-5 justify-center items-center ${mincard.color} p-6 w-1/3 h-full hover:w-[80%] transition-all duration-300 delay-100 bg-cover bg-center group-hover/mincard:bg-opacity-30`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className={`flex justify-center items-center relative h-full w-full ${mincard.color} group-hover/mincard:opacity-60 transition duration-300`}>
                <div className="flex justify-center items-center">
                <img
                  src={img}
                  alt={mincard.title}
                  className="h-46 w-46 rounded-full group-hover/mincard:hidden transition duration-300 bg-primary object-cover"
                />
              </div>
            </div>
            
            <div className="group-hover/mincard:mt-auto">
              <h1 className="text-5xl text-center group-hover/mincard:text-start font-bold">
                {mincard.title}
              </h1>
              <p className="text-xl hidden group-hover/mincard:flex">
                {mincard.desc}
              </p>
            </div>
          </div>