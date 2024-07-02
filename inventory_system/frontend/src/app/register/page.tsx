"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState(""); // Estado para mensagem de erro do email
    const [nameError, setNameError] = useState(""); // Estado para mensagem de erro do nome
    const [passwordError, setPasswordError] = useState(""); // Estado para mensagem de erro da senha
    const [confirmPasswordError, setConfirmPasswordError] = useState(""); // Estado para mensagem de erro da confirmação de senha
    const router = useRouter();

    // useEffect para verificar o email sempre que ele mudar
    useEffect(() => {
        if (email && (!email.includes("@") || !email.includes(".com"))) {
            setEmailError("Email must contain '@' and '.com'");
        } else {
            setEmailError("");
        }
    }, [email]);

    // useEffect para verificar o nome sempre que ele mudar
    useEffect(() => {
        if (name && (name.length < 5)) {
            setNameError("Name must be between 5 and 20 characters");
        } else {
            setNameError("");
        }
    }, [name]);

    // useEffect para verificar a senha sempre que ela mudar
    useEffect(() => {
        if (password && (password.length < 5)) {
            setPasswordError("Password must be between 5 and 20 characters");
        } else {
            setPasswordError("");
        }
    }, [password]);

    // useEffect para verificar a confirmação da senha sempre que ela mudar
    useEffect(() => {
        if (confirmPassword && (confirmPassword.length < 5 || confirmPassword.length > 20)) {
            setConfirmPasswordError("Password must be between 5 and 20 characters");
        } else {
            setConfirmPasswordError("");
        }
    }, [confirmPassword]);

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
            const response = await fetch("http://35.208.169.160:3125/api/users", {
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

    // Verifica se há algum erro presente ou se algum campo está vazio
    const isFormInvalid = !!(emailError || nameError || passwordError || confirmPasswordError || !name || !email || !password || !confirmPassword);

    return (
        <main className="h-screen w-screen m-0 flex items-center justify-center relative">
            <img src="/detalhe1.png" className="absolute left-5 top-1/4 transform -translate-y-1/4 w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40" alt="Detalhe 1" />
            <img src="/detalhe2.png" className="absolute right-0 bottom-0 w-32 h-32 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40" alt="Detalhe 2" />
            <div className="flex justify-center flex-col h-1/2 w-11/12 md:w-1/2 relative z-10">
                <h1 className="text-6xl flex justify-center mb-5 text-white">Register</h1>

                <div className="flex flex-col justify-center m-5 relative">
                    <p className="flex justify-center mr-64 text-white">User</p>
                    <div className="flex justify-center items-center relative">
                        <input
                            type="text"
                            className="h-14 w-80 text-white bg-[#40B797] rounded-lg text-2xl pl-5"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            maxLength={20}
                        />
                        {nameError && ( // Exibe a mensagem de erro se houver
                            <p className="text-red-500 text-center absolute left-full ml-10 transform -translate-x-1/2 whitespace-nowrap">{nameError}</p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-center m-5 relative">
                    <p className="flex justify-center mr-64 text-white">Email</p>
                    <div className="flex justify-center items-center relative">
                        <input
                            type="text"
                            className="h-14 w-80 text-white bg-[#40B797] rounded-lg text-2xl pl-5"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && ( // Exibe a mensagem de erro se houver
                            <p className="text-red-500 text-center absolute left-full ml-10 transform -translate-x-1/2 whitespace-nowrap">{emailError}</p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-center m-5 relative">
                    <p className="flex justify-center mr-56 text-white">Password</p>
                    <div className="flex justify-center items-center relative">
                        <input
                            type="password"
                            className="h-14 w-80 text-white bg-[#40B797] rounded-lg text-2xl pl-5"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            maxLength={20}
                        />
                        {passwordError && ( // Exibe a mensagem de erro se houver
                            <p className="text-red-500 text-center absolute left-full ml-10 transform -translate-x-1/2 whitespace-nowrap">{passwordError}</p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-center m-5 relative">
                    <p className="flex justify-center mr-40 text-white">Confirm password</p>
                    <div className="flex justify-center items-center relative">
                        <input
                            type="password"
                            className="h-14 w-80 text-white bg-[#40B797] rounded-lg text-2xl pl-5"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            maxLength={20}
                        />
                        {confirmPasswordError && ( // Exibe a mensagem de erro se houver
                            <p className="text-red-500 text-center absolute left-full ml-10 transform -translate-x-1/2 whitespace-nowrap">{confirmPasswordError}</p>
                        )}
                    </div>
                </div>

                <div className="flex flex-row justify-center mt-5">
                    <Link legacyBehavior href={"/login"}>
                        <button className="mx-[62px] p-3 px-5 bg-[#40B797] rounded-xl hover:bg-[#40b797b0] text-2xl text-white">
                            Login
                        </button>
                    </Link>

                    <button
                        className={`mx-[62px] p-3 px-5 rounded-xl text-2xl ${isFormInvalid ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#40B797] hover:bg-[#40b797b0] text-white'}`}
                        onClick={handleRegisterClick}
                        disabled={isFormInvalid} // Novo código
                    >
                        Register
                    </button>
                </div>
            </div>
        </main>
    );
}