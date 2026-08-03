import HeaderProfile from "@/components/shared/HeaderProfile"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

const StudentPage = () => {
  return (
    <div className='p-4 md:p-6' dir="rtl">
      {/* header title */}
      <HeaderProfile title="البيانات الشخصية" icon={<User className="h-8 w-8" />} />

      {/* content for profile page */}
      <div className="grid grid-cols-2 gap-5 md:gap-8 mt-10">
        <Card className="px-2 md:px-6 w-full shadow-sm hover:shadow-md transition-all flex flex-row gap-x-2" >
          <h3 className="font-bold text-xl">الاسم : </h3>
          <span className="font-semibold text-xl">عمر شوقى عبدالله</span>
        </Card>
        <Card className="px-2 md:px-6 w-full shadow-sm hover:shadow-md transition-all  flex flex-row gap-x-2" >
          <h3 className="font-bold text-xl">الفرقة : </h3>
          <span className="font-semibold text-xl">الرابعة</span>
        </Card>
        <Card className="px-2 md:px-6 w-full shadow-sm hover:shadow-md transition-all  flex flex-row gap-x-2" >
          <h3 className="font-bold text-xl">النوع : </h3>
          <span className="font-semibold text-xl">ذكر</span>
        </Card>
        <Card className="px-2 md:px-6 w-full shadow-sm hover:shadow-md transition-all  flex flex-row gap-x-2" >
          <h3 className="font-bold text-xl">الشعبة : </h3>
          <span className="font-semibold text-xl">نظم معلومات الاعمال</span>
        </Card>
        <Card className="px-2 md:px-6 w-full shadow-sm hover:shadow-md transition-all  flex flex-row gap-x-2" >
          <h3 className="font-bold text-xl">المعدل التراكمي : </h3>
          <span className="font-semibold text-xl">3.70</span>
        </Card>
      </div>
    </div>
  )
}

export default StudentPage