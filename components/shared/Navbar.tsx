import Image from "next/image";
import Link from "next/link";
// import components
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Container from "./Container";


export default function Navbar() {
   return (
      <nav className="w-full mx-auto p-2 sticky top-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-50">
         <Container className="flex items-center justify-between">
            {/* logo */}
            <Link href={"/"} className="hover:scale-105 transition-all">
               <Image src={"/assets/images/logo.png"} alt="egi-logo" width={100} height={50} />
            </Link>
            {/* nav links for desktop */}
            <NavDesktop />
            {/* nav links for mobile */}
            <NavMobile />
         </Container>
      </nav>
   )
}