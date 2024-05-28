export default function Page() {
    return(
        
        <main className="h-screen w-screen  m-0 flex items-center justify-center">
            <div className="flex justify-center flex-col h-1/2 w-1/2">
                <h1 className="text-6xl flex justify-center mb-5">Login</h1>

                <div className="flex justify-center m-5 shadow-xl">
                    <input type="text" className="h-14 w-80 text-black bg-[#40B797] rounded-lg text-3xl" />
                </div>

                <div className="flex justify-center m-5">
                    <input type="password" className="h-14 w-80 text-black bg-[#40B797] rounded-lg text-3xl" />
                </div>

                <div className="flex flex-row justify-center mt-5">
                    <button className="mx-[70px] p-3 bg-[#40B797] rounded-xl hover:bg-[#40b797b0]">Cadastro</button>
                    <button className="mx-[70px] p-3 bg-[#40B797] rounded-xl hover:bg-[#40b797b0]">Avançar</button>
                </div>

            </div>
            
        </main>
    );
}