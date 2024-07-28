import { INTERNSHIPS } from '../constants';
import { motion } from 'framer-motion';
const Internships = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            className="my-20 text-center text-4xl">Internships
            </motion.h1>
        <div>
            {INTERNSHIPS.map((internship,index)=>(
                <div key={index} className="flex flex-wrap items-center justify-center mb-8">
                    <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:1 }}
                        className="w-full lg:w-1/2">
                        <p className="mb-2 text-medium text-neutral-400">{internship.year}</p>
                    </motion.div>
                    <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:1.5 }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {internship.role } - {" "}
                            <span className="text-medium text-gray-500">{ internship.company}</span>
                        </h6>
                        <p className="mb-4 font-bold text-aqua-700">{internship.description}</p>
                        {internship.technologies.map((technologies,index)=>(
                            <span key={index} className="mr-2 mt-4 rounded bg-blue-900 px-2 py-1 text-medium font-medium text-white-500">{technologies}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Internships;