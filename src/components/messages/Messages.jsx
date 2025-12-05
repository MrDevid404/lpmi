import { Send } from "lucide-react";

const Messages = () => {
  return (
    <section className="w-screen max-w-6xloverflow-hidden">
      <div className="grid grid-cols-2 h-screen">
        <div className="bg-secondary w-full h-full"></div>
        <div className="px-6 py-20 md:px-10 lg:px-20 flex flex-col gap-4">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-secondary to-primary">
            Send In Your Messages
          </h1>
          <p className="text-text-secondary text-sm">
            Your prayer requests, contributions, questions etc.
          </p>
          <form method="get">
            <div className="flex flex-col gap-3">
              {/* NAME */}
              <div class="relative">
                <input
                  type="text"
                  placeholder=" "
                  class="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-accent transition-all"
                />
                <label
                  class="absolute left-3 top-2 text-gray-400 text-sm pointer-events-none transition-all duration-300
               peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
               peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm"
                >
                  Your Name
                </label>
              </div>

              {/* MESSAGE */}
              <div class="relative">
                <textarea
                  type="text"
                  placeholder=" "
                  class="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-accent transition-all"
                ></textarea>
                <label
                  class="absolute left-3 top-2 text-gray-400 text-sm pointer-events-none transition-all duration-300
               peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
               peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm"
                >
                  Your Message
                </label>
              </div>
              <button
                type="submit"
                className="btn-primary w-30 flex justify-center items-center gap-x-2"
              >
                Send{" "}
                <span>
                  <Send />
                </span>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Messages;
