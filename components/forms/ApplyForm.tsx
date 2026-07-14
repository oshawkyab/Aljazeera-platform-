"use client"
import { Calendar, GraduationCap, Grid3x3, Mail, Phone, UploadCloud, User, User2 } from "lucide-react"
import { Field } from "@/components/ui/field"
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import {
   InputGroup,
   InputGroupAddon,
   InputGroupInput,
} from "@/components/ui/input-group"
import { Separator } from "@/components/ui/separator"
import { departments, genderType, graduationYears, highSchoolType } from "@/utils"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { useState } from "react"
import { randomUUID } from "crypto"
import ApplicationInput from "./ApplicationInput"
import ApplicationSelection from "./ApplicationSelection"

const ApplyForm = () => {



   const [errorMessage, setErrorMessage] = useState("")
   const [acadmicData, setAcadmicData] = useState<
      { graduationDate: string | null, degree: string; department: string | null; typeHighSchool: string | null }
   >({
      graduationDate: "",
      degree: "",
      department: "",
      typeHighSchool: ""
   })

   const [personalData, setPersonalData] = useState<{
      applicationId: string
      nationalId: string
      name: string
      email: string
      phoneNumber: string
      date: string
      gender: string | null
   }>({
      applicationId: crypto.randomUUID(),
      nationalId: "",
      name: "",
      email: "",
      phoneNumber: "",
      date: "",
      gender: "",
   })
   const [documents, setDocuments] = useState(null)
   const [isLoading, setIsLoading] = useState(false)

   // --> HANDLE STATE INPUT
   const changeNameInput = (value: string) => {
      setPersonalData({ ...personalData, name: value })
   }
   const changePhoneNumberInput = (value: string) => {
      setPersonalData({ ...personalData, phoneNumber: value })
   }
   const changeEmailInput = (value: string) => {
      setPersonalData({ ...personalData, email: value })
   }
   const changeDateInput = (value: string) => {
      setPersonalData({ ...personalData, date: value })
   }
   const changeNationalIdInput = (value: string | null) => {
      setPersonalData({ ...personalData, nationalId: value || "" })
   }
   const changeGenderInput = (value: string | null) => {
      setPersonalData({ ...personalData, gender: value })
   }
   const changeTypeHighSchoolInput = (value: string | null) => {
      setAcadmicData({ ...acadmicData, typeHighSchool: value })
   }
   const changeGraduationYearInput = (value: string | null) => {
      setAcadmicData({ ...acadmicData, graduationDate: value })
   }
   const changeDepartmentInput = (value: string | null) => {
      setAcadmicData({ ...acadmicData, department: value })
   }
   const submitHandler = (e: React.FormEvent) => {
      e.preventDefault()
      // setErrorMessage("somthing went wrong")
      if (errorMessage) {
         toast.error(errorMessage)
      } else {
         toast.success("The application has sended successfully", { style: { background: "green", color: "white" }, position: "top-center" })
      }
      const totalData = { ...personalData, ...acadmicData }
      console.log(totalData)
   }

   return (
      <form onSubmit={submitHandler} className="w-full px-8 py-4 mb-5 shadow-lg bg-white rounded-lg border-slate-200 border">
         <div>
            {/* title of personal data */}
            <div className="flex items-center space-x-3">
               <User className="w-12 h-12 text-white p-2 rounded-full bg-blue-700" />
               <span className="text-xl w-9 h-9 flex items-center justify-center rounded-full font-bold bg-slate-300/50 text-blue-700">1</span>
               <h2 className="text-2xl font-bold text-blue-700">البيانات الشخصية</h2>
            </div>
            {/* inputs for data personality */}
            <div dir="rtl" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-baseline">

               {/* // --->> PERSONAL DATA <<--- */}

               {/* name of user */}
               <ApplicationInput changeHandler={changeNameInput} value={personalData.name} type="string" placeholder="الاسم رباعي" icon={<User2 className="w-10 h-10" />} />
               {/* email input */}
               <ApplicationInput changeHandler={changeEmailInput} value={personalData.email} type="email" placeholder="البريد الالكتروني" icon={<Mail className="w-10 h-10" />} />
               {/* National ID */}
               <ApplicationInput type="number" changeHandler={changeNationalIdInput} value={personalData.nationalId} placeholder="اكتب الرقم القومى 14 رقم" icon={<Grid3x3 className="w-10 h-10" />} />
               {/* Date of birth */}
               <ApplicationInput type="date" changeHandler={changeDateInput} value={personalData.date} placeholder="تاريخ ميلادك" icon={<Calendar className="w-10 h-10" />} />
               {/* Phone number input */}
               <ApplicationInput type="string" changeHandler={changePhoneNumberInput} value={personalData.phoneNumber} placeholder="ادخل رقم الهاتف" icon={<Phone className="w-10 h-10" />} />
               {/* Select a gender */}
               <ApplicationSelection label="نوع الجنس" value={personalData.gender} changeHandler={changeGenderInput} items={genderType} />

            </div>

         </div>

         <Separator className={"my-4 bg-blue-600"} />

         <div>
            {/* title of acadmic data */}
            <div className="flex items-center space-x-3">
               <GraduationCap className="w-12 h-12 text-white p-2 rounded-full bg-blue-700" />
               <span className="text-xl w-9 h-9 flex items-center justify-center rounded-full font-bold bg-slate-300/50 text-blue-700">2</span>
               <h2 className="text-2xl font-bold text-blue-700">البيانات الاكاديمية</h2>
            </div>
            {/* inputs for data personality */}
            <div dir="rtl" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-baseline">


               {/* Type of high school */}
               <ApplicationSelection changeHandler={changeTypeHighSchoolInput} items={highSchoolType} value={acadmicData.typeHighSchool} label="اختر نوع الثانوية" />

               {/* Graduation year */}
               <ApplicationSelection
                  items={graduationYears}
                  label="اختر سنة التخرج"
                  value={acadmicData.graduationDate}
                  changeHandler={changeGraduationYearInput}
               />


               <Field className="mt-4" dir="rtl">
                  <InputGroup className="p-6">
                     <InputGroupInput value={acadmicData.degree} onChange={(e) => {
                        setAcadmicData({ ...acadmicData, degree: e.target.value })
                     }} id="nationalId" type="number" defaultValue={"0.00 %"} placeholder="ادخل نتيجتك فى الثانوية" />
                     <InputGroupAddon className="mr-4" align="inline-start">
                        <span className="text-xl">%</span>
                     </InputGroupAddon>
                  </InputGroup>
               </Field>


               {/* Change a department */}
               <ApplicationSelection
                  label="اختر التخصص"
                  changeHandler={changeDepartmentInput}
                  items={departments}
                  value={acadmicData.department}
               />


            </div>

         </div>

         <Separator className={"my-4 bg-blue-600"} />

         <div>
            {/* title of acadmic data */}
            <div className="flex items-center space-x-3">
               <UploadCloud className="w-12 h-12 text-white p-2 rounded-full bg-blue-700" />
               <span className="text-xl w-9 h-9 flex items-center justify-center rounded-full font-bold bg-slate-300/50 text-blue-700">3</span>
               <h2 className="text-2xl font-bold text-blue-700">ارفاق المستندات</h2>
            </div>
            {/* inputs for upload files */}
            <div dir="rtl" className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-3 gap-3 items-baseline">

               <div className="flex items-center justify-center w-full">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base cursor-pointer hover:bg-neutral-tertiary-medium">
                     <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2" /></svg>
                        <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs">ارفاق شهادة الثانوية</p>
                     </div>
                     <input type="file" className="hidden" />
                  </label>
               </div>
               <div className="flex items-center justify-center w-full">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base cursor-pointer hover:bg-neutral-tertiary-medium">
                     <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2" /></svg>
                        <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs">ارفاق الشهادة الميلادية</p>
                     </div>
                     <input type="file" className="hidden" />
                  </label>
               </div>
               <div className="flex items-center justify-center w-full">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base cursor-pointer hover:bg-neutral-tertiary-medium">
                     <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2" /></svg>
                        <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs">ارفاق صور شخصية والبطاقة الشخصية</p>
                     </div>
                     <input type="file" className="hidden" />
                  </label>
               </div>

            </div>
         </div>

         <div className="w-full flex items-center">
            <Button type="submit" className={"py-5 px-10 mx-auto mt-5 bg-blue-700 text-white font-bold cursor-pointer hover:bg-blue-700/90"}>ارسال طلب الالتحاق</Button>
         </div>

      </form>
   )
}

export default ApplyForm