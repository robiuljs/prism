'use client'
import { useInView, motion, easeInOut } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "0px 100px -200px 0px" })
    return (
        <>
            <section
                className="flex flex-col justify-center relative bg-[#070809] pb-14 md:pb-[60px] lg:pb-[136px] overflow-hidden min-h-screen"
            >
                <img src="/assets/image/lights.svg" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 z-10 " />
                <img src="/assets/image/bg-shadows.svg" alt="" className="absolute top-[-500px] left-[-400px] z-10 " />
                <img src="/assets/image/star.png" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 " />
                <div className="container z-10 flex flex-col justify-center gap-y-[40px] md:gap-y-[60px] ">
                    <motion.div
                        className="flex flex-col justify-center items-center gap-y-8 text-center max-w-4xl mx-auto  relative  sm:pt-[155px] pt-[100px] w-full">
                        <img src="/assets/image/grid.svg" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 " />
                        <motion.div
                            initial={{
                                y: 20, opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 100,
                            }}
                            transition={{
                                easings: easeInOut,
                                duration: .5,
                                delay: .3,
                                mass: 1.2,
                                damping: 60
                            }}
                            className="flex flex-col justify-center items-center sm:gap-y-8 gap-y-4 relative z-50">

                            <motion.h1

                                className="lg:text-[74px] sm:text-[60px] text-4xl lg:leading-[79px] leading-tight font-medium tracking-[-.07em]  diamond-gradient"
                            >
                                Get in Touch
                            </motion.h1>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{

                            opacity: 100,
                        }}
                        transition={{
                            easings: easeInOut,
                            duration: .5,
                            delay: .3,
                            mass: 1.2,
                            damping: 60
                        }}
                        className="flex justify-center relative">
                        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-9 text-center">
                            <motion.div className="w-full sm:w-[274px] bg-gradient-to-r from-[#182027] to-[#181E2A] rounded-[20px] border-2 border-[#e2e8ff1a] px-[30px] py-10 sm:py-[53px]">
                                <img src="/assets/image/icons/telegram.svg" alt="" className="w-[60px] h-[60px] sm:w-[84px] sm:h-[84px] mx-auto mb-7 sm:mb-11" />
                                <p className="text-base leading-[18px] font-medium pb-0.5 diamond-gradient">Telegram</p>
                                <h3 className="text-[20px] sm:text-2xl font-medium tracking-[-.07em] text-white">@prismfi </h3>
                            </motion.div>
                            <motion.div className="w-full sm:w-[274px] bg-gradient-to-r from-[#182027] to-[#181E2A] rounded-[20px] border-2 border-[#e2e8ff1a] px-[30px] py-10 sm:py-[53px]">
                                <img src="/assets/image/icons/whatsapp.svg" alt="" className="w-[60px] h-[60px] sm:w-[84px] sm:h-[84px] mx-auto mb-7 sm:mb-11" />
                                <p className="text-base leading-[18px] font-medium pb-0.5 diamond-gradient">Whatsapp</p>
                                <h3 className="text-[20px] sm:text-2xl font-medium tracking-[-.07em] text-white">+007 4184 6868</h3>
                            </motion.div>
                            <motion.div className="w-full sm:w-[274px] bg-gradient-to-r from-[#182027] to-[#181E2A] rounded-[20px] border-2 border-[#e2e8ff1a] px-[30px] py-10 sm:py-[53px]">
                                <img src="/assets/image/icons/mail.svg" alt="" className="w-[60px] h-[60px] sm:w-[84px] sm:h-[84px] mx-auto mb-7 sm:mb-11" />
                                <p className="text-base leading-[18px] font-medium pb-0.5 diamond-gradient">Email</p>
                                <h3 className="text-[20px] sm:text-2xl font-medium tracking-[-.07em] text-white">support@prism.fi </h3>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Contact;
