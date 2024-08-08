import { SearchIcon } from "lucide-react";
import { Button } from "./_components/ui/button";
import Header from "./_components/ui/header";
import { Input } from "./_components/ui/input";
import Image from "next/image";

const Home = () =>{
  return (
    <div>
      <Header/>

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Artur!</h2>
        <p>Sexta, 05 de julho.</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..."/>
          <Button size="icon">
            <SearchIcon />
          </Button>

        </div>

        <div className="relative w-full h-[150px] mt-6">
          <Image 
            alt="Agende nos melhores" 
            src="/banner-01.png" 
            fill 
            className="object-cover rounded-xl"
            />
        </div>
      </div>
    </div>
  );
}

export default Home