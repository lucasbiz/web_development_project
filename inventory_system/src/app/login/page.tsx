"use client"; // Marcar como componente de cliente

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLoginClick = async () => {
        const data = {
            user: user,
            password: password
        };

        try {
            const response = await fetch("http://127.0.0.1:3125/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem('token', responseData.token); // Armazena o token no localStorage

                // Redireciona para a tela de dashboard
                router.push('/dashboard');
            } else {
                console.error("Failed to login");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <main className="h-screen w-screen m-0 flex items-center justify-center scroll-">
            <img src="/detalhe1.png" className="absolute left-20 bottom-1/4 transform translate-y-1/4 w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40" alt="Detalhe 2" />
            <img src="/detalhe4.png" className="absolute right-10 top-1/4 transform translate-y-1/3 w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40" alt="Detalhe 4" />
            <div className="flex justify-center flex-col h-1/2 w-1/2">
                <h1 className="text-6xl flex justify-center mb-5 text-white">Login</h1>

                <div className="flex flex-col justify-center m-5">
                    <p className="flex justify-center mr-64 text-white">User</p>
                    <div className="flex justify-center">
                        <input
                            type="text"
                            className="h-14 w-80 text-white bg-[#40B797] rounded-lg text-2xl pl-5"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center m-5">
                    <p className="flex justify-center mr-56 text-white">Password</p>
                    <div className="flex justify-center">
                        <input
                            type="password"
                            className="h-14 w-80 text-white bg-[#40B797] rounded-lg text-2xl pl-5"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-row justify-center mt-5">
                    <Link legacyBehavior href={"/register"}>
                        <button className="mx-[50px] p-3 bg-[#40B797] rounded-xl hover:bg-[#40b797b0] text-2xl text-white">
                            Register
                        </button>
                    </Link>

                    <button
                        className="mx-[50px] p-3 px-6 bg-[#40B797] rounded-xl hover:bg-[#40b797b0] text-2xl text-white"
                        onClick={handleLoginClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        </main>
    );
}
