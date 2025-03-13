import { motion } from "framer-motion";

const features = [
  {
    icon: "🚀",
    title: "Automatización Inteligente",
    description:
      "Optimiza tareas repetitivas y ahorra tiempo con nuestra IA avanzada.",
  },
  {
    icon: "📊",
    title: "Análisis de Datos",
    description:
      "Obtén reportes detallados y toma decisiones basadas en datos.",
  },
  {
    icon: "🔒",
    title: "Seguridad de Nivel Empresarial",
    description:
      "Tus datos están protegidos con cifrado y medidas de seguridad avanzadas.",
  },
  {
    icon: "⚡",
    title: "Rendimiento Rápido",
    description:
      "Carga ultrarrápida y una experiencia fluida para todos los usuarios.",
  },
];

const Features = () => {
  return (
    <motion.section
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="w-full p-5 bg-light-background dark:bg-dark-background text-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-10 text-light-text dark:text-dark-text"
      >
        Características
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-screen-lg mx-auto px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="bg-light-secondary dark:bg-dark-secondary text-light-primary dark:text-dark-primary p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mt-4 text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Features;
