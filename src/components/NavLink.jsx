"use client";
import { Link as ScrollLink } from "react-scroll";

const NavLink = ({ href, title, className }) => {
  return (
    <ScrollLink
      to={href.replace("#", "")}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      activeClass="text-blue-400 font-semibold"
      className={`block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 cursor-pointer hover:text-blue-300 ${className}`}
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
