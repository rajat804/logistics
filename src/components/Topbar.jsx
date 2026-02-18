import { useState, useRef, useEffect } from "react";
import {
  Menu,
  Bell,
  RefreshCw,
  Search,
  ChevronDown,
  User,
} from "lucide-react";

const Topbar = ({ activeModule, setActiveModule, setSidebarOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-gray-100 border-b shadow-sm">

      {/* ================= MOBILE + TABLET ================= */}
      <div className="lg:hidden flex flex-col px-4 py-3 space-y-3">

        {/* Top Row */}
        <div className="flex justify-between items-center w-full">
          <img src="/logo.png" alt="logo" className="h-10" />

          {/* Toggle visible on mobile + tablet */}
          <Menu
            size={26}
            className="cursor-pointer text-gray-700"
            onClick={() => setSidebarOpen(true)}
          />
        </div>

        {/* Module Dropdown */}
        <select
          value={activeModule}
          onChange={(e) => setActiveModule(e.target.value)}
          className="w-full border bg-white rounded px-3 py-2 text-sm"
        >
          <option value="operations">OPERATIONS</option>
          <option value="accounts">ACCOUNTS</option>
          <option value="administrator">ADMINISTRATOR</option>
          <option value="inventory">INVENTORY</option>
        </select>

        <div className="flex justify-between w-full text-sm font-medium">
          <span>Branch: GHAZIABAD</span>
          <span>Financial Year: 2025-2026</span>
        </div>

        <div className="flex justify-between items-center w-full text-gray-700 pt-2 border-t">
          <Bell size={20} />
          <RefreshCw size={20} />
          <Search size={20} />

          {/* User Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <User size={22} className="cursor-pointer" />

            {openDropdown && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-lg z-50">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                  Profile
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                  Change Password
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-red-600">
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ONLY ================= */}
      <div className="hidden lg:flex items-center justify-between px-6 py-2">

        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* NO TOGGLE ON LAPTOP */}

          <img src="/logo.png" alt="logo" className="h-8" />

          <select
            value={activeModule}
            onChange={(e) => setActiveModule(e.target.value)}
            className="border bg-white rounded px-3 py-1 text-sm"
          >
            <option value="operations">OPERATIONS</option>
            <option value="accounts">ACCOUNTS</option>
            <option value="administrator">ADMINISTRATOR</option>
            <option value="inventory">INVENTORY</option>
          </select>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 text-sm text-gray-700">

          <span>Branch: GHAZIABAD</span>
          <span>Financial Year: 2025-2026</span>

          <Bell size={18} />
          <RefreshCw size={18} />
          <Search size={18} />

          {/* Gmail Dropdown */}
          <div
            className="relative flex items-center gap-1 cursor-pointer"
            ref={dropdownRef}
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <span>MAYANK.GRLOGISTICS@GMAIL.COM</span>
            <ChevronDown size={16} />

            {openDropdown && (
              <div className="absolute right-0 top-8 w-44 bg-white border rounded-md shadow-lg z-50">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                  Profile
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                  Change Password
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-red-600">
                  Logout
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Topbar;
