import Link from "next/link";
import ItemCard from "../components/ItemCard";
import SideBar from "../components/SideBar";
import PieChart from "../components/PieChart";

export interface Item {
    name: string;
    sell_price: number;
    buy_price: number;
    quantity: number;
  }
  
export const items: Record<string, Item> = {
    item1: {
      name: "Banana",
      sell_price: 1.2,
      buy_price: 1,
      quantity: 30,
    },
    item2: {
      name: "Abacaxi",
      sell_price: 1.2,
      buy_price: 1,
      quantity: 20,
    },
    item3: {
      name: "Maçã",
      sell_price: 1.2,
      buy_price: 1,
      quantity: 13,
    },
    item4: {
        name: "Caju",
        sell_price: 1.2,
        buy_price: 1,
        quantity: 24,
      },
    item5: {
        name: "Manga",
        sell_price: 1.2,
        buy_price: 1,
        quantity: 35,
      },
    item6: {
        name: "Pêra",
        sell_price: 1.2,
        buy_price: 1,
        quantity: 48,
    },
    item7: {
        name: "Maracuja",
        sell_price: 1.2,
        buy_price: 1,
        quantity: 5,
    },
}


export default function Page() {
    const itemNames = Object.keys(items).map(key => items[key].name);

    const itemQuantity = Object.keys(items).map(key => items[key].quantity);


    // dados pro grafico
    const data = {
        labels: itemNames,
        datasets: [
        {
            label: 'Quantity',
            data: itemQuantity,
            backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(20, 159, 64, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(20, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };
      
        const options = {
          responsive: true,
          plugins: {
            legend: {
              position: 'top' as const,
              labels: {
                font: {
                  size: 16,
                },
                color: '#FFFF', // Cor das labels na legenda
              },
            },
            title: {
              display: true,
              text: 'Distribution of Items',
            },
            animation: {
              animateScale: true,
              animateRotate: true,
            },
          },
        };



    return(
        
        <main className="h-screen w-screen m-0 flex flex-col">
            <SideBar></SideBar>

            <div className=" h-1/5 w-auto ml-52">
                <p className="mt-16 ml-24">Search itens</p>
                <input type="text" className="ml-20 rounded-2xl h-9 w-1/3 text-black px-3"/>
                
            </div>

            <div className="flex flex-row h-4/5 w-full">
                <div className="h-full w-1/2 flex flex-col items-center ml-52 justify-center">
                    <div className="h-2/3 w-2/3">
                        <PieChart data={data} options={options} />
                    </div>
                    
                </div>
                <div className="bg-[#2F2428] w-1/2 h-full flex justify-center items-center">

                    <div className="bg-[#513F46] rounded-2xl h-4/5 w-5/6 flex flex-col items-center overflow-y-auto">
                        <h2 className="m-3 text-3xl">Itens in stock</h2>
                        <div className="flex flex-row  w-full justify-start text-xl">
                          <p className="ml-20">Name</p>
                          <p className="ml-36">Quantity</p>
                          <p className="ml-8">Sell Price</p>
                          <p className="ml-7">Buy Price</p>
                        </div>
                        
                        {Object.keys(items).map((key) => {
                            const item = items[key];
                            return (
                                <ItemCard name={item.name} quantity={item.quantity} sellPrice={item.sell_price} buyPrice={item.buy_price}></ItemCard>
                            );
                        })}
                        
                    </div>
                        
                </div>
            </div>
            
        </main>
    );
}