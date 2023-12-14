import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Spinner = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div 
          className="absolute top-0 w-full h-[100vh] z-40 bg-[rgba(0,0,0,.1)]"
          initial={{ backdropFilter: 'blur(0px)' }}
          animate={{ backdropFilter: 'blur(10px)' }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          exit={{ 
            backdropFilter: 'blur(0px)',
            transition: { duration: 0.2 } 
          }}
        ></motion.div>
      </AnimatePresence>
      <div className="z-50 absolute top-[calc(50vh-60px)] left-[calc(50%-60px)]"><Image width={120} height={120} src={"/images/spin.gif"} className="w-48 h-48" /></div>
    </>
  )
}

export default Spinner;