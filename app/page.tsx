import { SearchIcon } from "lucide-react";
import { Button } from "./_components/ui/button";
import Header from "./_components/ui/header";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";

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


        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit">Confirmado</Badge>
                <h3 className="font-semibold">Corte de cabelo</h3>

                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png" />
                  </Avatar>
                  <p className=" text-sm">Barbearia FSW</p>
                </div>

            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5 ">
              <p className="text-sm">Julho</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">21:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home