import SectionHeader from "@/components/shared/SectionHeader"
import Image from "next/image"
// shadcn ui components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Container from "@/components/shared/Container"

import ApplyForm from "@/components/forms/ApplyForm"
import { Search, SquarePen } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"
import { Button } from "@/components/ui/button"

const ApplyForNewStudents = () => {
   return (
      <section dir="rtl" className="py-10">
         <Container>
            {/* logo && title of page*/}
            <Image className="mx-auto" alt="logo" width={200} height={200} src={"/assets/images/logo.png"} />
            <SectionHeader title="طلب التحاق بالجامعة" />

            {/* tabs (send an application & follow the application) */}
            {/* تم تغيير القيمة الافتراضية هنا لتكون متطابقة مع التبويب الأول "apply" */}
            <Tabs defaultValue="apply" className="mt-8">
               
               {/* تم إضافة space-x-reverse لضبط المسافات في وضع RTL */}
               <TabsList className="mx-auto flex justify-center gap-4 bg-transparent" activateOnFocus>
                  <TabsTrigger
                     className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all duration-300 active:scale-95 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-600/20 cursor-pointer"
                     value="apply"
                  >
                     طلب التحاق <SquarePen className="w-4 h-4" />
                  </TabsTrigger>
                  <TabsTrigger 
                     className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all duration-300 active:scale-95 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-600/20 cursor-pointer" 
                     value="follow-application"
                  >
                     متابعة الطلب <Search className="w-4 h-4" />
                  </TabsTrigger>
               </TabsList>

               {/* تم حذف scale-75 الذي كان يسبب الفراغ الكبير واستبداله بـ max-w لضبط الحجم بشكل صحي */}
               <TabsContent className="mt-6 w-full max-w-4xl mx-auto" value="apply">
                  {/* render the form user will send to apply */}
                  <ApplyForm />
               </TabsContent>

               <TabsContent className="mt-6" value="follow-application">
                  <form className="max-w-xl mx-auto shadow-lg border rounded-lg border-slate-300 px-8 py-6 bg-white">
                     <Field dir="rtl" className="w-full mx-auto flex flex-col gap-4">
                        <FieldLabel htmlFor="input-button-group" className="text-slate-700 font-medium">رقم الطلب</FieldLabel>
                        <Input id="input-button-group" placeholder="أدخل رقم الطلب هنا..." className="py-5" />
                        <Button variant="outline" className="py-5 px-10 mx-auto mt-2 bg-blue-700 text-white font-bold cursor-pointer hover:bg-blue-700/90 hover:text-white transition-all w-full sm:w-auto">
                           تتبع الطلب
                        </Button>
                     </Field>
                  </form>
               </TabsContent>
            </Tabs>
         </Container>
      </section>
   )
}

export default ApplyForNewStudents