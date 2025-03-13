import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className=" py-20 bg-blue-600 text-white text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Bienvenido a nuestro SaaS</h1>
        <p className="text-xl mt-4">Simplifica tus procesos hoy mismo</p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-yellow-500 text-black px-8 py-3 rounded-lg"
        >
          Empieza Ahora
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
