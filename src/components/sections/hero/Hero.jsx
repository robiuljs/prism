'use client'
import Button from "@/components/utilities/Button";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            className="flex flex-col justify-center sm:pb-[100px] pb-[60px] relative"
        >

            <div className="container z-10 flex flex-col justify-center gap-y-8">
                <div className="flex flex-col justify-center items-center gap-y-8 text-center max-w-4xl mx-auto  relative  sm:pt-[155px] pt-[60px]">
                    <img src="/assets/image/grid.svg" alt="" className="absolute top-0 left-1/2 -translate-x-1/2" />
                    <img src="/assets/image/Star.svg" alt="" className="absolute top-0 left-1/2 -translate-x-1/2" />
                    <div className="flex flex-col justify-center items-center sm:gap-y-8 gap-y-4">
                        <div className="subtitle flex items-center">
                            <img src="/assets/image/icons/line-1.svg" alt="" className="line"/>
                            <p>Top Banking Platform</p>
                            <img src="/assets/image/icons/line-2.svg" alt="" className="line"/>
                        </div>
                        <motion.h1
                            initial={{
                                y: 100, opacity: 0
                            }}
                            animate={{
                                y: 0, opacity: 1
                            }}
                            className="lg:text-[74px] sm:text-[60px] text-4xl lg:leading-[79px] leading-tight font-medium tracking-[-.07em] pb-1 diamond-gradient"
                        >
                            Presenting New Era of Banking Powered by Prism
                        </motion.h1>
                        <p
                            className="max-w-[654px] sm:text-[22px] text-lg sm:leading-[29px] leading-[25px] tracking-[-.06em] font-normal text-[#D9D9DA]"
                        >
                            Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim
                            fusce At sem amet lacus eu aliquet venenatis tell bibendum sapien.
                        </p>
                    </div>
                    <Button>
                        Get Started
                        <img src="assets/image/icons/arrow-right.svg" alt="" />
                    </Button>
                </div>
                <div className="flex justify-center">
                    <img src="/assets/image/credit-card.svg" alt="" className="md:max-w-full max-w-[60%]" />
                </div>
                <div className="hero-overlay sm:h-[365px] h-[170px] rounded-lg absolute">
                </div>
            </div>
        </section>
    );
};

export default Hero;
