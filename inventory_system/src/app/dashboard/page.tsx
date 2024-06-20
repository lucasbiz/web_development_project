import Link from "next/link";
import ItemCard from "../components/ItemCard";
import SideBar from "../components/SideBar";


export default function Page() {
    return(
        
        <main className="h-screen w-screen  m-0 flex items-center justify-center scroll-">
            <SideBar></SideBar>

            <div className="h-full w-1/3 flex flex-col items-center bg-blue-500 ">
                <p>Graficos</p>
            </div>
           <div className="bg-red-500 w-1/3">
            <ItemCard name="Banana" quantity={10} sellPrice={4} buyPrice={3.3}></ItemCard>
           </div>
            
        </main>
    );
}