"use client";

import Hero from '@/components/Hero';
import  Navbar  from '@/components/Navbar'
import PropertyCard from '@/components/PropertyCard';
import {Wallet,Key,Workflow,RadioTower, Globe,Equal } from 'lucide-react';
import { motion } from "framer-motion";
import ServicesCard from '@/components/ServicesCard';
import { ScrollArea } from '@radix-ui/react-scroll-area';
export default function Home() {
  return (
    <main className=" bg-[url('/Images/bg.jpg')] bg-repeat-y bg-contain">
      <Navbar />

      <div className=" min-h-screen flex justify-center mt-40 ">
        <Hero />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 100, x: 0 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen flex flex-col items-center "
      >
        <h3 className=" text-3xl lg:text-5xl font-bold uppercase   tracking-[4px] mb-8 text-gray-300">
          Why?
        </h3>

        <div className="grid lg:grid-cols-3 gap-5 grid-cols-1">
          <PropertyCard
            Icon={Key}
            header={" Data Privacy"}
            body={
              "Data is distributed across the network, safeguarding it from potential vulnerabilities present in centralized systems. Users retain control over their data, ensuring robust security and bolstering privacy measures."
            }
          />
          <PropertyCard
            Icon={Wallet}
            header={"Trust and Transparency"}
            body={
              "Our platform harnesses the power of blockchain technology, providing an immutable and transparent record of all contract-related activities."
            }
          />
          <PropertyCard
            Icon={Workflow}
            header={"No Intermediaries"}
            body={
              "Eliminate the need for intermediaries, such as central authorities or third-party gatekeepers. This streamlined approach not only reduces costs but also accelerates the contract selection process, empowering users with efficiency."
            }
          />
          <PropertyCard
            Icon={RadioTower}
            header={"Decentralized Governance"}
            body={
              "Embracing a democratic model, our platform gives power to the users. Voting rights and governance tokens enable community-driven decision-making, ensuring the platform evolves in line with the collective vision of its participants."
            }
          />
          <PropertyCard
            Icon={Globe}
            header={"Global Accessibility"}
            body={
              "Geographical boundaries are no longer barriers with our decentralized platform. Accessible to anyone with an internet connection, we foster inclusivity and encourage a diverse, thriving user base from across the globe."
            }
          />
          <PropertyCard
            Icon={Equal}
            header={"Minimizing Bias"}
            body={
              "With objective criteria built into smart contracts, bias and discrimination are minimized, creating a level playing field where everyone has equal opportunities."
            }
          />
        </div>
      </motion.div>
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        <h3 className="text-3xl lg:text-5xl font-bold uppercase tracking-[4px] mb-8 text-gray-300 ">
          What?
        </h3>

        <div className=" flex  gap-4 overflow-y-hidden justify-start p-5 max-w-7xl mb-8">
          <ServicesCard
            title={"Find the Perfect Contractor"}
            body={
              "Finding the right contractor for your project has never been easier. Simply create a project listing, detailing your requirements, location, and budget. Our advanced matching algorithm will then analyze our extensive database of qualified contractors to find the perfect fit for your needs. Save time and effort by receiving personalized contractor recommendations directly to your dashboard."
            }
          />
          <ServicesCard
            title={"Discover Exciting Projects"}
            body={
              "Contractors, this is your gateway to a world of exciting projects across industries. Create a comprehensive contractor profile highlighting your expertise, experience, and certifications. Our smart matching system will continuously scan project listings to present you with the most relevant opportunities. Receive real-time notifications and express your interest in projects with a single click."
            }
          />
          <ServicesCard
            title={"Secure Efficient Payments"}
            body={
              "TenderChain ensures secure and timely payments for completed projects. Our integrated payment system handles transactions between project owners and contractors, providing a hassle-free experience for all parties involved."
            }
          />
        </div>
      </div>
    </main>
  );
}
