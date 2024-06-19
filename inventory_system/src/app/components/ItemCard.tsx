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
        <div className="ml-16 my-3 w-96 h-20 bg-[#513F46] rounded-2xl flex flex-row text-3xl align-middle items-center">
            <p className="ml-5">{name}</p>
            <p className="ml-14 ">{quantity}</p>
            <p className="ml-14 ">{sellPrice}</p>
            <p className="ml-14 ">{buyPrice}</p>
        </div>
    );
  }

export default ItemCard;