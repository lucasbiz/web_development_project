import SideBar from "../components/SideBar";

export default function Page() {
    return(
        
        <main className="h-screen w-screen">
            <SideBar></SideBar>

            <div className="ml-64">
                <input type="text" className="text-black p-2 px-4 mt-16 ml-16 mb-10 rounded-2xl bg-slate-100 w-3/4 h-14 text-3xl  " />
                
                <div className="ml-16 w-3/4 h-20 bg-[#513F46] rounded-2xl"></div>
            </div>

            
           
            
        </main>
    );
}