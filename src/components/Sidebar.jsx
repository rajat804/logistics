import { useState } from "react";
import { menuData } from "../data/menuData";
import { ChevronDown, ChevronRight } from "lucide-react";

const Sidebar = ({ activeModule }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const currentMenu = menuData[activeModule] || [];

  return (
    <div className="w-72 bg-slate-900 text-white min-h-screen p-4 hidden md:block">
      <h2 className="text-lg font-semibold mb-4 capitalize">
        {activeModule}
      </h2>

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

          {openIndex === index && (
            <div className="mt-2 ml-3 space-y-1">
              {section.items.map((item, i) => {
                // 🔥 If item has subItems (dropdown)
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
                                         hover:bg-slate-600 cursor-pointer"
                            >
                              {sub}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // 🔥 Normal item
                return (
                  <div
                    key={i}
                    className="text-sm px-2 py-1 rounded 
                               hover:bg-slate-700 cursor-pointer"
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
  );
};

export default Sidebar;
