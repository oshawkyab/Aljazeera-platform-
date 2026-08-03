import React from 'react'
import { Separator } from '../ui/separator'
import { Card } from '../ui/card'

const HeaderProfile = ({ title, icon }: { title: string; icon: React.ReactNode }) => {
   return (
      <div className="w-xs px-5 py-2 mb-4">
         <div className="flex items-center gap-x-3">
            {icon}
            <h1 className="font-semibold mb-2 text-2xl">{title}</h1>
         </div>
         <Separator className="bg-slate-400 my-2" />
      </div>
   )
}

export default HeaderProfile