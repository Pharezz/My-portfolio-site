import React, { useEffect, useState } from "react";

const navigation = [
  { title: "home", url: "#home" },
  { title: "projects", url: "#projects" },
    { title: "about", url: "#about" },
  { title: "stacks", url: "#stacks" },
  { title: "contact", url: "#contact" },
];

const Navbar = ({ isClicked, toggleNavClick }) => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile navgation */}
      <nav
        className={`${
          isClicked ? "translate-x-0" : "-translate-x-[190.25rem]"
        } fixed left-0 top-0 h-screen w-full flex items-center justify-start transition-all duration-500 lg:hidden`}
      >
        <ul className="h-full w-[60%] bg-gray-900 pl-4 pt-22">
          {navigation.map((item) => (
            <li
              key={item.title}
              className="mb-4 text-lg font-medium capitalize"
            >
              <a
                href={item.url}
                className={`${
                  activeLink === item.title ? "text-indigo-600" : "text-white"
                } hover:text-indigo-600 transition-colors duration-300 ease-in`}
                onClick={() => toggleNavClick()}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Desktop navgation */}
      <nav className="hidden md:inline-flex">
        <ul className="flex gap-10 capitalize">
          {navigation.map((item) => (
            <li key={item.title} className="inline-block">
              <a
                href={item.url}
                className={`relative font-semibold text-sm after:absolute after:bottom-[0.2rem] after:left-0 after:h-[3px] after:w-[20px] after:rounded-xl after:transition-all after:duration-300 after:ease-in hover:after:bg-indigo-600 hover:after:w-full ${
                  activeLink === item.title ? "text-indigo-600 relative after:absolute after:bottom-[0.2rem] after:left-0 after:h-[3px] after:w-full after:rounded-xl after:bg-indigo-600" : "text-white"
                } hover:text-indigo-600 transition-colors duration-300 ease-in`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
