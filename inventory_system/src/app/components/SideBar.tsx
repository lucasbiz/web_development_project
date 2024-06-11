"use client";

import Image from "next/image";
import { useState } from "react"
import SidebarItem from "./SideBarItem";

const SideBar = () => {



    return (
        <main>
        <aside className="h-screen w-52 fixed top-0 left-0 justify-center">
            <div className="bg-[#1D1317] h-full flex flex-col items-center">

                {/*logo e nome*/}
                
                <div className="flex flex-row justify-center items-center m-4 mb-14">
                    <a href="/dashboard"  className="mt-5">
                                Inventory System
                    </a>
                </div>
                

                {/*Elementos*/}


                <ul className="w-3/4 flex flex-col justify-center items-center">
                    <li><SidebarItem href="/dashboard" icon="/home.png" /></li>
                    <li><SidebarItem href="/account" icon="/user.png"/></li>
                    <li><SidebarItem href="/subsidiaries" icon="/location.png"/></li>
                </ul>
                
                
            </div>

        </aside>
        </main>
    );
  }

export default SideBar;