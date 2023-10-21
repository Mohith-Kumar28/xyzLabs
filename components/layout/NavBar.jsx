import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex gap-6 md:gap-16 p-6 absolute top-0 z-10 left-0 w-full justify-center font-krona">
      <Link className="" href="#">
        Home
      </Link>
      <Link className="" href="#">
        About
      </Link>
      <Link className="" href="#">
        Team
      </Link>
    </div>
  );
};

export default NavBar;
