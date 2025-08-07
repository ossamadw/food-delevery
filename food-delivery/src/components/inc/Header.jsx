import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "View Menu", to: "/menu" },
    { name: "Cart", to: "/cart" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md py-5 px-5 md:px-10 flex justify-between items-center">
      <h1 className="text-2xl italic font-bold">
        <NavLink to="/" className="text-primaryColor font-bold">
          Food_Delivery
        </NavLink>
      </h1>

      {/* Navigation */}
      <nav
        className={`absolute top-full left-0 w-full bg-backgroundColor md:static md:bg-transparent md:w-auto transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <ul className="flex flex-col md:flex-row gap-8 py-10 md:py-0 text-center">
          {navLinks.map((nv, i) => (
            <li key={i}>
              <NavLink
                to={nv.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-primaryColor font-semibold"
                    : "text-textColor hover:text-accentColor transition"
                }
                onClick={() => setIsOpen(false)}
              >
                {nv.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Button */}
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        className={`text-2xl md:hidden transition-colors duration-300 ${
          isOpen ? "text-primaryColor" : "text-textColor"
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>
    </header>
  );
};

export default Header;
