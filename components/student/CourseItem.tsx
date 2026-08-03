import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardHeader } from "@/components/ui/card"
import { Book, Database, User, VideoIcon } from "lucide-react"

const CourseItem = ({name, icon, prof, id}: {name: string; icon: React.ReactNode; prof: string; id: string}) => {
   return (
      <Card className="cursor-pointer hover:scale-105 transition-all hover:shadow">
         <CardHeader>
            <div className="flex justify-around gap-x-4 px-3">
               <div className="w-24 h-24 rounded flex items-center justify-center bg-blue-300">
                  {icon}
               </div>
               <div className="flex flex-col items-center gap-y-2">
                  <h2 className="text-xl text-slate-800 font-bold">{name}</h2>
                  <p className="text-slate-400 font-semibold">{id}</p>
                  <h3 className="text-sm text-slate-600 flex gap-3">
                     <User className="w-5 h-5" />
                     د/ {prof}
                  </h3>
               </div>
            </div>
         </CardHeader>
         <CardAction className="flex w-full items-center justify-center gap-5 mt-4">
            <Button variant={"outline"} className={"cursor-pointer font-semibold text-xl rounded-lg px-4 py-6"}>
               <VideoIcon className="w-8 h-8" />
               (12) محاضرة
            </Button>
            <Button variant={"outline"} className={"cursor-pointer font-semibold text-xl rounded-lg px-4 py-6"}>
               <Book className="w-8 h-8" />
               (2) مستند
            </Button>
         </CardAction>
      </Card>
   )
}

export default CourseItem