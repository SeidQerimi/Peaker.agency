import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-28">
      {/* Left - Animated Shape */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ scale: [0.8, 1, 0.9, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Replace with exact SVG shape */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-72 h-72 text-orange-500"
          fill="currentColor"
        >
          <path d="M150 100c-20 40-80 40-100 0s20-80 50-80 70 40 50 80z" />
        </svg>
      </motion.div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left mt-10 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Creative Digital <br /> Agency
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-600 text-lg"
        >
          We help brands grow with modern design, digital marketing and
          development solutions.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto md:mx-0 w-fit px-6 py-3 bg-black text-white rounded-full shadow-md hover:shadow-lg transition"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
