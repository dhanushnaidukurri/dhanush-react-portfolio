import { PROJECTS } from '../constants'
import {motion} from 'framer-motion';
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            className="my-20 text-center text-4xl">Projects</motion.h2>
        <div>{PROJECTS.map((project, index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:0.5 }}
                    className="w-full lg:w-1/4">
                    <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded" />
                </motion.div>
                <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:0.5 }}
                    className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold text-neutral-400">{project.title}</h6>
                    <p className="mb-4 font-bold text-medium text-aqua-700">{project.description}</p>
                    {project.technologies.map((technologies,index)=>(
                        <span key={index} className="mr-2 mt-4 rounded bg-blue-900 px-2 py-1 text-medium font-medium text-neutral-500">
                            {technologies}
                        </span>
                    ))}
                </motion.div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Projects;