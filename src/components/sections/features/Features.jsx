'use client'
import { easeInOut, motion, useInView } from "framer-motion";
import { useRef } from "react";

const Features = () => {
    const container = useRef(null)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <motion.section
            viewport={{
                root: true
            }}
            className="innovation-section relative z-20 pt-[280px]">
            <div className="container flex flex-col justify-center md:gap-y-[76px] sm:gap-y-12 gap-y-8">
                <div className="">
                    <motion.h2
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                           
                        }}
                        transition={{
                            easings: easeInOut,
                            duration: 1,
                            mass: 1.2,
                            damping: 60,
                        }}
                        className='lg:text-[80px] sm:text-[60px] text-4xl lg:leading-[85px] leading-tight text-center font-medium tracking-[-.07em] pb-1 diamond-gradient'>
                        Fueling <br />Innovation Growth
                    </motion.h2>
                </div>
                <div className="innovation-card-wrapper max-w-[1092px] mx-auto w-full flex flex-col gap-[13px]">

                    {/* --- CARD ONE --- */}
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            easings: easeInOut,
                            duration: 1,
                            mass: 1.2,
                            damping: 60,
                            delay: .2
                        }}
                        className="w-full flex sm:flex-row flex-col-reverse gap-5 items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[40px] lg:py-[50px] lg:px-[65px] py-6 px-6">
                        <h3 className="content-card__title md:text-[35px] text-2xl md:leading-[42px] leading-tight font-medium sm:max-w-[370px] sm:text-left text-center diamond-gradient">
                            Unlimited Daily Top-up & Spending
                        </h3>
                        <img src="/assets/image/icons/arrow-fill-top.svg" alt="" />
                    </motion.div>
                    {/* --- CARD TWO --- */}
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            easings: easeInOut,
                            duration: 1,
                            mass: 1.2,
                            damping: 60,
                            delay: .3
                        }}
                        className="w-full flex sm:flex-row flex-col-reverse gap-5 items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[40px] lg:px-[65px] px-6 md:py-0 py-5">
                        <h3 className="content-card__title lg:text-[52px] md:text-4xl text-2xl lg:leading-[60px] leading-tight font-bold sm:text-left text-center sm:max-w-[370px]  diamond-gradient">
                            No ATM Withdrawal Limit
                        </h3>
                        <img src="/assets/image/atm-2.png" alt="" className="md:max-w-full sm:max-w-[200px] max-w-[120px]" />
                    </motion.div>
                    <motion.div className="feature-grid"
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            easings: easeInOut,
                            duration: 1,
                            mass: 1.2,
                            damping: 60,
                            delay: .2
                        }}
                    >
                        {/* --- CARD THREE --- */}
                        <div className="feature-grid-1 w-full flex sm:flex-row flex-col-reverse  gap-5 items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] lg:py-[50px] py-6 lg:px-[65px] px-6">
                            <h3 className="content-card__title md:text-[35px] text-2xl md:leading-[42px] leading-tight font-medium max-w-[370px] sm:text-left text-center diamond-gradient">
                                Accepted Worldwide
                            </h3>
                            <img src="/assets/image/icons/feature-icon-2.svg" alt="" />
                        </div>
                        {/* --- CARD FOUR --- */}
                        <div className="feature-grid-2 w-full flex sm:flex-row flex-col-reverse  gap-5 items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] lg:py-[50px] py-6 lg:px-[65px] px-6">
                            <h3 className="content-card__title md:text-[35px] text-2xl md:leading-[42px] leading-tight font-medium sm:max-w-[370px] sm:text-left text-center diamond-gradient">
                                24/7 Customer Support
                            </h3>
                            <img src="/assets/image/icons/feature-icon-3.svg" alt="" />
                        </div>
                        {/* --- CARD FIVE --- */}
                        <div className="feature-grid-3 w-full flex sm:flex-row flex-col-reverse  gap-5 items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] lg:py-[50px] py-6 lg:px-[65px] px-6">
                            <h3 className="content-card__title md:text-[35px] text-2xl md:leading-[42px] leading-tight font-medium sm:max-w-[370px] sm:text-left text-center  diamond-gradient">
                                All funds are protected by Visa
                            </h3>
                            <img src="/assets/image/icons/feature-icon-4.svg" alt="" />
                        </div>
                        {/* --- CARD SIX --- */}
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                easings: easeInOut,
                                duration: 1,
                                mass: 1.2,
                                damping: 60,
                                delay: .2
                            }}
                            className="feature-grid-4 w-full flex sm:flex-row flex-col-reverse gap-5 items-center justify-between gap-y-10 bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] py-[40px] px-[34px]">
                            <h3 className="content-card__title md:text-[35px] text-2xl md:leading-[42px] leading-tight sm:text-left text-center font-medium diamond-gradient">
                                Deposit within 6 different crypto currencies
                            </h3>
                            <div className="flex flex-wrap justify-between w-full">
                                <img src="/assets/image/icons/feature-1.svg" alt="" />
                                <img src="/assets/image/icons/feature-2.svg" alt="" />
                                <img src="/assets/image/icons/feature-3.svg" alt="" />
                                <img src="/assets/image/icons/feature-4.svg" alt="" />
                                <img src="/assets/image/icons/feature-5.svg" alt="" />
                                <img src="/assets/image/icons/feature-6.svg" alt="" />
                            </div>
                        </motion.div>
                        {/* --- CARD SEVEN --- */}
                        <div className="feature-grid-5 w-full flex sm:flex-row flex-col-reverse items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] px-[34px] md:py-0 py-5">
                            <h3 className="content-card__title md:text-[35px] text-2xl md:leading-[42px] leading-tight font-medium sm:max-w-[370px] sm:text-left text-center  diamond-gradient">
                                Plastic and Metal Cards
                            </h3>
                            <img src="/assets/image/icons/credit-card.svg" alt="" className="md:max-w-full sm:max-w-[200px] max-w-[120px]" />
                        </div>
                    </motion.div>
                    {/* --- CARD EIGHT --- */}
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            easings: easeInOut,
                            duration: 1,
                            mass: 1.2,
                            damping: 60,
                            delay: .4,
                        }}
                        className="w-full flex sm:flex-row flex-col-reverse gap-5 items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[40px] lg:px-[65px] px-6  md:py-0 py-5">
                        <h3 className="content-card__title md:text-[35px] text-2xl md:leading-[40px] leading-tight font-bold sm:max-w-[516px] sm:text-left text-center diamond-gradient">
                            Off-shore Company and Bank (Panama Jurisdiction)
                        </h3>
                        <img src="/assets/image/vault.png" alt="" className="md:max-w-full sm:max-w-[200px] max-w-[120px]" />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Features;