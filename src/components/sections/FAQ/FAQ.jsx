'use client'
import Accordion from '@/components/utilities/Accordion'
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
        <section className="innovation-section py-[100px] relative z-20">
            <div className="container flex flex-col justify-center gap-y-[76px]">
                <div className="">
                    <h2 className='text-[80px] leading-[85px] text-center font-medium tracking-[-.07em] pb-1 diamond-gradient'>
                        Frequently asked questions
                    </h2>
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
        </section>
    )
}

export default FAQ
