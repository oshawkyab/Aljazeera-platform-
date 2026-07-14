export type TLayout = {
   children: React.ReactNode
}
export type TInputApplication = {
   type: string;
   icon: React.ReactNode;
   placeholder: string;
   changeHandler: (value: string) => void;
   value: string
}
export type TSelectionApplication = {
   items: {
      label: string;
      value: string | null;
   }[];
   changeHandler: (value: string | null) => void;
   value: string | null;
   label: string
}


