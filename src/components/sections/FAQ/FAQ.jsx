'use client'
import Accordion from '@/components/utilities/Accordion'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

const data = [
    {
        title: "What are the costs associated with a Prism Card?",
        description: "Prism Card offers various tiers, each with its own pricing and benefits. To view detailed pricing information, please visit our pricing page."
    },
    {
        title: "How can I obtain a metal Prism Card?",
        description: "Prism Card offers various tiers, each with its own pricing and benefits. To view detailed pricing information, please visit our pricing page."
    },
    {
        title: "Is the Prism Card globally accepted?",
        description: "Prism Card offers various tiers, each with its own pricing and benefits. To view detailed pricing information, please visit our pricing page."
    },
    {
        title: "How do I use my cryptocurrency with Prism?",
        description: "Prism Card offers various tiers, each with its own pricing and benefits. To view detailed pricing information, please visit our pricing page."
    }
]

const FAQ = () => {

    const [open, setOpen] = useState(0);
    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        }
        setOpen(index);
    };

    return (
        <motion.section
            viewport={{
                root: true
            }}
            className="innovation-section md:py-[100px] py-[60px] relative z-20">
            <div className="container flex flex-col justify-center md:gap-y-[76px] sm:gap-y-12 gap-y-8">
                <div className="">
                    <motion.h2
                        initial={{
                            y: 100, opacity: 0
                        }}
                        whileInView={{
                            y: 0, opacity: 1
                        }}
                        viewport={{
                            once: true
                        }}
                        className='lg:text-[80px] sm:text-[60px] text-4xl lg:leading-[85px] leading-tight text-center font-medium tracking-[-.07em] pb-1 diamond-gradient'>
                        Frequently asked questions
                    </motion.h2>
                </div>
                <div className="max-w-[1264px] mx-auto w-full flex flex-col gap-4">
                    {data?.map((data, index) => {
                        return (
                            <Accordion
                                key={index}
                                open={index === open}
                                data={data}
                                toggle={() => {
                                    toggle(index);
                                }}
                            ></Accordion>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    )
}

export default FAQ
