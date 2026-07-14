"use client"
import { TInputApplication } from "@/types"
import { Field } from "../ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"

const ApplicationInput = ({ type, placeholder, icon, changeHandler, value }: TInputApplication) => {

   return (
      <Field className="mt-4" dir="rtl">
         <InputGroup className="p-6">
            <InputGroupInput value={value} onChange={(e) => changeHandler(e.target.value)} type={type} id="name" placeholder={placeholder} />
            <InputGroupAddon className="mr-4" align="inline-start">
               {icon}
            </InputGroupAddon>
         </InputGroup>
      </Field>
   )
}

export default ApplicationInput