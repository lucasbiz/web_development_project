import SideBar from "../components/SideBar";

export default function Page() {
    return(
        
        <main className="h-screen w-screen  m-0 flex items-center justify-center scroll-">
            <SideBar></SideBar>

            <div className="text-5xl">
                <p>Nome Sobrenome</p>
                <p>nomesobrenome@gmail.com</p>
                <button className="bg-[#EB9F27] rounded-2xl p-3 my-10 text-3xl">Change password</button>
            </div>
            
        </main>
    );
}