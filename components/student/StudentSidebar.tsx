import { BookCheck, BookOpen, Calendar, ChartColumn, ClipboardList, House, LogOut } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";


const StudentSidebar = ({ username }: { username: string }) => {
   const baseUrl = `/student/${username}`
   // handle links
   const navigationSidebarLinks: { title: string; href: string; icon: React.ReactNode }[] = [
      { title: "لوحة التحكم", icon: <House className="h-6 w-6" />, href: baseUrl },
      { title: "كورساتي", icon: <BookOpen className="h-6 w-6" />, href: `${baseUrl}/my-courses` },
      { title: "جدولي الدراسي", icon: <Calendar className="h-6 w-6" />, href: `${baseUrl}/class-schedule` },
      { title: "شيتاتي", icon: <ClipboardList className="h-6 w-6" />, href: `${baseUrl}/assignments` },
      { title: "الامتحانات", icon: <BookCheck className="h-6 w-6" />, href: `${baseUrl}/exams` },
      { title: "درجاتي", icon: <ChartColumn className="h-6 w-6" />, href: `${baseUrl}/grades` },
      { title: "تسجيل خروج", icon: <LogOut className="h-6 w-6" />, href: `/login` },
   ]
   return (

         <div dir="rtl" className="col-span-3 p-5 px-10 fixed top-0 bottom-0 right-0 shadow-lg">
            <div className="flex items-center justify-start">
               <Image width={100} height={100} className="" src={"/assets/images/logo.png"} alt="logo-egi" />
               <h2 className="font-bold text-xl text-slate-700">منصة الالكترونية للطلاب</h2>
            </div>
            <Separator className={"bg-slate-500 my-3"} />
            <div className="flex flex-col gap-2 mt-5">
               {navigationSidebarLinks.map((link, idx) => {
                  return (
                     <Link className={`p-3 flex items-center gap-x-3 mb-3 rounded-lg hover:bg-blue-800 hover:text-white hover:scale-105 transition-all ${link.title == "تسجيل خروج" ? "bg-red-700 mt-10 text-red-300 tracking-widest font-bold hover:bg-red-600! hover:text-white" : ""}`} key={idx} href={link.href}>
                        {link.icon}
                        <h3 className="font-semibold">{link.title}</h3>
                     </Link>
                  )
               })}
            </div>
         </div>

   )
}

export default StudentSidebar