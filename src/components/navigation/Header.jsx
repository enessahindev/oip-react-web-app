import { useState, useEffect } from "react";

// import logo
import Logo from "../../assets/logo.png";

//import icons
import { CgMenuRight } from "react-icons/cg";

// import components
import Navbar from "./Navbar";
import NavMobile from "./NavMobile";
import Program from "./Program";

const Header = () => {
  // header bgState
  const [bg, setBg] = useState(false);
  // navMobile state
  const [navMobile, setNavMobile] = useState(false);

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-white py-3 shadow-md" : "bg-none py-5"
      } fixed w-full right-0 left-0 z-10 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <a href="/">
          <img className="w-[50px]" src={Logo} alt="Logo" />
        </a>
        {/* nav */}
        <div className="hidden lg:flex">
          <Navbar />
        </div>
        {/* program */}
        <div>
          <Program />
        </div>
        {/* nav mobile button */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="lg:hidden cursor-pointer"
        >
          <CgMenuRight className="text-blue text-3xl" />
        </div>
        {/* Mobile nav */}
        <div
          className={`${
            navMobile ? "max-h-[260px]" : "max-h-0"
          } fixed bg-gradient-to-tr from-[#BE1E2D] to-[#252525] text-white shadow-lg left-0 w-full top-[78px] h-full overflow-hidden transition-all`}
        >
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;