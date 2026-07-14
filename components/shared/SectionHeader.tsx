
const SectionHeader = ({ title }: { title: string }) => {
   return (
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">

         <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            {title}
         </h2>
         <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full mt-4" />

      </div>
   )
}

export default SectionHeader