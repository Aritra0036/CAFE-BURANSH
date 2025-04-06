"use client";
import React, { useState, useEffect } from 'react';
import Button from "./Button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'EXPERIENCES', href: '/experiences' },
    { name: 'EXPLORE', href: '/explore' },
    { name: 'HOUSE RULES', href: '/house-rules' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'TRAVEL PLANNER', href: '/travel-planner' },
    { name: 'PROPERTY GUIDELINES / FAQ', href: '/faq' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-3' : 'py-8'}`}>
        <div className={`mx-auto px-4 ${scrolled ? 'flex justify-between items-center max-w-7xl' : 'flex flex-col items-center'}`}>
          
          {/* Logo */}
          <div className={`${scrolled ? 'my-2' : 'mb-6'} xl:mx-0 mx-auto`}>
            <img src="/logo.png" alt="Logo" className="h-15 sm:h-17 md:h-17 lg:h-17 "/>
          </div>

          {/* Hamburger Button */}
          <button 
            className="xl:hidden absolute right-4 top-1/3 transform -translate-y-1/2 p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-4xl text-white">×</span>
            ) : (
              <div className="w-6 flex flex-col gap-1.5">
                <span className="h-0.5 bg-current w-full"></span>
                <span className="h-0.5 bg-current w-full"></span>
                <span className="h-0.5 bg-current w-full"></span>
              </div>
            )}
          </button>

          {/* Desktop Navigation - WITH UNDERLINE ANIMATION RESTORED */}
          <div className={`${scrolled ? 'flex gap-4 md:gap-6' : 'flex gap-4 lg:gap-10 justify-center w-full'} hidden xl:flex`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-[13px] md:text-[15px] lg:text-[16px] xl:text-[14px] relative font-bold py-2 group
                  ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-[#262625] hover:text-[#bd1d76]'}`}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className={`${scrolled ? '' : 'absolute right-25 top-1/4 transform -translate-y-1/2'} hidden xl:block`}>
            <Button 
              targetUrl="#contacts" 
              className={`${scrolled ? 'bg-primary text-white' : 'hover:border-1 hover:rounded-[7px] hover:border-[#bd1d76] text-white hover:bg-white hover:text-black'}`}
              buttonName="ENQUIRE NOW" 
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 xl:hidden bg-black/30 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-3/4 bg-white/10 backdrop-blur-lg p-6 overflow-y-auto">          
            <div className="mt-30 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white font-bold py-3 px-4 hover:bg-white/20 rounded-lg text-lg relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="absolute left-4 right-4 bottom-2 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <Button 
                targetUrl="#contacts" 
                className="w-full bg-white/30 text-white hover:bg-white/50"
                buttonName="ENQUIRE NOW"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;