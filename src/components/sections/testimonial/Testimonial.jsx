"use client";

import TestimonialCard from "@/components/cards/TestimonialCard";

const marqueeVariants = {
    animate: {
        x: [0, -1035],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "linear",
            },
        },
    },
};

const Testimonial = () => {

    const testimonialData = [
        {
            name: "Sarah Connor",
            text: "Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien."
        },
        {
            name: "",
            text: "Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien."
        },
        {
            name: "",
            text: "Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien."
        },
        {
            name: "",
            text: "Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien."
        },
        {
            name: "",
            text: "Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien."
        },
        {
            name: "",
            text: "Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien."
        },
        {
            name: "",
            text: "Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien."
        },
        {
            name: "",
            text: "Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien."
        },
        {
            name: "",
            text: "Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien."
        },
        {
            name: "",
            text: "Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien."
        },
        {
            name: "",
            text: "Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien."
        },
        {
            name: "",
            text: "Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien."
        },
    ]

    return (
        <section className="testimonial-section">
            <div className="container  flex flex-col items-center justify-center md:gap-y-[76px] sm:gap-y-12 gap-y-8">
                <div className="">
                    <h2 className='lg:text-[80px] sm:text-[60px] text-4xl lg:leading-[85px] leading-tight text-center font-medium tracking-[-.07em] pb-1 diamond-gradient'>
                        What others say about us
                    </h2>
                </div>
                <div class="flex gap-5 justify-center  w-full">
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </div>

        </section>
    );
};

export default Testimonial;
