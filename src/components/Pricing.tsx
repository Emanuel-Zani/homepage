import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Básico",
    price: "$9.99/mes",
    features: ["1 usuario", "5GB de almacenamiento", "Soporte básico"],
  },
  {
    name: "Pro",
    price: "$19.99/mes",
    features: ["5 usuarios", "50GB de almacenamiento", "Soporte prioritario"],
    recommended: true,
  },
  {
    name: "Empresarial",
    price: "$49.99/mes",
    features: [
      "Usuarios ilimitados",
      "200GB de almacenamiento",
      "Soporte 24/7",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="w-full relative py-20 bg-light-background dark:bg-dark-background text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-10 text-light-text dark:text-dark-text"
        >
          Planes de Precios
        </motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 relative z-10">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 * index }}
            className={`p-8 rounded-lg shadow-lg transition transform hover:scale-105 ${
              plan.recommended
                ? "bg-light-accent text-white dark:bg-dark-accent text-light-text dark:text-black"
                : "bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="text-3xl font-bold my-4">{plan.price}</p>
            <ul className="space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-lg">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 px-6 py-3 font-semibold rounded-lg shadow-lg transition ${
                plan.recommended
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-light-primary dark:bg-dark-primary text-white "
              }`}
            >
              Elegir Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
