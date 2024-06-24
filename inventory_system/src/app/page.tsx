"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex justify-center items-center flex-col">

            <h1 className="text-white text-3xl mt-28">Sistema de Controle de Estoque</h1>

            <Link legacyBehavior href={"/login"}><button className=" h-10 w-36 mx-20 bg-green-500 mt-20 rounded-xl hover:bg-green-600">Tela de login</button></Link>

            <Link legacyBehavior href={"/register"}><button className=" h-10 w-36 mx-20 bg-green-500 mt-20 rounded-xl hover:bg-green-600">Tela de Cadastro</button></Link>
        </main>
    );
}



// teste de conexao
const testConnection = async () => {
    try {
        const response = await fetch('http://localhost:3125/api/ping');
        if (!response.ok) {
            throw new Error('Failed to connect');
        }
        const data = await response.json();
        console.log('Connection successful:', data);
    } catch (error) {
        console.error('Failed to connect:', error);
    }
};

// Chame esta função para testar a conexão
testConnection();
