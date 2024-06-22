"use client"; // Marcar como componente de cliente

import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";

interface StockItem {
    item: {
        _id: string;
        name: string;
        sell_price: number;
    };
    quantity: number;
}

export default function Page() {
    const [stockItems, setStockItems] = useState<StockItem[]>([]);

    useEffect(() => {
        // Fetch data from backend
        const fetchStockItems = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/api/stocks");
                const data = await response.json();
                setStockItems(data);
            } catch (error) {
                console.error("Failed to fetch stock items:", error);
            }
        };

        fetchStockItems();
    }, []);

    return (
        <main className="h-screen w-screen m-0 flex">
            <SideBar />

            <div className="h-full w-full flex flex-col items-center ml-52">
                <h1 className="text-4xl mt-16 mb-8">Estoque</h1>

                <div className="w-3/4">
                    <div className="grid grid-cols-5 gap-2 text-xl font-bold mb-4">
                        <p>Código</p>
                        <p>Nome</p>
                        <p>Preço Unitário</p>
                        <p>Quantidade</p>
                        <p>Preço Total</p>
                    </div>

                    {stockItems.map((stock, index) => (
                        <div key={index} className="grid grid-cols-5 gap-2 text-lg mb-2 p-2 bg-slate-100 rounded-lg">
                            <p>{stock.item._id}</p>
                            <p>{stock.item.name}</p>
                            <p>R$ {stock.item.sell_price.toFixed(2)}</p>
                            <p>{stock.quantity}</p>
                            <p>R$ {(stock.item.sell_price * stock.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
