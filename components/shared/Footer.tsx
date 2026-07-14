import Image from 'next/image'
import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { Button } from '../ui/button'
import { FaXTwitter } from 'react-icons/fa6'
import { Separator } from '../ui/separator'

const Footer = () => {
   return (
      <footer dir='rtl' className='py-16'>
         <Container>
            {/* top-side */}
            <div className='flex lg:flex-row flex-col w-full justify-center items-center lg:items-start lg:justify-between md:py-4 '>

               <div className='sm:mb-8'>
                  <Image alt='logo' src={"/assets/images/footer-logo.png"} width={300} height={200} />
                  <p className='mt-4 font-semibold text-slate-800'>معاً نرسم ملامح مستقبلك الأكاديمي والمهني.</p>
               </div>

               <div className='flex justify-center items-center flex-col sm:mb-8'>

                  <h2 className='font-bold text-xl'>روابط سريعة</h2>
                  <div className='w-12 h-1 bg-blue-600 rounded mt-2 mx-auto' />

                  <div className='flex flex-col space-y-2 items-center mt-3 w-full'>
                     <Link className='font-medium hover:text-slate-800 hover:scale-105 text-slate-700 transition-all' href={"#major"}>اختار تخصصك</Link>
                     <Link className='font-medium hover:text-slate-800 hover:scale-105 text-slate-700 transition-all' href={"/apply"}>انضم الينا</Link>
                     <Link className='font-medium hover:text-slate-800 hover:scale-105 text-slate-700 transition-all' href={"#news"}>احدث الفاعليات والاخبار</Link>
                     <Link className='font-medium hover:text-slate-800 hover:scale-105 text-slate-700 transition-all' href={"/login"}>تسجيل الدخول</Link>
                  </div>
               </div>

               <div className='flex flex-col items-center justify-center'>
                  <h2 className='font-bold text-xl'>روابط التواصل الاجتماعي</h2>
                  <div className='w-12 h-1 bg-blue-600 rounded mt-2 mx-auto' />
                  <div className='mt-4 flex flex-col items-center space-y-3 w-full'>
                     <Link className='cursor-pointer w-full' href={"https://www.facebook.com/egi.edu"} target='_blank'>
                        <Button variant={"outline"} className={"px-8 py-4 w-full hover:shadow-2xl  cursor-pointer transition-all"}>
                           <FaFacebookF className='text-blue-600' />
                        </Button>
                     </Link>
                     <Link className='cursor-pointer w-full' href={"https://www.instagram.com/egi_academy"} target='_blank'>
                        <Button variant={"outline"} className={"px-8 py-4 w-full hover:shadow-2xl  cursor-pointer transition-all"}>
                           <FaInstagram className='text-orange-700' />
                        </Button>
                     </Link>
                     <Link className='cursor-pointer w-full' href={"https://twitter.com/aljazeera_univ/status/1657645303464448003"} target='_blank'>
                        <Button variant={"outline"} className={"px-8 py-4 w-full  hover:shadow-2xlcursor-pointer transition-all"}>
                           <FaXTwitter className='text-slate-950' />
                        </Button>
                     </Link>

                  </div>
               </div>
            </div>

            <Separator className={"bg-gray-300 my-7 w-full"} />

            {/* bottom-side */}
            <div className='flex items-center justify-between'>
               <p className="text-xs text-slate-700 text-center py-4">
                  جميع الحقوق محفوظة &copy; {new Date().getFullYear()} معاهد الجزيرة العالية
               </p>
               <p className="text-xs text-slate-700 text-center py-4">
                  تم التطوير بكل 💙 بواسطة فريق التخرج
               </p>
            </div>
         </Container>
      </footer>
   )
}

export default Footer