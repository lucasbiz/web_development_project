"use client"

import SideBar from "../components/SideBar";
import SubsidiariesCard from "../components/SubsidiarieCard";
import { useState } from "react";

export default function Page() {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [subsidiaries, setSubsidiaries] = useState([
        { name: "Loja 1", location: "Florianópolis" },
    ]);

    const handleAddSubsidiary = () => {
        if (name && location) {
            setSubsidiaries([...subsidiaries, { name, location }]);
            setName("");
            setLocation("");
        }
    };

    return (
        <main className="h-screen w-screen flex">
            <SideBar />

            <div className="ml-64 p-8 w-full">
                <div className="bg-[#513F46] p-6 rounded-2xl shadow-md mb-10">
                    <h2 className="text-3xl mb-4 text-white">Adicionar Nova Filial</h2>
                    <input
                        type="text"
                        className="bg-[#9B9B9B] text-black p-2 px-4 mb-4 rounded-2xl bg-slate-100 w-full h-14 text-2xl"
                        placeholder="Nome da Filial"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        className="bg-[#9B9B9B] text-black p-2 px-4 mb-4 rounded-2xl bg-slate-100 w-full h-14 text-2xl"
                        placeholder="Localização"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white p-2 px-4 rounded-2xl w-full h-14 text-2xl"
                        onClick={handleAddSubsidiary}
                    >
                        Adicionar
                    </button>
                </div>

                <div className="bg-[#513F46] p-6 rounded-2xl shadow-md">
                    <h2 className="text-3xl mb-4 text-white">Lista de Filiais</h2>
                    <div className="flex flex-row justify-between mb-4">
                        <p className="text-xl font-semibold text-center w-1/2 text-white">Nome</p>
                        <p className="text-xl font-semibold text-center w-1/2 text-white">Localização</p>
                    </div>
                    {subsidiaries.map((subsidiary, index) => (
                        <SubsidiariesCard
                            key={index}
                            name={subsidiary.name}
                            location={subsidiary.location}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}