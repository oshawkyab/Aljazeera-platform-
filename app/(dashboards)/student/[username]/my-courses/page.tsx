import HeaderProfile from "@/components/shared/HeaderProfile"
import CourseItem from "@/components/student/CourseItem"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardHeader } from "@/components/ui/card"
import { Book, ComputerIcon, Database, User, VideoIcon } from "lucide-react"


const MaterialPage = () => {
  return (
    <div dir="rtl" className='p-4 md:p-6'>
      <HeaderProfile title="كورساتي" icon={<Book className="h-8 w-8" />} />
      <div className="grid grid-cols-3 gap-5 md:gap-8 mt-10">
        <CourseItem name="قوعد البيانات" icon={<Database className="h-18 w-18 text-blue-700"/>} id="3djdnsS3" prof="مرتضى" />
        <CourseItem name="علوم حاسب" icon={<ComputerIcon className="h-18 w-18 text-blue-700"/>} id="3djdnsS3" prof="دعاء" />
        <CourseItem name="قوعد البيانات" icon={<Database className="h-18 w-18 text-blue-700"/>} id="3djdnsS3" prof="مرتضى" />
        <CourseItem name="علوم حاسب" icon={<ComputerIcon className="h-18 w-18 text-blue-700"/>} id="3djdnsS3" prof="دعاء" />
        <CourseItem name="علوم حاسب" icon={<ComputerIcon className="h-18 w-18 text-blue-700"/>} id="3djdnsS3" prof="دعاء" />
      
      </div>
    </div>
  )
}

export default MaterialPage