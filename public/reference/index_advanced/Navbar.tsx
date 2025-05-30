"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "VISION", path: "/vision" },
    { name: "PROBLEM", path: "/problem" },
    { name: "SOLUTION", path: "/solution" },
    { name: "RESERVE", path: "/reserve" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm">
      <div className="font-posterama container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-posterama tracking-widest text-2xl  text-black dark:text-white"
          >
            SAVA ROBOTICS
          </motion.div>
        </Link>

        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <motion.span
                whileHover={{ y: -2 }}
                className="font-roboto-mono text-black dark:text-white cursor-pointer text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </nav>

        {mounted && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="hidden md:block px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium"
          >
            Reserve A Robot
          </motion.button>
        )}

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full bg-black text-white dark:bg-white dark:text-black"
          whileTap={{ scale: 0.95 }}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.span
            variants={{
              open: { rotate: 180, opacity: 1 },
              closed: { rotate: 0, opacity: 1 }
            }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? "✕" : "☰"}
          </motion.span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 py-2 flex flex-col space-y-4 bg-white dark:bg-black">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.path}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="font-roboto-mono text-black dark:text-white block py-2"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
