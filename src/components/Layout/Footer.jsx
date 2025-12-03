const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="font-extrabold text-primary text-3xl tracking-tight">
            LPMI<span className="text-black text-xl">.org</span>
          </h2>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Liberty Proclaimers Ministry International — proclaiming Christ,
            transforming lives, raising Kingdom ambassadors.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-sm tracking-wide">
            QUICK LINKS
          </h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="/ministries" className="hover:text-primary">Ministries</a></li>
            <li><a href="/message" className="hover:text-primary">Messages</a></li>
          </ul>
        </div>

        {/* Support & Spiritual */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-sm tracking-wide">
            GET INVOLVED
          </h3>
          <ul className="space-y-2">
            <li><a href="/join" className="hover:text-primary">Join Online</a></li>
            <li><a href="/give" className="hover:text-primary">Giving</a></li>
            <li><a href="/prayer" className="hover:text-primary">Prayer Request</a></li>
            <li><a href="/salvation" className="hover:text-primary">Give Your Life to Christ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-sm tracking-wide">
            CONTACT
          </h3>

          <p className="text-sm text-gray-600">Email:</p>
          <p className="mb-3 text-primary font-medium text-sm cursor-pointer">
            info@lpmi.org
          </p>

          <p className="text-sm text-gray-600">Phone:</p>
          <p className="mb-4 text-primary font-medium text-sm cursor-pointer">
            +234 000 0000 000
          </p>

          <p className="text-sm text-gray-600">Location:</p>
          <p className="text-gray-700 text-sm">Green Pastures Christian Center</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Liberty Proclaimers Ministry International —
            All Rights Reserved.
          </p>

          {/* Socials */}
          <div className="flex space-x-4 mt-4 sm:mt-0 text-gray-500">
            <a className="hover:text-primary" href="#">
              <i className="fa-brands fa-facebook text-xl"></i>
            </a>
            <a className="hover:text-primary" href="#">
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
            <a className="hover:text-primary" href="#">
              <i className="fa-brands fa-youtube text-xl"></i>
            </a>
            <a className="hover:text-primary" href="#">
              <i className="fa-brands fa-x-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
