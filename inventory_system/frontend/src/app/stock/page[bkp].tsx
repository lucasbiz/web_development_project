//import Link from "next/link";
//import ItemCard from "../components/ItemCard";
import SideBar from "../components/SideBar";

export default function Page() {
    // Dados de exemplo para os produtos em estoque
    const stockItems = [
        { code: "001", name: "Produto A", sell_price: 10.00, quantity: 5 },
        { code: "002", name: "Produto B", sell_price: 20.00, quantity: 3 },
        { code: "003", name: "Produto C", sell_price: 15.00, quantity: 7 },
    ];

    return (
        <main className="h-screen w-screen m-0 flex">
            <SideBar></SideBar>

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

                    {stockItems.map((item, index) => (
                        <div key={index} className="grid grid-cols-5 gap-2 text-lg mb-2 p-2 bg-slate-100 rounded-lg">
                            <p>{item.code}</p>
                            <p>{item.name}</p>
                            <p>R$ {item.sell_price.toFixed(2)}</p>
                            <p>{item.quantity}</p>
                            <p>R$ {(item.sell_price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}