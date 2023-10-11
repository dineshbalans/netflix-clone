import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 350 ? setShow(true) : setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed z-50 top-0 ${
        show ? "bg-[#111]" : ""
      } duration-500 ease-in`}
    >
      <div className="container mx-auto flex justify-between p-5">
        <img
          className="w-20 object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <img
          className="w-8 object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
        />
      </div>
    </nav>
  );
};

export default NavBar;
