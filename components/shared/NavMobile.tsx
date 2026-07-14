
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/utils"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const NavMobile = () => {
   return (
      <div className="md:hidden">
         <Sheet>
            <SheetTrigger className={"cursor-pointer hover:rotate-90 transition-all"}>
               <Menu />
            </SheetTrigger>
            <SheetContent>
               <SheetHeader>
                  <Image alt="egi-logo" src={"/assets/images/logo.png"} width={250} height={0} className="mx-auto" />
               </SheetHeader>
               <div className="flex flex-col space-y-7 px-4" dir="rtl">
                  {navLinks.map((link, idx) => (
                     <Link key={idx} className="text-xl font-semibold hover:scale-105 transition-all text-center" href={link.href}>{link.title}</Link>
                  ))}
               </div>
            </SheetContent>
         </Sheet>
      </div>
   )
}

export default NavMobile