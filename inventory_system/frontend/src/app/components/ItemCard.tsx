"use client";

import Image from "next/image";
import { useState } from "react"


interface ItemCardProps {
    name: string;
    quantity: number;
    sellPrice: number;
    buyPrice: number;
  }

const ItemCard = ({name, quantity, sellPrice, buyPrice}: ItemCardProps) => {

    return (
        <div className="m-3 p-5 w-5/6 h-16 bg-[#9B9B9B] rounded-2xl flex flex-row text-2xl align-middle items-center shadow-xl">
            <p className="w-64">{name}</p>
            <p className="w-36 flex justify-center ">{quantity}</p>
            <p className="w-36 flex justify-center ">{sellPrice}</p>
            <p className="w-36 flex justify-center ">{buyPrice}</p>
        </div>
    );
  }

export default ItemCard;