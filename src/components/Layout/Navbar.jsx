import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Ministries", href: "/ministries" },
    { name: "Message", href: "/message" },
    { name: "Give", href: "/give" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="navbar font-display bg-white/70 backdrop-blur-lg shadow-sm px-6 md:px-4 py-4 flex justify-between items-center gap-4 md:gap-3 lg:gap-4 w-full">
      {/* LOGO */}
      <Link to="/" className="flex items-end gap-1 self-start">
        <h2 className="font-extrabold text-primary text-3xl tracking-tight">
          LPMI
        </h2>
        <span className="text-black text-sm font-normal pb-1">.org</span>
      </Link>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex items-center space-x-2">
        {links.map((link) => {
          const isActive = location.pathname === link.href;

          return (
            <Link
              key={link.name}
              to={link.href}
              className={`relative px-4 transition-colors ${
                isActive
                  ? "text-white font-semibold"
                  : "text-gray-800 hover:text-primary"
              }`}
            >
              {link.name}

              {/* UNDERLINE ANIMATION */}
              <span
                className={`absolute inset-0 -z-10 left-0 -bottom-0.5 h-full bg-primary transition-all duration-300 ${
                  isActive ? "w-full h-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          );
        })}
      </div>

      {/* CTA BUTTON */}
      <div className="hidden md:block">
        <Link
          to="/join"
          className="px-5 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
        >
          Join Us
        </Link>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setOpen(!open)}
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute inset-0 top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col py-4 space-y-3 px-6 z-100">
          {links.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`text-lg ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            onClick={() => setOpen(false)}
            to="/join"
            className="mt-2 px-5 py-2 rounded-full bg-primary text-white font-semibold text-center"
          >
            Join Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
