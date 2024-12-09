import React from 'react';
import Last from "../components/Last";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black min-h-screen">
        <section className="text-white py-10 w-full">
          {/* Divider Line (Top) */}
          <div className="mt-8">
            <div className="h-1 bg-orange-500 mx-auto w-3/4"></div>
          </div>
          <br />
          <br />

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
            {/* Heading Section */}
            <div className="text-left mb-6 sm:mb-0">
              <h2 className="text-3xl font-bold text-orange-500">
                Still You Need Our Support&amp;
              </h2>
              <p className="text-gray-400">
                Don&apos;t wait, make a smart & logical quote here. It&apos;s pretty easy.
              </p>
            </div>

            {/* Email Input and Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 sm:mt-0">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="py-2 px-4 rounded-full text-black w-full sm:w-auto"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full mt-4 sm:mt-0">
                Subscribe Now
              </button>
            </div>
          </div>
          <br />
          <br />

          {/* Divider Line (Bottom) */}
          <div className="mt-8">
            <div className="h-1 bg-orange-500 mx-auto w-3/4"></div>
          </div>
        </section>

        {/* New Footer Content Below */}
        <section className="text-white py-10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* About Us Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-gray-400">
                Corporate clients and leisure travelers have been relying on Akksa
                for dependable, safe, and professional car services in major cities
                across the world.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold">Opening Hours</h4>
                <p>Mon - Sat: 8:00 - 6:00</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Useful Links Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500">About</a></li>
                <li><a href="#" className="hover:text-orange-500">News</a></li>
                <li><a href="#" className="hover:text-orange-500">Partners</a></li>
                <li><a href="#" className="hover:text-orange-500">Team</a></li>
                <li><a href="#" className="hover:text-orange-500">Menu</a></li>
                <li><a href="#" className="hover:text-orange-500">Contacts</a></li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Help?</h3>
              <ul className="space-y-2">
                <li><a href="faqs" className="hover:text-orange-500">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-orange-500">Reporting</a></li>
                <li><a href="#" className="hover:text-orange-500">Documentation</a></li>
                <li><a href="#" className="hover:text-orange-500">Support Policy</a></li>
                <li><a href="#" className="hover:text-orange-500">Privacy</a></li>
              </ul>
            </div>

            {/* Recent Posts Section */}
            <div>
              <h3 className="font-bold text-lg mb-4">Recent Post</h3>
              <ul className="space-y-4">
                {[1, 2, 3].map((item, index) => (
                  <li key={index}>
                    <p className="text-gray-400 text-sm">20 Feb 2022</p>
                    <a href="#" className="text-orange-500 hover:underline">Keep Your Business</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Last />
    </footer>
  );
};

export default Footer;
