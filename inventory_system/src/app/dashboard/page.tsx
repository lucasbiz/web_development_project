"use client"

import Link from "next/link";
import ItemCard from "../components/ItemCard";
import SideBar from "../components/SideBar";
import PieChart from "../components/PieChart";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";
import SelectSubisidiary from "../components/SelectSubsidiary";

export interface Item {
    cod: string
    name: string;
    sell_price: number;
    buy_price: number;
  }


export default function Page() {
   // Define o estado 'items' para armazenar os itens e 'setItems' para atualizar o estado
  const [items, setItems] = useState<Item[]>([]);
  //  Define o estado 'searchQuery' para armazenar a consulta de pesquisa e 'setSearchQuery' para atualizar o estado
  const [searchQuery, setSearchQuery] = useState('');
  // Aqui define se vai pegar os dados gerais ou de uma filial especifica
  const [selectedSubisidiary, setSelectedSubisidiary] = useState<string>("");

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
  const itemQuantity = filteredItems.map(item => item.sell_price);

  console.log('itemNames:', itemNames);
  console.log('itemQuantity:', itemQuantity);

  // Função para atualizar o estado 'searchQuery' com a nova consulta de pesquisa
  const handleSearch = (query: string) => {
      setSearchQuery(query);
  };

  const handleSelectSubisidiarie = (subsidiary: string) => {
    setSelectedSubisidiary(subsidiary);
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


        const subisidiaries = ["Geral", "filial 1", "filial 2"]


    return(

        <main className="h-screen w-screen m-0 flex flex-col">
            <SideBar></SideBar>

            <div className=" h-24 w-auto flex flex-row ">
              <div className="md:ml-72 ml-28 mt-14">
                <SearchBar onSearch={handleSearch}/>
              </div>
              <div className="mt-14">
                <SelectSubisidiary subisidiaries={subisidiaries} onSelectsubisidiary={handleSelectSubisidiarie}></SelectSubisidiary>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row h-full w-full mt-10 ">
                <div className="h-full w-full md:min-h-48 flex flex-col items-center lg:ml-52 justify-center lg:w-1/2 ">
                    <div className="h-full w-1/12 lg:w-11/12 md:h-5/6  bg-[#513F46] rounded-2xl flex justify-center min-w-80 p-5 lg:p-10">
                    <PieChart data={data} />
                    </div>
                </div>
                <div className="text-xl md:text-2xl w-full lg:w-1/2 h-full flex justify-center md:ml-52 lg:ml-0 items-center min-w-[300px] md:min-w-[500px] md:w-auto ">
                    <div className="bg-[#513F46] rounded-2xl h-5/6 w-10/12 lg:w-11/12 md:w-5/6 flex flex-col items-center overflow-y-auto p-4">
                        <h2 className="m-3 text-2xl md:text-3xl">Itens in stock</h2>
                        <div className="flex flex-row w-full justify-around text-lg md:text-xl">
                            <p className="ml-12 mx-2">Name</p>
                            <p className="mx-2">Quantity</p>
                            <p className="mx-2">Sell Price</p>
                            <p className="mx-2 mr-12">Buy Price</p>
                        </div>

                        {filteredItems.map((item) => (
                            <ItemCard
                            key={item.name}
                            name={item.name}
                            quantity={0}
                            sellPrice={item.sell_price}
                            buyPrice={item.buy_price}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </main>
    );
}