import { Bell, Search, User, Menu } from "lucide-react";

const Topbar = ({ setActiveModule, setSidebarOpen }) => {
  return (
    <div className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      
      {/* Left Section */}
      <div className="flex items-center gap-4">
        
        {/* Mobile Toggle Button */}
        <Menu
          className="cursor-pointer text-slate-600 md:hidden"
          onClick={() => setSidebarOpen(prev => !prev)}
        />

        <h1 className="text-lg font-semibold text-slate-700">
          Golden Logistics ERP
        </h1>

        <select
          onChange={(e) => setActiveModule(e.target.value)}
          className="ml-4 border px-3 py-1 rounded-md hidden md:block"
        >
          <option value="operations">Operations</option>
          <option value="accounts">Accounts</option>
          <option value="administrator">Administrator</option>
          <option value="inventory">Inventory</option>
        </select>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 text-slate-600">
        <Bell className="cursor-pointer" />
        <Search className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Topbar;
