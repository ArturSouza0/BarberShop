"use client"

import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { CalendarIcon, MenuIcon, UserIcon } from "lucide-react"
import SidebarSheet from "./sidebar-sheet"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "./ui/avatar"
import SignInDialog from "./sign-in-dialog"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogClose,
} from "./ui/dialog"

const Header = () => {
  const { data } = useSession()

  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5 lg:p-[30px_128px]">
        <Link href="/">
          <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        </Link>

        {/* Menu para dispositivos móveis */}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarSheet />
          </Sheet>
        </div>

        {/* Menu completo para dispositivos desktop */}
        <nav className="hidden items-center space-x-4 lg:flex">
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/bookings">
              <CalendarIcon size={18} />
              Agendamentos
            </Link>
          </Button>

          {/* Botão de perfil para desktop */}
          {data?.user ? (
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex cursor-pointer items-center gap-2">
                  <Avatar>
                    <AvatarImage src={data.user.image ?? ""} alt="User Image" />
                  </Avatar>
                  <p>{data.user.name}</p>
                </div>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <DialogHeader className="flex items-center gap-2">
                  <DialogTitle>Sair</DialogTitle>
                  <DialogDescription>
                    Deseja sair da plataforma?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-row gap-3">
                  <DialogClose asChild>
                    <Button variant="secondary" className="w-full">
                      Cancelar
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      variant="destructive"
                      className="w-full"
                      onClick={() => signOut()}
                    >
                      Sair
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="flex items-center gap-2">
                  <UserIcon size={18} />
                  <span>Perfil</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          )}
        </nav>
      </CardContent>
    </Card>
  )
}

export default Header
