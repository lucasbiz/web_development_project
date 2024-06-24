import SideBar from "../components/SideBar";
import SubsidiariesCard from "../components/SubsidiarieCard";

export default function Page() {
    return(
        
        <main className="h-screen w-screen">
            <SideBar></SideBar>

            <div className="ml-64">
                <input type="text" className="text-black p-2 px-4 mt-16 ml-16 mb-10 rounded-2xl bg-slate-100 w-3/4 h-14 text-3xl  " />

                <div className="ml-60 flex flex-row">
                    <p className="text-3xl mr-32">Nome</p>
                    <p className="text-3xl ml-32">Localização</p>
                </div>
                
                <SubsidiariesCard name="Loja 1" location="Florianópolis"></SubsidiariesCard>
                <SubsidiariesCard name="Loja 2" location="São Paulo"></SubsidiariesCard>
                <SubsidiariesCard name="Loja 3" location="Fortaleza"></SubsidiariesCard>
            </div>

            
           
            
        </main>
    );
}