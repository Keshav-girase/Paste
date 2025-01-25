import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";  
import  ThemeContext  from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  // Apply the dark class to the <html> or <body> element
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="w-full h-[45px] flex justify-center items-center p-4 bg-gray-800 gap-x-10 h-16">
      {NavbarData.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold text-xl"
              : "text-white font-medium text-xl"
          }
        >
          {link.title}
        </NavLink>
      ))}
      <button onClick={toggleTheme} className="text-black dark:text-white   p-2 rounded-lg">
        {isDarkMode ? <Sun/> : <Moon/>}
      </button>
    </div>
  );
};

export default Navbar;
