import Link from "next/link";

export default function Page() {
    return(
        
        <main className="h-screen w-screen  m-0 flex items-center justify-center scroll-">
            <div className="flex justify-center flex-col h-1/2 w-1/2">
                <h1 className="text-6xl flex justify-center mb-5">Login</h1>

                <div className="flex flex-col justify-center m-5">
                    <p className="flex justify-center mr-64">User</p>
                    <div className="flex justify-center">
                        <input type="text" className=" h-14 w-80 text-white bg-[#40B797] rounded-lg text-2xl pl-5" />
                    </div>
                </div>

                <div className="flex flex-col justify-center m-5">
                    <p className="flex justify-center mr-56">Password</p>
                    <div className="flex justify-center">
                        <input type="password" className="h-14 w-80 text-white bg-[#40B797] rounded-lg text-2xl pl-5" />
                    </div>
                </div>

                <div className="flex flex-row justify-center mt-5">
                    <Link legacyBehavior href={"/register"}><button className="mx-[50px] p-3 bg-[#40B797] rounded-xl hover:bg-[#40b797b0] text-2xl">Register</button></Link>
                    
                    <Link legacyBehavior href={"/dashboard"}><button className="mx-[50px] p-3 px-6 bg-[#40B797] rounded-xl hover:bg-[#40b797b0] text-2xl">Next</button></Link>
                   
                </div>
 
                

            </div>
            
        </main>
    );
}