import stats from "@/data/stats.json"
import * as LucideIcons from "lucide-react"
import { Card, CardContent } from '../ui/card'
import Container from '../shared/Container'
import SectionHeader from "../shared/SectionHeader"

const StatsSection = () => {

   return (
      <section className="my-20" id="stats">
            <SectionHeader title="الإحصائيات"/>
         <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-4 md:space-y-0'>
            {stats.map((item) => {
               const IconComponent = (LucideIcons as any)[item.icon]

               return (
                  <Card key={item.id} className='flex flex-col items-center justify-center p-5 shadow-lg border border-blue-400'>
                     <CardContent className='flex flex-col items-center justify-center text-center'>
                        {IconComponent ? (
                           <IconComponent className="w-8 h-8" />
                        ) : (
                           <LucideIcons.HelpCircle className='w-8 h-8' />
                        )}

                        {/* texts */}
                        <div className="mt-3">
                           <p className='font-semibold text-xl'>{item.value}</p>
                           <p className='font-semibold text-xl'>{item.label}</p>
                        </div>
                     </CardContent>
                  </Card>
               )
            })}
         </Container>
      </section>
   )
}

export default StatsSection