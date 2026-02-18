import { useState } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";

const MainLayout = () => {
  const [activeModule, setActiveModule] = useState("operations");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      
      <Topbar 
        setActiveModule={setActiveModule} 
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex flex-1 overflow-hidden relative">
        
        <Sidebar 
          activeModule={activeModule}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="flex-1 p-6 overflow-auto">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
