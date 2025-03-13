import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  body: string;
  email: string;
  rating: number; // Rating aleatorio
}

const fetchTestimonials = async (limit: number = 3): Promise<Testimonial[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return data.slice(0, limit).map((testimonial: any) => ({
    id: testimonial.id,
    name: testimonial.name,
    body: testimonial.body,
    email: testimonial.email,
    rating: Math.floor(Math.random() * 5) + 1, // Rating aleatorio entre 1 y 5
  }));
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(3);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    fetchTestimonials(limit).then((data) => {
      setTestimonials(data);
      setLoading(false);
    });
  }, [limit]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="w-full min-h-screen p-6 sm:p-10 md:p-16 lg:p-20 text-center bg-light-background dark:bg-dark-background">
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
          <div className="relative">
            <div className="flex justify-center mb-4">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                }}
                className="w-full p-8 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl h-auto min-h-[15rem] sm:min-h-[18rem] md:min-h-[20rem] lg:min-h-[15rem] bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <p className="text-lg font-semibold text-light-text dark:text-dark-text text-center capitalize">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-light-text dark:text-dark-text mb-2 text-center capitalize">
                  {testimonials[currentIndex].body}
                </p>
                <div className="flex justify-center mb-4">
                  <span className="text-yellow-500">
                    {"★".repeat(testimonials[currentIndex].rating)}
                  </span>
                  <span className="text-gray-500">
                    {"☆".repeat(5 - testimonials[currentIndex].rating)}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Botones Prev y Next centrados */}
            <div className="flex justify-center items-center space-x-4 mt-4">
              <button
                onClick={prevTestimonial}
                className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg shadow-lg hover:bg-light-hover dark:hover:bg-dark-hover transition"
              >
                Prev
              </button>
              <button
                onClick={nextTestimonial}
                className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg shadow-lg hover:bg-light-hover dark:hover:bg-dark-hover transition"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Testimonials;
