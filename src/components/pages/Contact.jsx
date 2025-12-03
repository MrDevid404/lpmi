import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-screen max-w-6xloverflow-hidden">
      <div className="grid grid-cols-2 h-screen">
        <div className="bg-secondary w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0638020146903!2d3.9149414205465174!3d7.568023399889604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039efdc948b4065%3A0xf9c47114ddf0d8ac!2sRoyal%20Seed%20Events%20Centre!5e0!3m2!1sen!2sng!4v1762946934269!5m2!1sen!2sng"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="px-6 py-20 md:px-10 lg:px-20 flex flex-col gap-4">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-200 to-blue-500">
            Contact Us
          </h1>
          <p className="text-text-secondary text-sm">
            Your prayer requests, contributions, questions etc.
          </p>
          <form method="get">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 border rounded-lg"
              />
              <textarea
                placeholder="Type Here"
                className="p-2 border rounded-lg"
              ></textarea>
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
export default Contact;