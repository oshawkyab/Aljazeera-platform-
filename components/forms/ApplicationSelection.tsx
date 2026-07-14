import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { TSelectionApplication } from '@/types'

const ApplicationSelection = ({ items, value, changeHandler, label }: TSelectionApplication) => {
   return (
      <Select onValueChange={(val) => changeHandler(val)} value={value ? value : label} items={items}>
         <SelectTrigger className="w-full p-6">
            <SelectValue className={value ? "text-black" : "text-gray-500"} />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup>
               <SelectLabel>{label}</SelectLabel>
               {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                     {item.label}
                  </SelectItem>
               ))}
            </SelectGroup>
         </SelectContent>
      </Select>
   )
}

export default ApplicationSelection