"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const handleRegisterClick = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const data = {
            name: name,
            email: email,
            password: password
        };

        try {
            const response = await fetch("http://localhost:3125/api/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log("Registered successfully!");
                router.push('/login'); // Redireciona para a tela de login após o registro
            } else {
                console.error("Failed to register");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <main className="h-screen w-screen m-0 flex items-center justify-center">
            <img src="/detalhe1.png" className="absolute left-5 top-1/4 transform -translate-y-1/4 w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40" alt="Detalhe 1" />
            <img src="/detalhe2.png" className="absolute right-0 bottom-1/4 transform translate-y-1/4 w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40" alt="Detalhe 2" />
            <div className="flex justify-center flex-col h-1/2 w-1/2">
                <h1 className="text-6xl flex justify-center mb-5 text-white">Register</h1>

                <div className="flex flex-col justify-center m-5">
                    <p className="flex justify-center mr-64 text-white">Name</p>
                    <div className="flex justify-center">
                        <input
                            type="text"
                            className="h-14 w-80 text-white bg-[#40B797] rounded-lg text-2xl pl-5"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center m-5">
                    <p className="flex justify-center mr-64 text-white">Email</p>
                    <div className="flex justify-center">
                        <input
                            type="text"
                            className="h-14 w-80 text-white bg-[#40B797] rounded-lg text-2xl pl-5"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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

                <div className="flex flex-col justify-center m-5">
                    <p className="flex justify-center mr-40 text-white">Confirm password</p>
                    <div className="flex justify-center">
                        <input
                            type="password"
                            className="h-14 w-80 text-white bg-[#40B797] rounded-lg text-2xl pl-5"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-row justify-center mt-5">
                    <Link legacyBehavior href={"/login"}>
                        <button className="mx-[62px] p-3 px-5 bg-[#40B797] rounded-xl hover:bg-[#40b797b0] text-2xl text-white">
                            Login
                        </button>
                    </Link>

                    <button
                        className="mx-[62px] p-3 px-5 bg-[#40B797] rounded-xl hover:bg-[#40b797b0] text-2xl text-white"
                        onClick={handleRegisterClick}
                    >
                        Register
                    </button>
                </div>
            </div>
        </main>
    );
}
