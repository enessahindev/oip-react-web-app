//import data
import { navigation } from "./data";

const Navbar = () => {
  return (
    <nav className="text-[15px]">
      <ul className="flex gap-x-10">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="text-gray-700 font-semibold capitalize hover:text-red-700 transition"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;