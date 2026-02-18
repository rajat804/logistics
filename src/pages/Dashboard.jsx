import { User } from "lucide-react";
import { Search } from "lucide-react";

const userData = {
  name: "Amit Sharma",
  mobile: "+91 9876543210",
  email: "amit@gmail.com",
  description: "Operations Manager - Golden Logistics",
  image: "",
};

const trackingItems = [
  {
    title: "GR Tracking",
    placeholder: "ENTER GR #",
    color: "border-t-blue-500",
  },
  {
    title: "Vehicle Tracking",
    placeholder: "Enter Vehicle #",
    color: "border-t-orange-500",
  },
  {
    title: "Track Local Manifest",
    placeholder: "ENTER MANIFEST #",
    color: "border-t-red-500",
  },
  {
    title: "Track Long Route Manifest",
    placeholder: "ENTER MANIFEST #",
    color: "border-t-green-500",
  },
  {
    title: "Track DRS",
    placeholder: "ENTER DRS #",
    color: "border-t-purple-500",
  },
  {
    title: "LHC Enquiry",
    placeholder: "ENTER LHC #",
    color: "border-t-blue-400",
  },
  {
    title: "Bill Enquiry",
    placeholder: "Enter Bill #",
    color: "border-t-yellow-500",
  },
  { title: "MR Enquiry", placeholder: "ENTER MR #", color: "border-t-red-500" },
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      {/* ================= PROFILE CARD ================= */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 lg:col-span-1">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {userData.image ? (
              <img
                src={userData.image}
                alt="User"
                className="w-28 h-28 rounded-full object-cover 
                         border-4 border-blue-500 shadow-md"
              />
            ) : (
              <div
                className="w-28 h-28 rounded-full 
                         bg-gradient-to-br from-blue-100 to-blue-200 
                         flex items-center justify-center 
                         border-4 border-blue-500 shadow-md"
              >
                <User size={42} className="text-blue-600" />
              </div>
            )}

            <span
              className="absolute bottom-2 right-2 
                       w-4 h-4 bg-green-500 
                       border-2 border-white rounded-full"
            ></span>
          </div>
        </div>

        {/* User Details */}
        <div className="space-y-4">
          {[
            { label: "Name", value: userData.name },
            { label: "Mobile", value: userData.mobile },
            { label: "Email", value: userData.email },
            { label: "Description", value: userData.description },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-[120px_1fr]">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                {item.label}
              </span>
              <span className="text-sm text-slate-700 break-all">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= TRACKING SECTION ================= */}
      <div className="bg-white p-6 rounded-xl border lg:col-span-2">
        <h2 className="text-sm font-semibold text-slate-700 mb-4 tracking-wide">
          TRACKING
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trackingItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm border 
                  border-gray-300 border-t-4 ${item.color} 
                  p-4 min-w-0`}
            >
              <h3 className="text-sm font-medium text-slate-700 mb-3">
                {item.title}
              </h3>

              <div className="flex w-full">
                <input
                  type="text"
                  placeholder={item.placeholder}
                  className="w-full min-w-0 border border-gray-400 
                     text-sm px-3 py-1.5 
                     focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  className="bg-blue-600 text-white px-3 
                     flex items-center justify-center
                     hover:bg-blue-700 transition"
                >
                  <Search size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
