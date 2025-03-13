import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => {
      const newMode = !prevState;
      if (newMode) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <label className="absolute top-4 right-4 flex items-center cursor-pointer">
      <div
        className={`relative inline-block w-10 h-6 rounded-full ${
          isDarkMode ? "bg-gray-800" : "bg-gray-400"
        }`}
      >
        <input
          type="checkbox"
          className="sr-only"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <div
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
            isDarkMode ? "transform translate-x-4" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white bg-light-background dark:bg-dark-background ">
      <DarkModeToggle />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-screen-md px-6 sm:px-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-light-text dark:text-dark-text">
          Bienvenido a nuestro SaaS
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mt-4 text-light-text dark:text-dark-text">
          Simplifica tus procesos hoy mismo
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          className="mt-6 inline-block bg-light-primary dark:bg-dark-primary text-black px-6 sm:px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:text-black"
          aria-label="Empieza ahora con nuestro servicio SaaS"
        >
          Empieza Ahora
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
