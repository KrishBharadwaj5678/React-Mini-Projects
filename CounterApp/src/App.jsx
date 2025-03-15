import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <motion.div
        className="bg-gray-800 p-8 rounded-xl shadow-xl w-full w-60 md:w-96 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-semibold text-white">Counter App</h1>
        <motion.p
          className="text-3xl md:text-4xl lg:text-3xl text-gray-300 mt-6"
          key={count}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {count}
        </motion.p>
        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          <motion.button
            onClick={() => setCount(count + 1)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlus size={20} />
          </motion.button>
          <motion.button
            onClick={() => setCount(count - 1)}
            className="bg-red-600 text-white p-4 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMinus size={20} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default App;