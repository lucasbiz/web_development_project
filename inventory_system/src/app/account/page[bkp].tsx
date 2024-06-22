import SideBar from "../components/SideBar";

export default function Page() {

    const name = "Armando Campos";
    const email = "a.campos@gmail.com"

    return(
        
        <main className="h-screen w-screen  m-0 flex items-center justify-center scroll-">
            <SideBar></SideBar>

            <div className="flex flex-col items-center text-4xl">
                <img src="/user2.png" alt="" className="h-40 w-40" />

                <p className="my-7">{name}</p>
                <p className="my-7">{email}</p>

                <button className="bg-[#EB9F27] rounded-2xl p-3 my-10 text-3xl hover:bg-[#CC8B24]">Change password</button>
            </div>

            
            
        </main>
    );
}