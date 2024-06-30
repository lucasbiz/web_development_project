"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import SideBar from "../components/SideBar";
import withAuth from "../components/WithAuth";


const Page = () => {
    const [user, setUser] = useState<{ name: string; email: string }>({ name: "", email: "" });
    const router = useRouter();

    const accountLogOut = () => {
        alert("Você saiu da sua conta")
        localStorage.removeItem('token'); // Remove o token do localStorage
        router.push('/login');// Redireciona para a tela de login
    };

    useEffect(() => {
        const fetchUserData = async () => {
        const token = localStorage.getItem('token');
            if (!token) {
                console.error("No token found");
                return;
            }

            try {
                const decodedToken: any = jwt.decode(token); // Decodifica o token JWT usando jsonwebtoken
                const userId = decodedToken.id; // Supondo que o token contém um campo `id` com o ID do usuário

                const response = await fetch(`http://127.0.0.1:3125/api/users/${userId}`, {
                    headers: {
                        'x-auth-token': token // Passa o token no cabeçalho da requisição
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    console.error("Failed to fetch user data");
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <main className="h-screen w-screen m-0 flex items-center justify-center">
            <SideBar />
            <div className="flex flex-col items-center text-4xl">
                <img src="/user2.png" alt="" className="h-40 w-40" />
                <p className="my-7">{user.name}</p>
                <p className="my-7">{user.email}</p>
                <button className="bg-[#EB9F27] rounded-2xl p-3 my-10 text-3xl hover:bg-[#CC8B24] transition duration-500 ease-in-out">Mudar senha</button>
                <button onClick={accountLogOut} className="bg-[#EB9F27] rounded-2xl p-3 my-10 text-3xl hover:bg-[#CC8B24] transition duration-500 ease-in-out">Sair</button>

            </div>
        </main>
    );
}

export default withAuth(Page);
