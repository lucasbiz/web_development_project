import Link from "next/link";
import ItemCard from "../components/ItemCard";
import SideBar from "../components/SideBar";


export default function Page() {
    return(
        
        <main className="h-screen w-screen m-0 flex flex-col">
            <SideBar></SideBar>

            <div className="bg-green-500 h-1/5 w-auto ml-52">
                <p className="text-4xl text-white ml-5">filtros</p>
            </div>

            <div className="flex flex-row h-full w-full">
                <div className="h-full w-1/2 flex flex-col items-center bg-blue-500 ml-52">
                        <p>Graficos</p>
                </div>
                <div className="bg-[#2F2428] w-1/2 h-full flex justify-center items-center">

                    <div className="bg-[#513F46] rounded-2xl h-4/5 w-3/4 flex flex-col items-center overflow-y-auto">
                        <h2 className="m-3 text-3xl">Itens in stock</h2>
                        <ItemCard name="Banana" quantity={10} sellPrice={4} buyPrice={3.3}></ItemCard>
                        <ItemCard name="Abacaxi" quantity={34} sellPrice={4.4} buyPrice={3.2}></ItemCard>
                        <ItemCard name="Abacaxi" quantity={34} sellPrice={4.4} buyPrice={3.2}></ItemCard>
                        <ItemCard name="Abacaxi" quantity={34} sellPrice={4.4} buyPrice={3.2}></ItemCard>
                        <ItemCard name="Abacaxi" quantity={34} sellPrice={4.4} buyPrice={3.2}></ItemCard>
                        <ItemCard name="Abacaxi" quantity={34} sellPrice={4.4} buyPrice={3.2}></ItemCard>
                        <ItemCard name="Abacaxi" quantity={34} sellPrice={4.4} buyPrice={3.2}></ItemCard>
                        <ItemCard name="Abacaxi" quantity={34} sellPrice={4.4} buyPrice={3.2}></ItemCard>
                        <ItemCard name="Abacaxi" quantity={34} sellPrice={4.4} buyPrice={3.2}></ItemCard>
                    </div>
                        
                </div>
            </div>
            
        </main>
    );
}