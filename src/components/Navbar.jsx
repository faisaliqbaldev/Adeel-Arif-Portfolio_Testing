import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Research", href: "/research" },
    { label: "Teaching", href: "/teachings" },
  ];

  const isActive = (href) =>
    location.pathname === href;

  const linkClassName = (href) =>
    `text-label-caps font-label-caps transition-colors duration-200 pb-1 ${
      isActive(href)
        ? "text-secondary border-b-2 border-secondary"
        : "text-on-surface-variant hover:text-secondary"
    }`;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-subtle bg-surface">
      <nav className="mx-auto flex h-15 max-w-container-max items-center justify-between px-margin-phone md:h-20 md:px-margin-desktop">
        <Link
          to="/"
          className="text-headline-sm font-headline-sm font-bold text-primary"
        >
          Adeel Arif
        </Link>

        <div className="hidden items-center gap-gutter md:flex">
          {navLinks.map((link) => (
            <Link
              to={link.href}
              key={link.label}
              className={linkClassName(link.href)}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="mailto:adeel.arif@ucp.edu.pk"
            className="text-label-caps font-label-caps text-on-surface-variant transition-colors duration-200 hover:text-secondary"
          >
            Contact
          </a>
        </div>

        <Link
          to="/cv"
          className="hidden rounded-DEFAULT bg-secondary px-6 py-3 text-label-caps font-label-caps text-on-secondary transition-colors hover:bg-secondary/90 md:inline-flex"
        >
          Download CV
        </Link>

        <div className="flex h-auto w-auto flex-col md:hidden">
          <button
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute left-0 top-20 flex w-full flex-col gap-gutter overflow-hidden border-b border-border-subtle bg-surface px-margin-phone md:hidden"
              >
                {navLinks.map((link) => (
                  <Link
                    to={link.href}
                    key={link.label}
                    onClick={() => setIsOpen(false)}
                    className={linkClassName(link.href)}
                  >
                    {link.label}
                  </Link>
                ))}

                <a
                  href="mailto:adeel.arif@ucp.edu.pk"
                  className="pb-1 text-label-caps font-label-caps text-on-surface-variant transition-colors duration-200 hover:text-secondary"
                >
                  Contact
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;