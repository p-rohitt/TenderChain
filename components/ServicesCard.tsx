import { Separator } from '@radix-ui/react-separator';
import React from 'react'
import { motion } from "framer-motion";
type Props = {
    title: string,
    body:string

}

function ServicesCard({title,body}: Props) {
  return (
      <motion.div
        initial = {{y:100,opacity:0}} whileInView={{y:0,opacity:100}} transition={{duration:1.2}}
          className="border border-gray-600 flex flex-col space-y-10 items-center bg-[#141414] lg:h-[22rem] lg:w-[56rem] rounded-3xl p-5 bg-opacity-40">
      <div className="text-xl font-bold tracking-wider uppercase text-white font-mono">{title}</div>
          <div>
              
      </div>
      <div className='text-sm font-semibold text-white max-w-md p-4'>{body}</div>
    </motion.div>
  );
}

export default ServicesCard