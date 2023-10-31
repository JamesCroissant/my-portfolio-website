import React from 'react';
import NavLink from "./NavLink";

const MenuList = ({ links }) => {
    return (
      <div className="menu fixed top-24 right-5 duration-300 z-100 bg-[#121212] md:hidden">
        <ul className="ox-2 py-3 space-y-1 sm:px-3">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink 
                href={link.path} 
                title={link.title} 
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }

export default MenuList;