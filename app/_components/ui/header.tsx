import { Icon, MenuIcon } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import Image from "next/image";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row">
                <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
                <Button size="icon" variant="outline">
                    <MenuIcon/>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;