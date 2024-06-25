"use client";

import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Link from "next/link";
import AddItemModal from "./add-item";

interface Item {
    _id: string;
    cod: number;
    name: string;
    sell_price: number;
    buy_price: number;
}

interface StockItem {
    _id: string;
    item: Item;
    quantity: number;
}

const Page = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [stockItems, setStockItems] = useState<StockItem[]>([]);
    const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

    useEffect(() => {
        // Fetch items from backend
        const fetchItems = async () => {
            try {
                const response = await fetch("http://127.0.0.1:3125/api/items");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data: Item[] = await response.json();
                // Initialize stock items with quantity 0 for each item
                const stockItemsWithZeroQuantity = data.map(item => ({
                    _id: item._id,
                    item: item,
                    quantity: 0
                }));
                setItems(data);
                setStockItems(stockItemsWithZeroQuantity);
            } catch (error) {
                console.error("Falha ao dar fetch nos itens:", error);
            }
        };

        fetchItems();
    }, []);

    const handleQuantityChange = (itemId: string, quantity: number) => {
        // Update quantity in local state
        const updatedStockItems = stockItems.map(stockItem => {
            if (stockItem.item._id === itemId) {
                return { ...stockItem, quantity: quantity };
            }
            return stockItem;
        });
        setStockItems(updatedStockItems);
    };

    const handleSaveQuantities = async () => {
        try {
            // Update quantities in backend
            const promises = stockItems.map(stockItem =>
                fetch(`http://127.0.0.1:3125/api/stock`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        itemId: stockItem.item._id,
                        quantity: stockItem.quantity,
                    }),
                })
            );
            await Promise.all(promises);
            alert("Quantidades Salvas com Sucesso!");
        } catch (error) {
            console.error("Falha ao atualizar as quantidades:", error);
            alert("Falha ao adicionar as quantidades. Tente Novamente");
        }
    };
    const handleAddItem = async (name: string, sellPrice: number, buyPrice: number) => {
        try {
            const response = await fetch("http://127.0.0.1:3125/api/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, sell_price: sellPrice, buy_price: buyPrice }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const newItem = await response.json();
            console.log("Item adicionado:", newItem);
        } catch (error) {
            console.error("Falha ao adicionar um item:", error);
        }
    };

    return (
        <main className="h-screen w-screen m-0 flex">
            <SideBar />
            <div className="h-full w-full flex flex-col items-center ml-52">
                <div className="flex justify-end w-full mt-8 mr-8">
                    <div>
                        <button
                            onClick={() => setIsAddItemModalOpen(true)}
                            className="p-3 bg-[#40B797] rounded-xl hover:bg-[#40b797b0] text-2xl text-white"
                        >
                            Novo Item
                        </button>
                    </div>
                    <div className="ml-4">
                        <button
                            onClick={handleSaveQuantities}
                            className="p-3 bg-[#40B797] rounded-xl hover:bg-[#40b797b0] text-2xl text-white"
                        >
                            Salvar Quantidades
                        </button>
                    </div>
                </div>

                <h1 className="text-4xl mt-8 mb-8">Estoque</h1>

                <div className="w-3/4">
                    <div className="grid grid-cols-7 gap-2 text-xl font-bold mb-4">
                        <p>Código</p>
                        <p>Nome</p>
                        <p>Preço de Venda</p>
                        <p>Preço de Compra</p>
                        <p>Preço Total</p>
                        <p>Estoque</p>
                        <p>Adicionar</p>
                    </div>

                    {stockItems.map((stock, index) => (
                        <div key={index} className="grid grid-cols-6 gap-2 text-lg mb-2 p-2 bg-[#513F46] rounded-lg">
                            <p>{stock.item.cod}</p>
                            <p>{stock.item.name}</p>
                            <p>R$ {stock.item.sell_price.toFixed(2)}</p>
                            <p>R$ {stock.item.buy_price.toFixed(2)}</p>
                            <p>R$ {(stock.item.sell_price * stock.quantity).toFixed(2)}</p>
                            <p>{stock.quantity}</p>
                            <input
                                type="number"
                                value={stock.quantity}
                                onChange={(e) => handleQuantityChange(stock.item._id, Number(e.target.value))}
                                className="h-10 w-20 text-center bg-gray-900 rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <AddItemModal
                isOpen={isAddItemModalOpen}
                onClose={() => setIsAddItemModalOpen(false)}
                onSubmit={handleAddItem}
            />
        </main>
    );
};

export default Page;
