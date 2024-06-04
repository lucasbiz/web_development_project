import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center">
      <a href="/login"><button className=" h-10 w-36 mx-20 bg-green-500 mt-20 rounded-xl hover:bg-green-600">Tela de login</button></a>

      <a href="/register"><button className=" h-10 w-36 mx-20 bg-green-500 mt-20 rounded-xl hover:bg-green-600">Tela de cadastro</button></a>
      
      <a href="/dashboard"><button className=" h-10 w-40 mx-20 bg-green-500 mt-20 rounded-xl hover:bg-green-600">Dashboard principal</button></a>

    </main>
  );
}
