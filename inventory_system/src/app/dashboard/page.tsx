"use client"

import Link from "next/link";
import ItemCard from "../components/ItemCard";
import SideBar from "../components/SideBar";
import PieChart from "../components/PieChart";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";

export interface Item {
    name: string;
    sell_price: number;
    buy_price: number;
    quantity: number;
  }
  
// const items= [
//     // {
//     //   name: "Banana",
//     //   sell_price: 1.2,
//     //   buy_price: 1,
//     //   quantity: 30,
//     // },
//     // {
//     //   name: "Abacaxi",
//     //   sell_price: 1.2,
//     //   buy_price: 1,
//     //   quantity: 20,
//     // },
//     // {
//     //   name: "Maçã",
//     //   sell_price: 1.2,
//     //   buy_price: 1,
//     //   quantity: 13,
//     // },
//     // {
//     //     name: "Caju",
//     //     sell_price: 1.2,
//     //     buy_price: 1,
//     //     quantity: 24,
//     //   },
//     // {
//     //     name: "Manga",
//     //     sell_price: 1.2,
//     //     buy_price: 1,
//     //     quantity: 35,
//     //   },
//     // {
//     //     name: "Pêra",
//     //     sell_price: 1.2,
//     //     buy_price: 1,
//     //     quantity: 48,
//     // },
//     // {
//     //     name: "Maracuja",
//     //     sell_price: 1.2,
//     //     buy_price: 1,
//     //     quantity: 5,
//     // },
// ]


export default function Page() {
  // Define o estado 'items' para armazenar os itens e 'setItems' para atualizar o estado
  const [items, setItems] = useState<Item[]>([]);
  // Define o estado 'searchQuery' para armazenar a consulta de pesquisa e 'setSearchQuery' para atualizar o estado
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect para buscar itens do backend quando o componente é montado
  useEffect(() => {
      // Função assíncrona para buscar os itens do backend
      const fetchItems = async () => {
          try {
              // Faz uma requisição HTTP GET para a URL do backend
              const response = await fetch('http://localhost:3125/api/items');
              // Converte a resposta em JSON
              const data = await response.json();
              // Atualiza o estado 'items' com os dados recebidos
              setItems(data);
          } catch (error) {
              // Exibe uma mensagem de erro no console se a requisição falhar
              console.error('Erro ao buscar itens:', error);
          }
      };

      // Chama a função 'fetchItems' para buscar os itens
      fetchItems();
  }, []); // O array vazio como segundo argumento garante que o useEffect seja executado apenas uma vez, quando o componente for montado

  // Filtra os itens com base na consulta de pesquisa
  const filteredItems = items.filter(item =>
      // Converte o nome do item e a consulta de pesquisa para minúsculas e verifica se a consulta está contida no nome do item
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Mapeia os itens filtrados para um array de nomes
  const itemNames = filteredItems.map(item => item.name);
  // Mapeia os itens filtrados para um array de quantidades
  const itemQuantity = filteredItems.map(item => item.quantity);

  console.log('itemNames:', itemNames);
  console.log('itemQuantity:', itemQuantity);

  // Função para atualizar o estado 'searchQuery' com a nova consulta de pesquisa
  const handleSearch = (query: string) => {
      setSearchQuery(query);
  };

    // dados pro grafico
    const data = {
        labels: itemNames,
        datasets: [
        {
            label: 'Quantity',
            data: itemQuantity,
            backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(20, 159, 64, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(20, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };



    return(
        
        <main className="h-screen w-screen m-0 flex flex-col">
            <SideBar></SideBar>

            <div className=" h-24 w-auto ">
              <div className="ml-72 mt-14">
                <SearchBar onSearch={handleSearch}/>
              </div>
            </div>

            <div className="flex flex-row h-5/6 w-full ">
                <div className="h-full w-full flex flex-col items-center ml-52 justify-center">
                    <div className="h-3/5 w-5/6 bg-[#513F46] rounded-2xl  flex justify-center">
                        <PieChart data={data}/>
                    </div>
                </div>
                <div className="bg-[#2F2428] w-1/2 h-full flex justify-center items-center">

                    <div className="bg-[#513F46] rounded-2xl h-5/6 w-5/6 flex flex-col items-center overflow-y-auto">
                        <h2 className="m-3 text-3xl">Itens in stock</h2>
                        <div className="flex flex-row  w-full justify-start text-xl">
                          <p className="ml-20">Name</p>
                          <p className="ml-32">Quantity</p>
                          <p className="ml-4">Sell Price</p>
                          <p className="ml-4">Buy Price</p>
                        </div>
                        
                        {filteredItems.map((item) => {
                            return (
                                <ItemCard name={item.name} quantity={item.quantity} sellPrice={item.sell_price} buyPrice={item.buy_price}></ItemCard>
                            );
                        })}
                        
                    </div>
                        
                </div>
            </div>
            
        </main>
    );
}