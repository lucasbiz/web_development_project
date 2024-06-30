"use client";

import Image from "next/image";
import { useState } from "react"

interface SubsidiariesCardProps {
    name: string;
    location: string;
}

const SubsidiariesCard = ({ name, location }: SubsidiariesCardProps) => {
    return (
        <div className="mx-auto my-7 w-11/12 h-20 bg-[#9B9B9B] rounded-2xl flex flex-row text-3xl align-middle items-center">
            <p className="flex-1 text-center">{name}</p>
            <p className="flex-1 text-center">{location}</p>
        </div>
    );
}

export default SubsidiariesCard;
