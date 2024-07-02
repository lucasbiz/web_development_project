"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex justify-center items-center flex-col">

            <img src="/detalhe1.png" className="absolute left-20 bottom-1/4 transform translate-y-1/4 w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40" alt="Detalhe 2" />
            <img src="/detalhe4.png" className="absolute right-10 top-1/4 transform translate-y-1/3 w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40" alt="Detalhe 4" />

            <h1 className="text-gray-200 text-6xl mt-40">401 - Não Autorizado</h1>

            <p className="text-gray-100 mt-10">Tente se logar ou se cadastrar para ver o conteúdo</p>

            <div className="flex mt-20 space-x-10">
                <Link legacyBehavior href={"/login"}>
                    <button className="h-20 w-72 bg-green-500 rounded-xl hover:bg-green-600 text-xl">Login</button>
                </Link>

                <Link legacyBehavior href={"/register"}>
                    <button className="h-15 w-72 bg-green-500 rounded-xl hover:bg-green-600 text-xl">Cadastro</button>
                </Link>
            </div>
        </main>
    );
}



// teste de conexao
const testConnection = async () => {
    try {
        const response = await fetch('http://35.208.169.160:3125/api/ping');
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
