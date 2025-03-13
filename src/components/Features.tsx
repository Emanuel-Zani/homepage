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
    <section className="py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-10 text-gray-800"
      >
        Características
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 * index }}
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
          >
            <div className="text-5xl">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
