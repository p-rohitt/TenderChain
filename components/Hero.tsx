"use client";

import React from 'react'
import { Button } from './ui/button';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
type Props = {}

function Hero({ }: Props) {
  const router = useRouter();
  return (
    
      <motion.div initial ={{opacity:0}} animate ={{opacity:100}} transition={{duration:1.5}} className="flex flex-col items-center space-y-4">
        <h1 className=" text-3xl lg:text-6xl text-gray-300 font-bold tracking-wider">
          Welcome to TenderChain!
        </h1>
        <h3 className=" text-sm lg:text-lg font-semibold text-gray-300 tracking-wide">
          Empower Your Projects with Smart Contractor Selection
        </h3>
        <p className="text-gray-500 lg:text-sm text-xs p-5" >
          <span className="flex justify-center">
            Looking for the perfect contractor for your next project? Look no
            further!
          </span>
          We bring you a revolutionary decentralized platform that puts you in
          control of choosing the right contractor for your needs.
        </p>
        <div className='flex gap-14 '>
        <Button variant="secondary" className='text-black bg-muted-foreground rounded-full ' onClick={ () => router.push('/login')}>Explore More</Button>
                  
        <Button variant="secondary" className='text-black bg-muted-foreground rounded-full'>Watch Video</Button>

        </div>
      </motion.div>

  );
}

export default Hero