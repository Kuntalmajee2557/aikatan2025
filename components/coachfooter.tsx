import React from 'react';
import { Facebook, Instagram, Youtube, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start text-center md:text-left gap-12">
          {/* Logo & Description */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-3">
              <span className="text-yellow-400">ঐকtan</span> 2k25
            </h2>
            <p className="text-gray-300">
              "Experience the thrill of innovation at the ultimate tech fest! Join us for exciting events and workshops covering everything from coding to design."
            </p>
            <p className="mt-3">
              Email: <a href="mailto:fest@rkmgec.ac.in" className="text-yellow-400 hover:underline">fest@rkmgec.ac.in</a>
            </p>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/aikatan.rkmgec" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-7 h-7 text-gray-400 hover:text-yellow-400 transition duration-300" />
              </a>
              <a href="https://www.instagram.com/@RKMGECOFFICIAL" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-7 h-7 text-gray-400 hover:text-yellow-400 transition duration-300" />
              </a>
              <a href="https://www.youtube.com/@RKMGECOFFICIAL" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-7 h-7 text-gray-400 hover:text-yellow-400 transition duration-300" />
              </a>
            </div>
          </div>

          {/* Address & Location */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p className="text-gray-300">Ramkrishna Mahato Government Engineering College, Agharpur, Purulia 723203</p>
            <a href="https://www.google.com/maps/place/Ram+Krishna+Mahato+Government+Engin…" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline flex items-center mt-2">
              <MapPin className="w-5 h-5 mr-2" /> View on Map
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Copyright */}
        <p className="text-center text-gray-400">
          © 2023-24 Aikatan RKMGEC - Web & Designer Team. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
