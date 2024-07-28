import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.jpg"
import { motion } from "framer-motion"
const container=(delay)=>({
    hidden:{x:-100,opactiy:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay},
    },
})
const Home = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items">
                    <motion.h1 
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1.1 }}
                      drag="x"
                      dragConstraints={{ left: -100, right: 100 }}
                      className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-4xl ml-9">KURRI DHANUSH SRIMANI CHANDRA HASS</motion.h1>
                    <motion.span 
                     variants={container(0)}
                     initial="hidden"  
                     animate="visible"
                     className="bg-gradient-to-r from-green-200 via-state-900 to-orange-900 bg-clip-text text-4xl tracking-tight text-transparent">
                        Full Stack Web Developer
                    </motion.span>
                    <motion.p 
                        variants={container(0)}
                        initial="hidden"  
                        animate="visible"
                        className="my-2 max-w-xl py-5 text-1xl">{HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-half lg:w-1/2 lg:p-3">
                <div className="flex rounded-2xl justify-center">
                <motion.img 
                        initial={{x:100,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:0.5,delay:1}}
                        src={profilePic} alt="Dhanush Kurri"
                        style={{ width: '400px', height: '500px',marginLeft: '100px'}} 
                    />
                </div>
            </div>


        </div>
    </div>
  );
};

export default Home;