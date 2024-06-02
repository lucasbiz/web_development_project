import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center">
      <button className=" h-10 w-36 mx-20 bg-green-500 mt-20 rounded-xl hover:bg-green-600"><a href="/login">Tela de login</a></button>

      <button className=" h-10 w-36 mx-20 bg-green-500 mt-20 rounded-xl hover:bg-green-600"><a href="/register">Tela de cadastro</a></button>
      
    </main>
  );
}
