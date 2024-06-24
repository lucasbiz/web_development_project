"use client";

import Link from "next/link";
import ItemCard from "../components/ItemCard";
import SideBar from "../components/SideBar";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const stockData = [
    { filial: "Filial 1", quantidade: 150, valorTotal: 3000 },
    { filial: "Filial 2", quantidade: 200, valorTotal: 5000 },
    { filial: "Filial 3", quantidade: 100, valorTotal: 2000 },
    { filial: "Filial 4", quantidade: 250, valorTotal: 7500 },
];

const barData = {
    labels: stockData.map(data => data.filial),
    datasets: [
        {
            label: 'Valor Total em Estoque',
            data: stockData.map(data => data.valorTotal),
            backgroundColor: 'rgba(173, 216, 230, 0.5)', // Cor mais clara
            borderColor: 'rgba(173, 216, 230, 1)', // Cor mais clara
            borderWidth: 1,
        },
    ],
};

const barOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Valor Total em Estoque por Filial',
        },
    },
    scales: {
        x: {
            ticks: {
                color: '#000', // Cor dos rótulos do eixo X
            },
        },
        y: {
            ticks: {
                color: '#000', // Cor dos rótulos do eixo Y
            },
        },
    },
};

export default function Page() {
    return (
        <main className="h-screen w-screen m-0 flex flex-col">
            <SideBar />

            <div className="h-24 w-auto flex justify-center items-center mt-14">
                <h1 className="text-3xl font-bold text-white">Dashboard Filiais</h1>
            </div>

            <div className="flex flex-row h-5/6 w-full mt-8">
                <div className="h-full w-full flex flex-col items-center ml-52 justify-center">
                    <div className="h-2/5 w-5/6 bg-[#513F46] rounded-2xl flex justify-center p-4 mb-8">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Filial</th>
                                    <th className="py-2 px-4 border-b">Quantidade</th>
                                    <th className="py-2 px-4 border-b">Valor Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stockData.map((item, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border-b">{item.filial}</td>
                                        <td className="py-2 px-4 border-b">{item.quantidade}</td>
                                        <td className="py-2 px-4 border-b">{item.valorTotal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="h-2/5 w-5/6 bg-[#513F46] rounded-2xl flex justify-center p-4">
                        <Bar data={barData} options={barOptions} />
                    </div>
                </div>
            </div>
        </main>
    );
}