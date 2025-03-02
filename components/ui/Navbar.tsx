import React, { useState, useEffect } from 'react';
import { Home, Calendar, PartyPopper, Image, Users, MoreHorizontal, X, Sun, Moon } from 'lucide-react';
import { EventDropdown } from './EventDropdown';
import { MoreDropdown } from './MoreDropdown';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed rounded-xl left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? 'w-[70%] bg-stone-700/10 shadow-2xl shadow-stone-800/20 backdrop-blur-md py-2 top-4'
            : 'w-full bg-transparent py-4 top-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent transition-all duration-700 ease-out">
                Logo
              </span>
            </div>
            
            <div className="hidden md:flex md:items-center md:justify-center flex-grow">
              <div className="flex items-center space-x-1 bg-stone-500/10 backdrop-blur-sm px-2 py-1 rounded-2xl">
                <NavItem icon={<Home size={18} />} text="Home" active />
                <NavItem icon={<Calendar size={18} />} text="Schedule" />
                <EventDropdown />
                <NavItem icon={<Image size={18} />} text="Gallery" />
                <NavItem icon={<Users size={18} />} text="Teams" />
                <MoreDropdown />
              </div>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-stone-800 z-50 transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Menu
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-stone-700"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            <MobileNavItem icon={<Home size={18} />} text="Home" active />
            <MobileNavItem icon={<Calendar size={18} />} text="Schedule" />
            
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 border-b border-stone-700">Events</div>
            <MobileNavItem icon={<PartyPopper size={18} className="text-purple-400" />} text="Techlavya" />
            <MobileNavItem icon={<PartyPopper size={18} className="text-green-400" />} text="Esports" />
            <MobileNavItem icon={<PartyPopper size={18} className="text-pink-400" />} text="Cultural" />
            
            <MobileNavItem icon={<Image size={18} />} text="Gallery" />
            <MobileNavItem icon={<Users size={18} />} text="Teams" />
            
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 border-b border-stone-700">More</div>
            <MobileNavItem icon={<Sun size={18} className="text-yellow-500" />} text="Sponsors" />
            <MobileNavItem icon={<Moon size={18} className="text-blue-400" />} text="Contact Us" />
            <MobileNavItem icon={<Moon size={18} className="text-blue-400" />} text="About" />
            <MobileNavItem icon={<Moon size={18} className="text-blue-400" />} text="T&C" />
            <MobileNavItem icon={<Moon size={18} className="text-blue-400" />} text="Privacy & Policy" />
          </div>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) => (
  <a
    href="#"
    className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-500 ease-out group hover:bg-stone-500/20 ${
      active
        ? 'text-white bg-stone-500/40'
        : 'text-gray-300 hover:text-white'
    }`}
  >
    <span className="transform transition-transform duration-300 ease-out group-hover:scale-110">
      {icon}
    </span>
    <span className="transform transition-transform duration-300 ease-out group-hover:translate-x-1">
      {text}
    </span>
  </a>
);

const MobileNavItem = ({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) => (
  <a
    href="#"
    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ease-out ${
      active
        ? 'text-white bg-stone-700'
        : 'text-gray-300 hover:text-white hover:bg-stone-700/50'
    }`}
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default Navbar;