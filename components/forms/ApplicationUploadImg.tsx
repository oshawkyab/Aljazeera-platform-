"use client";

import { TApplicationDocument } from "@/types";
import { UploadDropzone } from "@/utils/uploadthing";
import { useState } from "react";


const ApplicationUploadImg = ({ changeHandler, label }: TApplicationDocument) => {
   const [imageUrl, setImageUrl] = useState("");

   return (
      <div className="flex flex-col gap-4">
         <UploadDropzone
            endpoint={"imageUploader"}
            onClientUploadComplete={(res) => console.log(res[0].ufsUrl)}
            onUploadError={(error) => console.log(error)}
            onUploadBegin={() => {
               console.log("Upload started");
            }}
            appearance={{
               container: "p-2 border w-65 h-65 rounded-lg shadow",
               label: "text-slate-600 text-semibold"
            }}
            content={{
               label: label
            }}
         />
      </div>
   );
};

export default ApplicationUploadImg;