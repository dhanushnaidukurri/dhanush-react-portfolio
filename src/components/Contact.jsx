import { CONTACT } from "../constants";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
            whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            className="my-10 text-center text-4xl">Contact Details
        </motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5 }}
                className="my-4">
                <span className="inline-block font-bold mr-3">Location: </span>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`} target="_blank" rel="noopener noreferrer" className="border-b">
                    {CONTACT.address}
                </a>
            </motion.p>
            <motion.p 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5 }}
                className="my-4">
                <span className="inline-block font-bold mr-3">Phone Number: </span>
                <a href={`tel:${CONTACT.phoneNo}`} className="border-b">
                    {CONTACT.phoneNo}
                </a>
            </motion.p>
            <span className="inline-block font-bold mr-3">Email: </span>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`} target="_blank" className="border-b">
                {CONTACT.email}
            </a>
        </div>
    </div>
  );
};

export default Contact;
