import { useState } from "react";
import { ipcRenderer } from "electron";
import { motion, AnimatePresence } from "framer-motion"

type Values = {
  email: string;
  password: string;
}

const LogIn = () => {

  const [isOpen, setIsOpen] = useState(true);

  const [values, setValues] = useState<Values>({
    email: '',
    password: ''
  });

  const logIn = () => {
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen &&
        <motion.div 
          className="absolute w-full h-full"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          exit={{
            opacity: 0,
            y: 20,
            transition: { duration: 0.5 },
          }}
        >
          <div className="w-[640px] h-[400px] border border-gray-700 rounded-md mx-auto mt-[calc(50vh-200px)] backdrop-blur p-4">
            <h2 className="text-3xl font-bold text-center my-4">P&nbsp;A&nbsp;P&nbsp;O&nbsp;Y</h2>
            <input 
              type="text" 
              value={values.email} 
              placeholder="Email" 
              className="w-[70%] my-4 mt-8 ml-[96px] rounded-md bg-transparent py-2 px-4 text-lg border border-gray-700 !focus:border-none !outline-none" 
              onChange={(e)=>setValues(prevState => ({...prevState, email: e.target.value}))} 
            />
            <input 
              type="text" 
              value={values.password} 
              placeholder="Password" 
              className="w-[70%] my-4 ml-[96px] rounded-md bg-transparent py-2 px-4 text-lg border border-gray-700 !focus:border-none !outline-none" 
              onChange={(e)=>setValues(prevState => ({...prevState, password: e.target.value}))} 
            />
            <div className="w-[70%] mt-8 ml-[96px] flex justify-between">
              <button className="w-30 border px-4 py-1 text-lg border-gray-700 rounded-md" onClick={() => ipcRenderer.send('close')}>Quit</button>
              <button className="w-30 border px-4 py-1 text-lg border-gray-700 rounded-md" onClick={logIn}>Go home</button>
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}
export default LogIn