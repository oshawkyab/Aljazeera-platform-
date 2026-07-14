import Image from "next/image"
import Container from "../shared/Container"
import SectionHeader from "../shared/SectionHeader"
// shadcn
import { Card, CardContent } from "@/components/ui/card"
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"

// static data json (mockData)
import news from "@/data/news.json"

const NewsSection = () => {
   return (
      <section id="news" className="py-16 mb-10">
         <Container>

            <div className="mb-10 text-right">
               <SectionHeader title="أحدث الأخبار والفعاليات" />
            </div>

            <Carousel

               opts={{ align: "start" }}
               style={{ direction: "rtl" }}
               className="w-full"
            >
               <div className="hidden sm:flex justify-end gap-2 mb-4">
                  <CarouselPrevious className="static translate-y-0 h-9 w-9 border-slate-200 text-slate-900 hover:bg-slate-200" />
                  <CarouselNext className="static translate-y-0 h-9 w-9 border-slate-200 text-slate-900 hover:bg-slate-200" />
               </div>
               <CarouselContent className="-ml-4">
                  {news.map((item) => (
                     <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                           <Card className="overflow-hidden p-0 border-blue-400 border hover:shadow-md transition-shadow duration-300 h-full flex flex-col">

                              <div className="relative w-full p-0 aspect-16/10 bg-slate-100">
                                 <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-w: 768px) 100vw, (max-w: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                    priority={item.id === "news-1"}
                                 />
                                 {/* شارة التصنيف فوق الصورة */}
                                 <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                                    {item.category}
                                 </span>
                              </div>

                              <CardContent className="p-5 flex flex-col grow text-right" dir="rtl">

                                 <span className="text-xs text-slate-400 mb-2 block font-mono">
                                    {item.date}
                                 </span>

                                 {/* العنوان */}
                                 <h3 className="text-lg font-bold text-slate-800 line-clamp-2 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                                    {item.title}
                                 </h3>

                                 <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed mb-4">
                                    {item.description}
                                 </p>


                              </CardContent>
                           </Card>
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>


            </Carousel>
         </Container>
      </section>
   )
}

export default NewsSection