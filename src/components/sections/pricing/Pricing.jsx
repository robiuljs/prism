'use client'
import PricingCard from "@/components/cards/PricingCard";
import Button from "@/components/utilities/Button";
import { easeInOut, motion } from "framer-motion";

const Pricing = () => {
    return (
        <motion.section
            viewport={{
                root: true
            }}
            className="pricing-section"
            id="pricing"
            >
            <div className="container flex flex-col justify-center md:gap-y-[76px] sm:gap-y-12 gap-y-8">
                <div className="">
                    <motion.h2
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
                        }}
                        className='lg:text-[80px] sm:text-[60px] text-4xl lg:leading-[85px] leading-tight text-center font-medium tracking-[-.07em] pb-1 diamond-gradient'>
                        know Our Pricing
                    </motion.h2>
                </div>
                <motion.div
                    initial={{
                        y: 30,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        easings: easeInOut,
                        duration: .3,
                        delay: .5,
                        mass: 1.2,
                        damping: 50
                    }}
                    className="pricing-card-wrapper flex flex-wrap justify-center gap-10">
                    <motion.div

                        className="pricing-card lg:w-[30%] sm:w-[47%] w-auto">
                        <div className="pricing-card__head">
                            <h3 className="pricing-card__title text-[24px] leading-[40px]">Plastic</h3>
                            <h3 className="pricing-card__price text-[38px] font-medium leading-[40px]">$380</h3>
                            <div className="flex justify-center">
                                <img src="/assets/image/white-shadow.svg" alt="" />
                            </div>
                        </div>
                        <div className="pricing-card__body">
                            <ul className="pricing-card__list">
                                <li>Multi-Currency Account</li>
                                <li>High spending limits</li>
                                <li>Plastic card</li>
                                <li>24/7 live support</li>
                                <li className="disabled">Metal card</li>
                                <li className="disabled">Free express shipping</li>
                                <li className="disabled">anonymous</li>
                            </ul>
                            <Button>
                                REGISTER
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        className="pricing-card lg:w-[30%] sm:w-[47%] w-auto">
                        <div className="pricing-card__head">
                            <h3 className="pricing-card__title text-[24px] leading-[40px]">Metal</h3>
                            <h3 className="pricing-card__price text-[38px] font-medium leading-[40px]">$800</h3>
                            <div className="flex justify-center">
                                <img src="/assets/image/white-shadow.svg" alt="" />
                            </div>
                        </div>
                        <div className="pricing-card__body">
                            <ul className="pricing-card__list">
                                <li>Multi-Currency Account</li>
                                <li>High spending limits</li>
                                <li>Plastic card</li>
                                <li>24/7 live support</li>
                                <li>Metal card</li>
                                <li>Free express shipping</li>
                                <li>anonymous</li>
                            </ul>
                            <Button>
                                REGISTER
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        className="pricing-card lg:w-[30%] sm:w-[47%] w-auto">
                        <div className="pricing-card__head">
                            <h3 className="pricing-card__title text-[24px] leading-[40px]">Corporate</h3>
                            <h3 className="pricing-card__price text-[38px] font-medium leading-[40px]">$3000</h3>
                            <div className="flex justify-center">
                                <img src="/assets/image/white-shadow.svg" alt="" />
                            </div>
                        </div>
                        <div className="pricing-card__body">
                            <ul className="pricing-card__list">
                                <li>Multi-Currency Account</li>
                                <li>High spending limits</li>
                                <li>Plastic card</li>
                                <li>24/7 live support</li>
                                <li>Metal card</li>
                                <li>Free express shipping</li>
                                <li>anonymous</li>
                            </ul>
                            <Button>
                                CONTACT US
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Pricing;
