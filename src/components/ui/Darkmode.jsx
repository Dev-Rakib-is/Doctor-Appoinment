import { useState,useEffect } from "react";
import { Moon,Sun} from "lucide-react";


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
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
    >
      {darkMode ? <Moon/> : <Sun/>}
    </button>
  );
};

export default Darkmode;
