import Link from "next/link";
import ItemCard from "../components/ItemCard";
import SideBar from "../components/SideBar";

export default function Page() {
    return(
        
        <main className="h-screen w-screen  m-0 flex items-center justify-center scroll-">
            <SideBar></SideBar>

            <div className="h-full w-full flex flex-col items-center">
                <h1 className="text-4xl">All Products</h1>
                <ItemCard name="Banana" quantity={3} sellPrice={2} buyPrice={1}></ItemCard>
                <ItemCard name="Maçã" quantity={20} sellPrice={3} buyPrice={1.5}></ItemCard>
            </div>
            
            
        </main>
    );
}