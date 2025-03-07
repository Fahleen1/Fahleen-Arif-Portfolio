'use client';

import { NavItems } from '../constants/items';
import { CircleX, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.nav
      className="fixed top-[20px] p-2 inset-x-0 mx-auto max-w-xl z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <ul className="hidden lg:flex flex-row items-center justify-center border border-gray-400/10 bg-gray-400/5 backdrop-blur-lg rounded-2xl gap-6 p-4">
        {NavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                data-active={isActive}
                onMouseOver={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(pathname)}
                className={`px-4 py-2 rounded-xl text-smoky transition-all duration-300 relative text-sm lg:text-base no-underline `}
              >
                {item.name}
                {item.href === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-black/5 rounded-xl -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{ width: '100%' }}
                    transition={{
                      type: 'spring',
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed right-2 top-2 p-2 text-black z-50"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <CircleX className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-0 lg:hidden z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Navigation */}
      <ul
        className={`fixed lg:hidden top-0 w-[60%] max-w-[300px] text-smoky h-full bg-white transition-all duration-300 ease-in-out z-50 ${
          isOpen ? 'left-0' : '-left-full'
        }`}
      >
        {NavItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="block p-4 text-smoky text-sm border-b border-black/5 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
