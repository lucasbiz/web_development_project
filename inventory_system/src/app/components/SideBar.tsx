"use client";

import { useState } from "react";
import SidebarItem from "./SideBarItem";
import { AiOutlineMenu } from "react-icons/ai"; // Icone de hambúrguer

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex">
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-[#513F46] text-white p-2 rounded" 
        onClick={toggleSidebar}
      >
        <AiOutlineMenu size={24} />
      </button>

      <aside 
        className={`h-full fixed top-0 left-0 bg-[#1D1317] transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-52 w-1/4 min-w-32 z-40`}
      >
        <div className="h-full flex flex-col items-center">
          {/*Elementos*/}
          <ul className="w-3/4 flex flex-col justify-center items-center mt-11">
            <li><SidebarItem href="/dashboard" icon="/home.png" /></li>
            <li><SidebarItem href="/subsidiaries" icon="/location.png" /></li>
            <li><SidebarItem href="/dashboardSubsidiary" icon="/subs_dash.png" /></li>
            <li><SidebarItem href="/account" icon="/user.png" /></li>
            <li><SidebarItem href="/stock" icon="/estoque.png" /></li>
          </ul>
        </div>
      </aside>
    </main>
  );
}

export default SideBar;