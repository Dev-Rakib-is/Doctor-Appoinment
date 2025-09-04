import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, scale } from "motion/react";


const Darkmode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <motion.button
    whileTap={{scale:0.95}}
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full cursor-pointer outline-0"
    >
      {darkMode ? <Moon /> : <Sun />}
    </motion.button>
  );
};

export default Darkmode;
