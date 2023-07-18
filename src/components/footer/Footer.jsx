/* eslint-disable react-refresh/only-export-components */
//import Logo
import Logo from "../../assets/logo.png";

// import social icons
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export const socialData = [
  {
    icon: <AiFillYoutube />,
    href: "https://www.youtube.com/channel/UCrblCiU8Yc1PMQRchgVUDsQ",
  },
  {
    icon: <AiFillInstagram />,
    href: "https://instagram.com/enessahinyazilim/",
  },
  {
    icon: <AiFillGithub />,
    href: "https://github.com/enessahindev",
  },
  {
    icon: <AiFillLinkedin />,
    href: "https://www.linkedin.com/in/enessahin312/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white py-8 lg:py-4">
      <div className="container mx-auto shadow-sm">
        <div className="flex text-black flex-col gap-y-6 lg:flex-row items-center justify-between">
          {/* Logo */}
          <a href="/">
            <img className="w-[50px]" src={Logo} alt="OIP Logo" />
          </a>
          {/* copyright */}
          <div className="text-[15px]">
            OIP &copy; Copyright 2023. All rights reserved
          </div>
          {/* Social */}
          <div className="flex gap-x-4">
            {socialData.map((item, index) => {
              return (
                <a href={item.href} key={index}>
                  <div className="hover:bg-red-600 w-10 h-10 rounded-full flex justify-center items-center transition text-2xl">
                    {item.icon}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
