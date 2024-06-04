"use client";

import Image from "next/image";
import { useState } from "react"

const SideBar = () => {

    return (
        <main>
        <aside className="h-screen w-72 fixed top-0 left-0 justify-center">
            <div className="bg-[#1D1317] h-full flex flex-col items-center">

                {/*logo e nome*/}
                
                <div className="flex flex-row justify-center items-center m-4 mb-14">
                    <a href="/dashboard"  className="mt-5">
                                Inventory System
                    </a>
                </div>
                

                {/*Elementos*/}

                
                <ul className="w-3/4">
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/account">Account</a></li>
                    <li><a href="/subsidiaries">Subsidiaries</a></li>
                </ul>
                
                
            </div>

        </aside>
        </main>
    );
  }

export default SideBar;