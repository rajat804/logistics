import {  RefreshCw } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="w-full bg-gray-100 border rounded-lg px-4 py-3 mb-6">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        {/* Left Section */}
        <div className="space-y-1 text-sm">
          <div>
            <span className="font-medium">Company :</span> GOLDEN ROADWAYS &
            LOGISTICS PVT LTD
          </div>

          <div>
            <span className="font-medium">Version :</span> 2.0.0.1 (Build Date:
            29-09-2020)
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-full shadow-sm w-fit">
          <div className="flex items-center gap-2 border px-3 py-1 rounded-md text-sm bg-white">
            <input
              type="date"
              className="outline-none text-sm bg-transparent"
            />
          </div>

          <RefreshCw
            size={18}
            className="cursor-pointer text-blue-600 hover:rotate-180 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
