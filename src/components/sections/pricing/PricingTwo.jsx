'use client';
import Button from "@/components/utilities/Button";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";

const PricingTwo = () => {
    const [pricingType, setPricingType] = useState("plastic");

    const plasticHandler = () => {
        setPricingType("plastic")
    }
    const metalHandler = () => {
        setPricingType("metal")
    }
    const corporateHandler = () => {
        setPricingType("corporate")
    }

    return (
        <motion.section
            viewport={{
                root: true
            }}
            className="pricing-section"
            id="pricing"
        >
            <div className="container">
                <div className="mt-[40px] mb-[40px]">
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
                <div className="flex flex-col-reverse md:flex-row justify-center gap-12 md:gap-6 lg:gap-8 xl:gap-[55px]">
                    {pricingType === 'metal' ? (
                        <div className="w-full lg:w-[474px] flex flex-col items-center justify-between gap-[54px] bg-[#0e0f11] border border-1 border-[#E2E8FF10] p-[30px] sm:pt-[76px] rounded-[14.12px]">
                            <ul className="flex flex-col gap-[26px]">
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    Multi-Currency Account
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    High spending limits
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    Black metal card
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    24/7 live support
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    Free express shipping
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/close-icon.svg" alt="" />
                                    <span className="opacity-[40%]">Anonymous</span>
                                </li>
                            </ul>
                            <Button className="w-full">
                                REGISTER
                            </Button>
                        </div>
                    ) : pricingType === 'corporate' ? (
                        <div className="w-full lg:w-[474px] flex flex-col items-center justify-between gap-[54px] bg-[#0e0f11] border border-1 border-[#E2E8FF10] p-[30px] sm:pt-[76px] rounded-[14.12px]">
                            <ul className="flex flex-col gap-[26px]">
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    Multi-Currency Account
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    Unlimited spending limits
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    Custom metal card
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    24/7 live support
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    Free express shipping
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    Anonymous
                                </li>
                            </ul>
                            <Button className="w-full">
                                REGISTER
                            </Button>
                        </div>
                    ) : (
                        <div className="w-full lg:w-[474px] flex flex-col items-center justify-between gap-[54px] bg-[#0e0f11] border border-1 border-[#E2E8FF10] p-[30px] sm:pt-[76px] rounded-[14.12px]">
                            <ul className="flex flex-col gap-[26px]">
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    Multi-Currency Account
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    High spending limits
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    Plastic card
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    24/7 live support
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/check-icon.svg" alt="" />
                                    Free express shipping
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/close-icon.svg" alt="" />
                                    <span className="opacity-[40%]">Metal card</span>
                                </li>
                                <li className="flex items-center gap-[44px] text-base font-medium text-white">
                                    <img className="w-[13px] h-[10px]" src="/assets/image/close-icon.svg" alt="" />
                                    <span className="opacity-[40%]">Anonymous</span>
                                </li>
                            </ul>
                            <Button className="w-full">
                                REGISTER
                            </Button>
                        </div>
                    )}

                    <div className="w-full lg:w-[667px] flex flex-col gap-8">
                        <div onClick={plasticHandler} className={`w-full flex items-center justify-between border-[1px] rounded-[12px] p-[30px] md:py-[42px] lg:py-[52px] md:p-[56px] pl-[30px] cursor-pointer select-none ${pricingType === "plastic" ? "border-[#699CB9] bg-[#161a2180]" : "border-[#E2E8FF10]"}`}>
                            <div className="flex items-center gap-[18px]">
                                <div className={`border-[2px] border-[#699CB9] w-5 h-5 rounded-full  ${pricingType === "plastic" ? "bg-white" : "bg-transparent"}`}>
                                </div>
                                <p className={`text-[24px] font-medium ${pricingType === "plastic" ? "opacity-[100%]" : "opacity-[80%]"}`}>Plastic</p>
                            </div>
                            <h3 className={`text-[38px] font-medium ${pricingType === "plastic" ? "opacity-[100%]" : "opacity-[60%]"}`}>$380</h3>
                        </div>
                        <div onClick={metalHandler} className={`w-full flex items-center justify-between border-[1px] rounded-[12px] p-[30px] md:py-[42px] lg:py-[52px] md:p-[56px] pl-[30px] cursor-pointer select-none ${pricingType === "metal" ? "border-[#699CB9] bg-[#161a2180]" : "border-[#E2E8FF10]"}`}>
                            <div className="flex items-center gap-[18px]">
                                <div className={`border-[2px] border-[#699CB9] w-5 h-5 rounded-full  ${pricingType === "metal" ? "bg-white" : "bg-transparent"}`}>
                                </div>
                                <p className={`text-[24px] font-medium ${pricingType === "metal" ? "opacity-[100%]" : "opacity-[80%]"}`}>Metal</p>
                            </div>
                            <h3 className={`text-[38px] font-medium ${pricingType === "metal" ? "opacity-[100%]" : "opacity-[60%]"}`}>$750</h3>
                        </div>
                        <div onClick={corporateHandler} className={`w-full flex items-center justify-between border-[1px] rounded-[12px] p-[30px] md:py-[42px] lg:py-[52px] md:p-[56px] pl-[30px] cursor-pointer select-none ${pricingType === "corporate" ? "border-[#699CB9] bg-[#161a2180]" : "border-[#E2E8FF10]"}`}>
                            <div className="flex items-center gap-[18px]">
                                <div className={`border-[2px] border-[#699CB9] w-5 h-5 rounded-full  ${pricingType === "corporate" ? "bg-white" : "bg-transparent"}`}>
                                </div>
                                <p className={`text-[24px] font-medium ${pricingType === "corporate" ? "opacity-[100%]" : "opacity-[80%]"}`}>Corporate</p>
                            </div>
                            <h3 className={`text-[38px] font-medium ${pricingType === "corporate" ? "opacity-[100%]" : "opacity-[60%]"}`}>$3000</h3>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1196px] w-full mx-auto mt-[38px] bg-[#0e0f11] border border-1 border-[#E2E8FF10] px-[56px] pt-[48px] pb-[36px] rounded-[13.12px]">
                    <div className="flex items-center justify-between">
                        <p className="text-[24px] font-medium">Virtual Card</p>
                        <h4 className="text-[38px] font-medium">Custom</h4>
                    </div>
                    <ul className="w-full lg:w-1/2 list-disc grid grid-cols-2 gap-[30px] mt-[80px] mb-[60px]">
                        <li className="col-span-2 sm:col-span-1 text-base font-medium text-white">
                            Instant Issuance
                        </li>
                        <li className="col-span-2 sm:col-span-1 text-base font-medium text-white">
                            Spend online
                        </li>
                        <li className="col-span-2 sm:col-span-1 text-base font-medium text-white">
                            No spending iimits
                        </li>
                        <li className="col-span-2 sm:col-span-1 text-base font-medium text-white">
                            24/7 live support
                        </li>
                    </ul>
                    <Button className="w-full">
                        Contact Us
                    </Button>
                </div>
            </div>
        </motion.section>
    );
};

export default PricingTwo;
