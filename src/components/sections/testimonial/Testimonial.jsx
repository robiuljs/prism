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
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        // centerMode: true,
        cssEase: "linear",
        infinite: true,
        initialSlide: 1,
        buttons: false,
    };

    return (
        <section className="testimonial-section">
            <div className="container flex flex-col items-center justify-center gap-[76px]">
                <div className="">
                    <h2 className='text-[80px] leading-[85px] text-center font-medium tracking-[-.07em] pb-1 diamond-gradient'>
                        What others say about us
                    </h2>
                </div>
                <div className="flex gap-4">
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
