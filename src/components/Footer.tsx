import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
      className="w-full py-10 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text text-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-700"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <div className="text-sm text-light-text dark:text-dark-text mb-6">
          <p>📍 1234 Calle Ficticia, Ciudad, País</p>
          <p>📞 +123 456 7890</p>
          <p>✉️ contacto@saascompany.com</p>
        </div>

        <p className="text-sm text-light-text dark:text-dark-text">
          © 2025 SaaS Company. Todos los derechos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
