import React from 'react'
import Container from '../shared/Container'
import Link from 'next/link'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative h-[87vh] w-full flex items-center justify-center overflow-hidden object-cover" style={{ backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('/assets/images/hero-back.png')" }}>
      <Container className="flex items-center justify-center">


        {/* overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 text-center max-w-4xl px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-wide">
            منصة معاهد الجزيرة الرقمية الذكية
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
            مستقبلك يبدأ هنا. تعلّم بأحدث الوسائل التقنية واكتشف التخصص الذي يفتح لك أبواب سوق العمل فوراً.
          </p>
          <div className="flex justify-center gap-4">
            <Link href={"/apply"}>
              <Button size="lg" className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold px-8 shadow-lg transition-all">
                قدم الآن للدراسة
              </Button>
            </Link>
            <Link href={"#majors"} >
              <Button size="lg" variant="outline" className="text-gray-800 hover:text-white cursor-pointer border-white hover:bg-white/10 font-semibold px-8 transition-all">
                اكتشف تخصصك
              </Button></Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection