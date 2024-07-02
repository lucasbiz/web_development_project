"use client";

import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Link from "next/link";
import AddItemModal from "./add-item";
import {Simulate} from "react-dom/test-utils";
import waiting = Simulate.waiting;
import SelectSubisidiarie from "../components/SelectSubsidiary";
import withAuth from "../components/WithAuth";

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
    const [selectedSubisidiary, setSelectedSubisidiary] = useState<string>("");


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("http://35.208.169.160:3125/api/items");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data: Item[] = await response.json();

                const stockItemsWithQuantities = await Promise.all(
                    data.map(async item => {
                        try {
                            const response = await fetch(`http://35.208.169.160:3125/api/stock/${item._id}`);
                            if (!response.ok) {
                                throw new Error(`Falha ao buscar a quantidade do item ${item._id}`);
                            }
                            const { quantity } = await response.json();
                            return {
                                _id: item._id,
                                item: item,
                                quantity: quantity
                            };
                        } catch (error) {
                            console.error(`Falha ao buscar a quantidade do item ${item._id}`, error);
                            return {
                                _id: item._id,
                                item: item,
                                quantity: 0
                            };
                        }
                    })
                );

                setItems(data);
                setStockItems(stockItemsWithQuantities);
            } catch (error) {
                console.error("Falha ao buscar itens e quantidades:", error);
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
                fetch(`http://35.208.169.160:3125/api/stock`, {
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
            const response = await fetch("http://35.208.169.160:3125/api/items", {
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
    const handleDeleteItem = async (itemId: string) => {
        try {
            const response = await fetch(`http://35.208.169.160:3125/api/items/${itemId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Failed to delete item! Status: ${response.status}`);
            }

            const updatedStockItems = stockItems.filter(stockItem => stockItem.item._id !== itemId);
            setStockItems(updatedStockItems);

            console.log('Item deletado com sucesso!');
        } catch (error) {
            console.error('Failed to delete item:', error);
            alert('Falha ao deletar item. Tente novamente.');
        }
    };

    const subisidiaries = ["filial 1", "filial 2"]

    const handleSelectSubisidiarie = (subsidiary: string) => {
        setSelectedSubisidiary(subsidiary);
      };


    return (
        <main className="h-screen w-screen m-0 flex flex-col">
            <SideBar />
            <div className="h-full flex flex-col items-center ml-10 w-auto lg:flex flex-row md:ml-60">
                <div className="w-full">
                    <div className="flex flex-col lg:flex-row w-full items-center">
                        <div className="flex lg:justify-start mt-8 w-full justify-center">
                            <SelectSubisidiarie subisidiaries={subisidiaries} onSelectsubisidiary={handleSelectSubisidiarie} />
                        </div>
                        <div className="flex lg:flex-row justify-center lg:justify-end w-full mt-8 mr-8  md:space-y-0 space-x-4">
                            <div>
                                <button
                                    onClick={() => setIsAddItemModalOpen(true)}
                                    className="p-3 bg-[#40B797] rounded-xl hover:bg-[#40b797b0] text-2xl text-white"
                                >
                                    Novo Item
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={handleSaveQuantities}
                                    className="p-3 bg-[#40B797] rounded-xl hover:bg-[#40b797b0] text-2xl text-white"
                                >
                                    Salvar Quantidades
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                

                <h1 className="text-4xl mt-8 mb-8">Estoque</h1>

                <div className="w-5/6">
                    <div className="grid grid-cols-7 gap-1 md:text-base lg:text-lg text-sm font-bold mb-4">
                        <p>Código</p>
                        <p>Nome</p>
                        <p>Preço de Venda</p>
                        <p>Preço de Compra</p>
                        <p>Preço Total</p>
                        <p>Em estoque</p>
                        <p>Atualizar</p>
                    </div>

                    {stockItems.map((stock, index) => (
                        <div key={index} className="grid grid-cols-7 gap-2 lg:text-lg md:text-base text-sm mb-2 p-2 bg-[#513F46] rounded-lg">
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
                                className="h-10 lg:w-20 md:w-15 w-10 text-center bg-gray-900 rounded-md"
                            />
                            <button onClick={() => handleDeleteItem(stock.item._id)}>🗑️</button>
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

export default withAuth(Page);
