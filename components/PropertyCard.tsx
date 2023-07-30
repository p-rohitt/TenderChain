
import React from 'react'
import { motion } from "framer-motion";

type Props = {
    Icon:React.ElementType,
    header: string,
    body:string
}

function PropertyCard({Icon,header,body}: Props) {
  return (
      <div
          className=" bg-[#101010] text-white lg:h-[18rem] lg:w-[26rem] rounded-3xl p-5 flex flex-col items-center  ">
      <div className="flex flex-col justify-center items-center bg-[#141414] w-16 h-16 rounded-full mb-7">
        {<Icon className="text-blue-700 h-8 w-8" />}
      </div>
      <div className="flex flex-col space-y-4 items-center">
        <h3 className="text-2xl font-semibold text-white">{header}</h3>
        <p className="text-xs text-white text-center">{body}</p>
      </div>
    </div>
  );
}

export default PropertyCard