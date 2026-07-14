import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog"
import majors from "@/data/majors.json"
import { Dispatch, SetStateAction } from "react"

const DialogMajor = ({ majorId, isOpenDialog, toggleDialog }: { majorId: string, isOpenDialog: boolean, toggleDialog: Dispatch<SetStateAction<boolean>> }) => {

   if (!majorId) return

   const major = majors.find((m) => m.instituteId === majorId)

   return (
      <Dialog modal="trap-focus" onOpenChange={toggleDialog} open={isOpenDialog}>
         <DialogContent className={"border border-blue-400 "} style={{ direction: "rtl" }}>
            <DialogHeader className="mt-6">
               <DialogTitle className="font-bold" > - {major?.instituteName}</DialogTitle>
            </DialogHeader>
            <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
               {major?.departments.map((depart, idx) => {
                  const active = major.departments.length === idx + 1 ? false : true
                  return (
                     <div className={`mb-5 pb-2 ${active ? "border-b border-blue-400" : ""}`} style={{ direction: "rtl" }} key={depart.id} >
                        <h2 className="font-semibold mb-1"><span>[{idx + 1}]</span> {depart.title}</h2>
                        <div className="space-x-2 mt-3">
                           <h2 className="font-semibold ">وصف القسم: </h2>
                           <p>{depart.longDescription}</p>
                        </div>
                        
                        <div className="mt-3 space-x-2 ">
                           <h2 className="font-semibold">فرص العمل: </h2>
                           <p>{depart.marketJobs.join(" - ")}</p>
                        </div>

                     </div>
                  )
               })}
            </div>
         </DialogContent>
      </Dialog>
   )
}

export default DialogMajor