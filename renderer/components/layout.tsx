import { Card } from "@material-tailwind/react";
import Navigation from "./navigation";
import TotalInfo from "./totalInfo";
import EachInfo from "./eachInfo";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex p-2 gap-2 text-gray-200">
      <Card className="w-64 h-[calc(100vh-16px)] border-r border-gray-700 p-1 drop-shadow-md">
        <p className="text-3xl mx-auto py-8 tracking-wider font-bold">P&nbsp;A&nbsp;P&nbsp;O&nbsp;Y</p>
        <Navigation />
      </Card>
      <div className="flex justify-stretch w-full rounded-md gap-2">
        <div className="w-full border border-gray-700 rounded-md">
          {children}
        </div>
        <div className="flex flex-col gap-2 w-72 h-[calc(100vh-16px)]">
          <TotalInfo />
          <EachInfo />
        </div>
      </div>
    </div>
  )
}

export default Layout;