'use client';
import Button from "@/components/utilities/Button";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";

const PricingTwo = () => {
    const [pricingType, setPricingType] = useState("Plastic");

    const plasticHandler = () => {
        setPricingType("Plastic")
    }
    const metalHandler = () => {
        setPricingType("Metal")
    }
    const virtualHandler = () => {
        setPricingType("Virtual")
    }

    const features = {
        virtual: [
            {
                label: "Instant Issuance",
                isAvailable: true
            },
            {
                label: "24/7 Live Support",
                isAvailable: true
            },
            {
                label: "Spend Online",
                isAvailable: true
            },
            {
                label: "High spending limits",
                isAvailable: true
            },
            {
                label: "Physical Card",
                isAvailable: false
            },
            {
                label: "Anonymous",
                isAvailable: false
            }
        ],
        plastic: [
            {
                label: "Multi-Currency Account",
                isAvailable: true
            },
            {
                label: "High spending limits",
                isAvailable: true
            },
            {
                label: "Plastic card",
                isAvailable: true
            },
            {
                label: "24/7 live support",
                isAvailable: true
            },
            {
                label: "Free express shipping",
                isAvailable: true
            },
            {
                label: "Metal card",
                isAvailable: false
            },
            {
                label: "Anonymous",
                isAvailable: false
            }
        ],
        metal: [
            {
                label: "Multi-Currency Account",
                isAvailable: true
            },
            {
                label: "High spending limits",
                isAvailable: true
            },
            {
                label: "Black metal card",
                isAvailable: true
            },
            {
                label: "24/7 live support",
                isAvailable: true
            },
            {
                label: "Free express shipping",
                isAvailable: true
            },
            {
                label: "Anonymous",
                isAvailable: false
            }
        ]
    }

    const corporateFeatures = [
        "Multi-Currency Account",
        "No spending limits",
        "Custom metal card",
        "24/7 live support",
        "Free express shipping",
        "Anonymous"
    ]

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
                    {pricingType === 'Virtual' ? (
                        <PriceTypeCard
                            title="Virtual"
                            features={features.virtual}
                            onClick={virtualHandler}
                            active={pricingType === "virtual"}
                        />

                    ) : pricingType === 'Plastic' ? (<PriceTypeCard
                        title="Plastic"
                        features={features.plastic}
                        onClick={plasticHandler}
                        active={pricingType === "plastic"}
                    />
                    ) : (
                        <PriceTypeCard
                            title="Metal"
                            features={features.metal}
                            onClick={metalHandler}
                            active={pricingType === "metal"}
                        />
                    )}
                    <PriceTypeSelector
                        types={["Virtual", "Plastic", "Metal"]}
                        activeType={pricingType}
                        onClick={setPricingType}
                    />
                </div>
                <CorporateCard
                    title="Corporate"
                    price="3000"
                    features={corporateFeatures}
                />
            </div>

        </motion.section>
    );
};

export default PricingTwo;

const PriceTypeCard = ({ features, onClick, active }) => {
    return (
        <div onClick={onClick} className={`w-full lg:w-[474px] flex flex-col md:items-center items-start justify-between gap-[54px] bg-[#0e0f11] border border-1 border-[#E2E8FF10] p-[30px] sm:pt-[76px] rounded-[14.12px] ${active ? "bg-[#161a2180] border-[#699CB9]" : ""}`}>
            <ul className="flex flex-col gap-[26px] max-w-[250px] w-full">
                {features.map((feature, index) => (
                    <li key={index} className={`flex items-center gap-[44px] text-base font-medium text-white ${feature.isAvailable ? 'opacity-[1]' : 'opacity-[.4]'}`}>
                        <img className="w-[13px] h-[10px]" src={
                            feature.isAvailable ? "/assets/image/check-icon.svg" : "/assets/image/close-icon.svg"
                        } alt="" />
                        {feature.label}
                    </li>
                ))}
            </ul>
            <Button href="/contact" className="w-full">
                REGISTER
            </Button>
        </div>
    );
}

const PriceTypeSelector = ({ types, activeType, onClick }) => {

    return (
        <div className="w-full lg:w-[667px] flex flex-col gap-8">
            {types.map((type, index) => (
                <div key={index} onClick={() => onClick(type)} className={`w-full flex items-center justify-between border-[1px] rounded-[12px] p-[30px] md:py-[42px] lg:py-[52px] md:p-[56px] pl-[30px] cursor-pointer select-none ${activeType === type ? "border-[#699CB9] bg-[#161a2180]" : "border-[#E2E8FF10]"}`}>
                    <div className="flex items-center gap-[18px]">
                        <div className={`border-[2px] border-[#699CB9] w-5 h-5 rounded-full  ${activeType === type ? "bg-white" : "bg-transparent"}`}>
                        </div>
                        <p className={`text-[24px] font-medium ${activeType === type ? "opacity-[100%]" : "opacity-[80%]"}`}>{type}</p>
                    </div>
                    <h3 className={`md:text-[38px] text-[24px] font-medium ${activeType === type ? "opacity-[100%]" : "opacity-[60%]"}`}>${type === "Virtual" ? 75 : type === "Plastic" ? 380 : 750}</h3>
                </div>
            ))}
        </div>
    );
}

const CorporateCard = ({ title, price, features }) => {
    return (
        <div className="max-w-[1196px] w-full mx-auto mt-[38px] bg-[#0e0f11] border border-1 border-[#E2E8FF10] md:px-[56px] px-6 md:pt-[48px] pt-[24px] md:pb-[36px] pb-[24px]  rounded-[13.12px]">
            <div className="flex sm:items-center items-start justify-between sm:pl-[15px] sm:flex-row flex-col">
                <p className="text-[24px] font-medium">{title}</p>
                <h4 className="text-[38px] font-medium">${price}</h4>
            </div>
            <ul className="w-full max-w-[720px] list-disc grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] sm:mt-[80px] mt-6 mb-[60px] sm:pl-[50px] pl-[24px]">
                {features.map((feature, index) => (
                    <li key={index} className="text-base font-medium text-white max-w-[220px]">
                        {feature}
                    </li>
                ))}
            </ul>
            <Button href="/contact" className="w-full">
                Contact Us
            </Button>
        </div>
    );
}