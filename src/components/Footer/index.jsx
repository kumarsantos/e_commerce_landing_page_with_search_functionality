import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p>
              Promilo understands one’s right to browse and expectation to be
              secure. Promilo provides you with a safe and private search engine
              that can help you to protect your online privacy and security.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p>Email: hrone@promilo.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Subscribe</h2>
            <p>Subscribe to our newsletter for updates.</p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full"
              />
              <button className="bg-blue-500 text-white py-2 px-4 mt-2 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
