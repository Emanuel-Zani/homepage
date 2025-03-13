import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
      className="py-10 bg-gray-800 text-white text-center"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-700"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © 2025 SaaS Company. Todos los derechos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
