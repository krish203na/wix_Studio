import React from 'react'

const NavbarList = () => {
  return (
    <ul className="hidden gap-[3vw] items-center sm:flex">
      <li>
        Product{" "}
        <span>
          <i class="fa-solid fa-angle-down"></i>
        </span>
      </li>
      <li>Resources</li>
      <li>Enterprice</li>
      <li>Pricing</li>
    </ul>
  );
}

export default NavbarList
