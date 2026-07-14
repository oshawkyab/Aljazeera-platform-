"use client"
import Container from "../shared/Container"
import SectionHeader from "../shared/SectionHeader"
import majorData from "@/data/majors.json"
import { Card, CardContent } from "../ui/card"
import { useState } from "react"
import DialogMajor from "./Dialog"


const MajorSection = () => {
   const [isOpenDialog, setIsOpenDialog] = useState(false)
   const [selectedMajorId, setSelectedMajorId] = useState<string>("")
   const handleMajorClick = (majorId: string) => {
      setIsOpenDialog(true)
      setSelectedMajorId(majorId)
   }
   return (
      <section id="major" className="mb-20">
         <SectionHeader title="التخصصات" />
         <Container className="grid grid-cols-1 gap-y-5 lg:grid-cols-4 lg:space-x-5  md:space-y-0">
            {majorData.map((item) => {
               return (
                  <div key={item.instituteId}>
                     <Card onClick={() => handleMajorClick(item.instituteId)} className="flex flex-col items-center justify-center p-5 shadow-lg border border-blue-400 hover:scale-105 transition-all cursor-pointer">
                        <CardContent className="flex items-center justify-center text-center">
                           <h2 className="text-xl font-bold">{item.instituteName}</h2>
                        </CardContent>
                     </Card>

                     {/* dialog */}
                     <DialogMajor toggleDialog={setIsOpenDialog} isOpenDialog={isOpenDialog} majorId={selectedMajorId} />


                  </div>
               )
            })}
         </Container>
      </section>
   )
}

export default MajorSection