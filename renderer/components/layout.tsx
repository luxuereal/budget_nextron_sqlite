import { Card } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Navigation from "./navigation";
import WinTool from "./winTool";
import TotalInfo from "./totalInfo";
import EachInfo from "./eachInfo";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex p-2 gap-2 text-gray-200">
      <ToastContainer position="top-center" theme="dark" autoClose={3000} />
      <Card className="w-64 h-[calc(100vh-16px)] border-r border-gray-700 p-1 drop-shadow-md">
        <p className="text-3xl mx-auto py-8 tracking-wider font-bold">P&nbsp;A&nbsp;P&nbsp;O&nbsp;Y</p>
        <Navigation />
      </Card>
      <div className="flex justify-stretch w-full rounded-md gap-2">
        <div className="w-full border border-gray-700 rounded-md">
          {children}
        </div>
        <div className="flex flex-col gap-2 w-72 h-[calc(100vh-16px)]">
          <div className="float-right">
            <WinTool />
          </div>
          <TotalInfo />
          <EachInfo />
        </div>
      </div>
    </div>
  )
}

export default Layout;