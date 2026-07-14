import * as LucideIcons from "lucide-react"
import { Card, CardContent } from "../ui/card"
import aboutData from "@/data/aboutUs.json"
import SectionHeader from "../shared/SectionHeader"
import Container from "../shared/Container"
const AboutUsSection = () => {
   return (
      <section id="about-us" className="mb-20">
         <SectionHeader title="لى تختار الجزيرة ؟" />

         <Container className="grid grid-cols-1  lg:grid-cols-3 lg:space-x-4 space-y-4 lg:space-y-0">
            {aboutData.map((item) => {
               const IconComponent = (LucideIcons as any)[item.icon]

               return (
                  <Card className="shadow-lg flex flex-col items-center justify-center space-y-2 p-5 border border-blue-400" key={item.id}>
                     <CardContent>
                        <div className="flex items-center justify-center space-x-3">
                           {/* text */}
                           <p className="text-2xl font-bold">{item.title}</p>
                           {/* icon */}
                           {IconComponent ? (
                              <IconComponent className={`${item.iconColor} h-8 w-8`} />
                           ) : (
                              <LucideIcons.HelpCircle className="h-8 w-8" />
                           )}
                        </div>
                        {/* description */}
                        <p className="text-sm text-center font-semibold mt-5">{item.content}</p>
                     </CardContent>
                  </Card>
               )
            })}
         </Container>
      </section>
   )
}

export default AboutUsSection