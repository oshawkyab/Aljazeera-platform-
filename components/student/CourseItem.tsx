import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { BookOpen, User, Video } from "lucide-react"

interface CourseItemProps {
  name: string;
  icon: React.ReactNode;
  prof: string;
  id: string;
}

const CourseItem = ({ name, icon, prof, id }: CourseItemProps) => {
  return (
    <Card className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900">
      
      {/* Upper Content: Icon + Info */}
      <CardHeader className="p-0">
        <div className="flex items-start gap-4">
          
          {/* Icon Badge */}
          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100/60 text-blue-600 transition-transform duration-300 group-hover:scale-105 dark:from-slate-800 dark:to-slate-800/80 dark:text-blue-400">
            {/* Soft Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-blue-400/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              {icon}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-1 flex-col space-y-1.5 text-right">
            {/* Course Code Badge */}
            <span className="w-fit rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              {id}
            </span>

            {/* Title */}
            <h2 className="line-clamp-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-100">
              {name}
            </h2>

            {/* Professor Name */}
            <div className="flex items-center gap-1.5 pt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              <User className="h-4 w-4 text-slate-400" />
              <span>د/ {prof}</span>
            </div>
          </div>

        </div>
      </CardHeader>

      {/* Bottom Actions Section */}
      <CardContent className="mt-6 p-0 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="grid grid-cols-2 gap-3">
          
          <Button 
            variant="outline" 
            className="h-11 w-full justify-center gap-2 rounded-xl border-slate-200/80 bg-slate-50/50 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Video className="h-4 w-4 text-blue-600" />
            <span>(12) محاضرة</span>
          </Button>

          <Button 
            variant="outline" 
            className="h-11 w-full justify-center gap-2 rounded-xl border-slate-200/80 bg-slate-50/50 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <BookOpen className="h-4 w-4 text-indigo-600" />
            <span>(2) مستند</span>
          </Button>

        </div>
      </CardContent>

    </Card>
  )
}

export default CourseItem