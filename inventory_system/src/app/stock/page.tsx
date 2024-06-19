import Link from "next/link";
import ItemCard from "../components/ItemCard";
import SideBar from "../components/SideBar";

export default function Page() {
    return (

        <main className="h-screen w-screen m-0 flex items-center justify-center scroll-">
            <SideBar></SideBar>

            <div className="h-full w-full flex flex-col items-center">
                <h1>Stock</h1>
            </div>


        </main>
    );
}