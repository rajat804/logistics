import { useState, useEffect } from "react";
import { menuData } from "../data/menuData";
import { ChevronDown, ChevronRight, X } from "lucide-react";

const Sidebar = ({ activeModule, sidebarOpen, setSidebarOpen }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const currentMenu = menuData[activeModule] || [];

  useEffect(() => {
    setOpenIndex(null);
    setOpenSubIndex(null);
  }, [activeModule]);

  return (
    <>
      {/* ================= Overlay (Mobile + Tablet) ================= */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ================= Sidebar ================= */}
      <div
        className={`
          fixed top-0 left-0 z-50
          w-72 bg-slate-900 text-white
          h-full overflow-y-auto
          p-4
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:h-screen
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold capitalize tracking-wide">
            {activeModule}
          </h2>

          {/* Close Button (Mobile + Tablet only) */}
          <X
            className="lg:hidden cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        {/* Menu Sections */}
        {currentMenu.map((section, index) => (
          <div key={index} className="mb-4">

            {/* Section Button */}
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center 
                         text-left bg-slate-800 px-3 py-2 
                         rounded-md hover:bg-blue-600 
                         transition-all duration-200"
            >
              <span className="text-sm font-medium">
                {section.title}
              </span>

              {openIndex === index
                ? <ChevronDown size={16} />
                : <ChevronRight size={16} />
              }
            </button>

            {/* Section Items */}
            {openIndex === index && (
              <div className="mt-2 ml-3 space-y-1">
                {section.items.map((item, i) => {

                  if (typeof item === "object") {
                    return (
                      <div key={i}>

                        {/* Sub Section */}
                        <button
                          onClick={() =>
                            setOpenSubIndex(
                              openSubIndex === i ? null : i
                            )
                          }
                          className="w-full flex justify-between items-center 
                                     text-sm px-2 py-1 rounded 
                                     hover:bg-slate-700 transition"
                        >
                          {item.title}
                          {openSubIndex === i
                            ? <ChevronDown size={14} />
                            : <ChevronRight size={14} />
                          }
                        </button>

                        {/* Sub Items */}
                        {openSubIndex === i && (
                          <div className="ml-4 mt-1 space-y-1">
                            {item.subItems.map((sub, j) => (
                              <div
                                key={j}
                                className="text-xs px-2 py-1 rounded 
                                           hover:bg-slate-600 
                                           cursor-pointer transition"
                              >
                                {sub}
                              </div>
                            ))}
                          </div>
                        )}

                      </div>
                    );
                  }

                  return (
                    <div
                      key={i}
                      className="text-sm px-2 py-1 rounded 
                                 hover:bg-slate-700 
                                 cursor-pointer transition"
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
