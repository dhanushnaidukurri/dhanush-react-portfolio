import { RiReactjsLine } from "react-icons/ri";
import { TbBrandDjango } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
            <FaNodeJs className="text-7xl text-green-900" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://www.djangoproject.com" target="_blank" rel="noopener noreferrer">
            <TbBrandDjango className="text-7xl text-green-600" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">
            <FaPython className="text-7xl text-blue-900" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">
            <TbBrandMysql className="text-7xl text-sky-800" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
