"use client";

import Image from "next/image";
import { useState } from "react"


interface SubsidiariesCardProps {
    name: string;
    location: string;
  }

const SubsidiariesCard = ({name, location}: SubsidiariesCardProps) => {

    return (
        <div className="ml-16 my-7 w-3/4 h-20 bg-[#513F46] rounded-2xl flex flex-row text-3xl align-middle items-center">
            <p className="ml-40">{name}</p>
            <p className="ml-72 ">{location}</p>
        </div>
    );
  }

export default SubsidiariesCard;