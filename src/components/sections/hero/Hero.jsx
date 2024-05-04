'use client'
import Button from "@/components/utilities/Button";
import { useInView, motion, easeInOut } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "0px 100px -200px 0px" })
    return (
        <section
            className="flex flex-col justify-center relative bg-[#070809]"
        >
            <img src="/assets/image/lights.svg" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 z-10 " />
            <img src="/assets/image/bg-shadows.svg" alt="" className="absolute top-[-500px] left-[-400px] z-10 " />
            <img src="/assets/image/star.png" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 " />
            <div className="container z-10 flex flex-col justify-center md:gap-y-[145px] gap-y-[80px]">
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
                        duration: .3,
                        delay: .3,
                        mass: 1.2,
                        damping: 60
                    }}
                    className="flex flex-col justify-center items-center gap-y-8 text-center max-w-4xl mx-auto  relative  sm:pt-[155px] pt-[100px] ">
                    <img src="/assets/image/grid.svg" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 " />
                    <div className="flex flex-col justify-center items-center sm:gap-y-8 gap-y-4 relative z-50">
                        <div className="subtitle flex items-center gap-3">
                            <motion.img
                                src="/assets/image/icons/line-1.svg" alt="" className="sm:w-auto w-[100px]" />
                            <motion.p

                                className="badge-gradient"

                            >Top Banking Platform</motion.p>
                            <motion.img
                                src="/assets/image/icons/line-2.svg" alt="" className="sm:w-auto w-[100px]" />
                        </div>
                        <motion.h1

                            className="lg:text-[74px] sm:text-[60px] text-4xl lg:leading-[79px] leading-tight font-medium tracking-[-.07em] pb-1 diamond-gradient"
                        >
                            Presenting New Era of Banking Powered by Prism
                        </motion.h1>
                        <motion.p

                            className="max-w-[654px] sm:text-[22px] text-lg sm:leading-[29px] leading-[25px] tracking-[-.06em] font-normal text-[#D9D9DA]"
                        >
                            Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim
                            fusce At sem amet lacus eu aliquet venenatis tell bibendum sapien.
                        </motion.p>
                    </div>
                    <motion.div

                        className="relative z-50"
                    >
                        <Button>
                            Get Started
                            <img src="assets/image/icons/arrow-right.svg" alt="" />
                        </Button>
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
                    className="flex justify-center relative mb-[-200px]">
                    <motion.img
                        style={{
                            transform: isInView ? 'rotate(-15deg)' : 'rotate(0deg)',
                            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        src="/assets/image/card.webp" alt="" className="md:max-w-[479px] max-w-[200px] w-full absolute rotate-[-15deg] hero-card"
                        ref={ref}
                    />
                    <img src="/assets/image/card.webp" alt="" className="md:max-w-[479px] max-w-[200px] w-full" />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
