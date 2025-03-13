import { useEffect, useState } from "react";

import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  body: string;
  rating: number;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          body: item.body,
          rating: Math.floor(Math.random() * 3) + 3, // Rating aleatorio entre 3 y 5
        }));
        setTestimonials(formattedData);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-10 text-gray-800"
      >
        Testimonios
      </motion.h2>
      {loading ? (
        <p className="text-gray-500">Cargando testimonios...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-gray-100 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2">"{testimonial.body}"</p>
              <div className="mt-3 text-yellow-500">
                {"⭐".repeat(testimonial.rating)}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
