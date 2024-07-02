"use client"

import SideBar from "../components/SideBar";
import SubsidiariesCard from "../components/SubsidiarieCard";
import { useEffect, useState } from "react";
import withAuth from "../components/WithAuth";

const Page = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [stock, setStock] = useState("A");
    const [subsidiaries, setSubsidiaries] = useState([
        { name: "Loja 1", location: "Florianópolis" },
    ]);

    // Função assíncrona para buscar as filiais do backend
    const fetchSubsidiaries = async () => {
            try {
                // Faz uma requisição HTTP GET para a URL do backend
                const response = await fetch('http://35.208.169.160:3125/api/subsidiaries');
                // Converte a resposta em JSON
                const data = await response.json();
                // Atualiza o estado 'items' com os dados recebidos
                setSubsidiaries(data);
            } catch (error) {
                // Exibe uma mensagem de erro no console se a requisição falhar
                console.error('Erro ao buscar itens:', error);
            }
        };
    useEffect(() => {
        fetchSubsidiaries();
    }, []); // O array vazio como segundo argumento garante que o useEffect seja executado apenas uma vez, quando o componente for montado
  
    const createSubsidiary = async (subsidiaryData: { name: string; location: string; stock: string }) => {
        try{
        const response = await fetch('http://35.208.169.160:3125/api/subsidiaries', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(subsidiaryData),
        });
        console.log(response)
      
        if (!response.ok) {
          console.log(`HTTP error! status: ${response.status}`);
        }
      
        return response.json();
    }   catch (error) {
            console.error('Error creating subsidiary:', error);
          }
      };

    const handleAddSubsidiary = () => {
        if (name && location) {
            createSubsidiary({name, location, stock})
            fetchSubsidiaries();
        }
    };

    return (
        <main className="h-screen w-screen flex">
            <SideBar />

            <div className="md:ml-64 ml-5 p-8 w-full flex flex-col lg:flex-row md:mt-0 mt-8 items-center">
                <div className="bg-[#513F46] p-6 rounded-2xl shadow-md mb-10 max-w-[400px] min-w-[400px] lg:mr-20 h-2/5 min-h-[300px]">
                    <h2 className="text-3xl mb-4 text-white">Adicionar Nova Filial</h2>
                    <input
                        type="text"
                        className=" text-black p-2 px-4 mb-4 rounded-2xl bg-slate-100 w-full h-14 text-2xl"
                        placeholder="Nome da Filial"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={15}
                    />
                    <input
                        type="text"
                        className=" text-black p-2 px-4 mb-4 rounded-2xl bg-slate-100 w-full h-14 text-2xl"
                        placeholder="Localização"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        maxLength={15}
                    />
                    <button
                        className="bg-blue-500 text-white p-2 px-4 rounded-2xl w-full h-14 text-2xl"
                        onClick={handleAddSubsidiary}
                    >
                        Adicionar
                    </button>
                </div>

                <div className="bg-[#513F46] p-6 rounded-2xl shadow-md min-w-[400px] w-1/2 min-h-[400px] h-5/6">
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

export default withAuth(Page);
