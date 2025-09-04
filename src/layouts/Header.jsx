import { useEffect, useState } from "react";
import Darkmode from "../components/ui/Darkmode";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { AlignCenter, Search, X } from "lucide-react";

const Header = () => {
  const [search, setsearch] = useState("");
  //   Navigate Stat
  const [openMenu, setOpenMenu] = useState("");

  // Scroll off when aside present
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [openMenu]);

  return (
    <div className="bg-white ">
      <header className="fixed top-0 w-full bg-white dark:bg-black dark:border-b border-white z-50">
        <div className="flex justify-between px-4 h-16 items-center">
          {/* logo  */}
          <Link to={"/"}>
            <h5 className="text-green-700 font-bold text-2xl">Health care</h5>
            <p className="text-[10px] tracking-[1px] dark:text-white">
              Doctor Appointment
            </p>
          </Link>
          <div className="flex items-center gap-3">
            {/* search && search Button */}
            <div className=" hidden md:flex items-center">
              <input
                type="text"
                value={search}
                placeholder="Search"
                onChange={(e) => setsearch(e.target.value)}
                className="border w-[180px] h-[35px] rounded px-2 border-black/30 shadow dark:bg-white"
              />
              <button
                className="bg-gray-200 h-[35px] rounded w-[40px] flex items-center justify-center cursor-pointer"
                type="button"
              >
                <Search />
              </button>
            </div>
            <Darkmode />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpenMenu(!openMenu)}
              className="block md:hidden"
            >
              {openMenu ? (
                <X
                  size={32}
                  className="text-black dark:text-white dark:bg-black"
                />
              ) : (
                <AlignCenter
                  size={32}
                  className="text-black dark:text-white dark:bg-black"
                />
              )}
            </motion.button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {openMenu && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            exit={{ x: "-100%" }}
            transition={{ duration: "0.3", ease: "easeInOut" }}
            className="fixed h-full w-10/12 p-8 bg-gray-300 dark:bg-black overflow-y-auto mt-16 z-40"
          >
            <h3 className="text-2xl text-black dark:text-white font-semibold pb-6">
              Dashboard
            </h3>
            <ul className="space-y-2">
              <li className="text-black dark:text-white hover:bg-gray-700 p-2 rounded">
                <Link to={"/"} onClick={() => openMenu(false)}>
                  Home
                </Link>
              </li>
              <li className="text-black dark:text-white hover:bg-gray-700 p-2 rounded">
                <Link to={"/doctor"} onClick={() => openMenu(false)}>
                  Doctors
                </Link>
              </li>
              <li className="text-black dark:text-white hover:bg-gray-700 p-2 rounded">
                <Link to={"/register"} onClick={() => openMenu(false)}>
                  Register
                </Link>
              </li>
              <li className="text-black dark:text-white hover:bg-gray-700 p-2 rounded">
                <Link to={"/login"} onClick={() => openMenu(false)}>
                  Login
                </Link>
              </li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
