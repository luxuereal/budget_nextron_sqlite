import { useState } from "react";

type Values = {
  email: string;
  password: string;
}

const LogIn = () => {

  const [values, setValues] = useState<Values>({
    email: '',
    password: ''
  });

  return (
    <div className="absolute w-full h-full">
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
          <button className="w-30 border px-4 py-1 text-lg border-gray-700 rounded-md">Quit</button>
          <button className="w-30 border px-4 py-1 text-lg border-gray-700 rounded-md">Go home</button>
        </div>
      </div>
    </div>
  )
}
export default LogIn