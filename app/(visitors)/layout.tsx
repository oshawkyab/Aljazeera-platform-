import Navbar from "@/components/shared/Navbar";

export default function LandingRoot({ children }: { children: React.ReactNode }) {
   return (
      <div>
         <Navbar />
         <div>
            {children}
         </div>
      </div>
   )
}