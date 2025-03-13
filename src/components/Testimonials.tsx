import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  body: string;
  email: string;
}

const fetchTestimonials = async (limit: number = 3): Promise<Testimonial[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return data.slice(0, limit).map((testimonial: any) => ({
    id: testimonial.id,
    name: testimonial.name,
    body: testimonial.body,
    email: testimonial.email,
  }));
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(3);

  useEffect(() => {
    fetchTestimonials(limit).then((data) => {
      setTestimonials(data);
      setLoading(false);
    });
  }, [limit]);

  const handleLoadMore = () => {
    setLimit(limit + 3);
    setLoading(true);
  };

  return (
    <section className="p-6 sm:p-10 md:p-16 lg:p-20 text-center bg-light-background dark:bg-dark-background">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl font-bold mb-8 text-light-text dark:text-dark-text"
      >
        Testimonios
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-full mx-auto"
      >
        {loading ? (
          <p className="text-light-text dark:text-dark-text">
            Cargando testimonios...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: testimonial.id * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                }}
                className="w-full bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <p className="text-lg font-semibold text-light-text dark:text-dark-text text-left">
                    {testimonial.name}
                  </p>
                </div>
                <p className="text-light-text dark:text-dark-text mb-2 text-left">
                  {testimonial.body}
                </p>
              </motion.div>
            ))}
          </div>
        )}
        <motion.button
          onClick={handleLoadMore}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block mx-auto mt-6 w-48 h-12 bg-light-primary dark:bg-dark-primary text-white font-semibold rounded-lg shadow-lg "
        >
          Ver más testimonios
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Testimonials;
