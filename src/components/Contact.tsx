import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-4 flex items-center justify-center min-h-screen bg-light-background dark:bg-dark-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl bg-light-secondary dark:bg-dark-secondary p-6 md:p-10 lg:p-12 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-light-text dark:text-dark-text mb-6">
          Contáctanos
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {success && (
          <p className="text-green-500 mb-4 text-center">
            ¡Mensaje enviado con éxito!
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Tu Nombre"
            className="w-full p-3 rounded-lg border border-light-accent dark:border-dark-accent bg-light-secondary dark:bg-dark-secondary placeholder-light-text dark:placeholder-dark-text"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Email"
            className="w-full p-3 rounded-lg border border-light-accent dark:border-dark-accent bg-light-secondary dark:bg-dark-secondary placeholder-light-text dark:placeholder-dark-text"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Tu Mensaje"
            rows={4}
            className="w-full p-3 rounded-lg border border-light-accent dark:border-dark-accent bg-light-secondary dark:bg-dark-secondary placeholder-light-text dark:placeholder-dark-text resize-none"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-light-primary dark:bg-dark-primary text-black font-semibold rounded-lg shadow-md transition-transform duration-200 hover:scale-105 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
