import { SettingIcon } from "@/components/Icons/SettingIcon";
import Settings from "@/components/Settings";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PlusIcon } from "@/components/Icons/PlusIcon";

const Nav = () => {
  const [tab, setTab] = useState("");

  return (
    <div className="relative flex">
      <div className="h-screen text-2xl w-fit p-2  backdrop-blur-lg bg-black/70 flex flex-col">
        <div className="mt-auto  gap-2 flex flex-col relative">
          <button className="">
            <PlusIcon />
          </button>
          <button
            className=""
            onClick={() => {
              setTab((prevTab) => (prevTab === "settings" ? "" : "settings"));
            }}
          >
            <SettingIcon />
          </button>
        </div>
      </div>

      <AnimatePresence>{tab === "settings" && <Settings />}</AnimatePresence>
    </div>
  );
};

export default Nav;

/*
            <div className="absolute bottom-full z-50 mb-2 w-max bg-gray-800 text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Settings
            </div>
          */
