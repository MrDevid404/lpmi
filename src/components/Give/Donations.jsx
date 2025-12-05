import { Send, Copy } from "lucide-react";
import { useState } from "react";

const Donations = () => {
  const [copied, setCopied] = useState(false);

  const copyAccount = () => {
    navigator.clipboard.writeText("1234567890"); // replace with your account number
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-screen">

        {/* LEFT SIDE — Image / Banner */}
        <div className="bg-secondary w-full h-full"></div>

        {/* RIGHT SIDE — Donation Form */}
        <div className="px-6 py-16 md:px-10 lg:px-20 flex flex-col gap-6">

          {/* Title */}
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-blue-500">
            Send In Your Donations
          </h1>

          {/* Subtitle */}
          <p className="text-text-secondary text-sm">
            Your prayer requests, contributions, and questions.
          </p>

          {/* Donation Options Box */}
          <div className="w-full border px-3 py-4 outline-none border-primary focus:ring-1 ring-accent transition-all rounded-xl p-4 flex flex-col gap-3">
            <h2 className="font-semibold text-lg">Bank Transfer</h2>

            <p className="text-sm">
              <span className="font-medium">Account Name:</span> LPMI Church
            </p>

            <p className="text-sm">
              <span className="font-medium">Bank:</span> Access Bank
            </p>

            <div className="flex items-center gap-2">
              <p className="text-sm">
                <span className="font-medium">Account Number:</span> 1234567890
              </p>

              <button
                onClick={copyAccount}
                className="btn-primary p-0 border hover:bg-gray-100 transition"
              >
                <Copy size={16} />
              </button>

              {copied && (
                <span className="text-primary text-xs">Copied!</span>
              )}
            </div>
          </div>

          {/* FORM */}
          <form method="get">
            <div className="flex flex-col gap-3">
              {/* NAME */}
              <div class="relative">
                <input
                  type="text"
                  placeholder=" "
                  class="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-accent transition-all"
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
                  class="w-full border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-accent transition-all"
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

export default Donations;
