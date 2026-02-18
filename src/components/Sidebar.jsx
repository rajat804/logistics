import { useState } from "react";
import { menuData } from "../data/menuData";
import { ChevronDown, ChevronRight, X } from "lucide-react";

const Sidebar = ({ activeModule, sidebarOpen, setSidebarOpen }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const currentMenu = menuData[activeModule] || [];

  return (
    <>
      {/* Overlay (Mobile Only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static z-50
          w-72 bg-slate-900 text-white
          h-screen overflow-y-auto
          p-4
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold capitalize">
            {activeModule}
          </h2>

          {/* Close button (Mobile Only) */}
          <X
            className="md:hidden cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        {/* Menu Sections */}
        {currentMenu.map((section, index) => (
          <div key={index} className="mb-3">
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center 
                         text-left bg-slate-800 px-3 py-2 
                         rounded hover:bg-blue-600 transition"
            >
              {section.title}

              {openIndex === index ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {/* Section Items */}
            {openIndex === index && (
              <div className="mt-2 ml-3 space-y-1">
                {section.items.map((item, i) => {

                  // 🔹 If item has subItems
                  if (typeof item === "object") {
                    return (
                      <div key={i}>
                        <button
                          onClick={() =>
                            setOpenSubIndex(
                              openSubIndex === i ? null : i
                            )
                          }
                          className="w-full flex justify-between items-center 
                                     text-sm px-2 py-1 rounded 
                                     hover:bg-slate-700"
                        >
                          {item.title}

                          {openSubIndex === i ? (
                            <ChevronDown size={14} />
                          ) : (
                            <ChevronRight size={14} />
                          )}
                        </button>

                        {openSubIndex === i && (
                          <div className="ml-4 mt-1 space-y-1">
                            {item.subItems.map((sub, j) => (
                              <div
                                key={j}
                                className="text-xs px-2 py-1 rounded 
                                           hover:bg-slate-600 
                                           cursor-pointer"
                                onClick={() => setSidebarOpen(false)}
                              >
                                {sub}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  // 🔹 Normal item
                  return (
                    <div
                      key={i}
                      className="text-sm px-2 py-1 rounded 
                                 hover:bg-slate-700 
                                 cursor-pointer"
                      onClick={() => setSidebarOpen(false)}
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
