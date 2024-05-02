"use client";

import TestimonialCard from "@/components/ui/cards/TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../marquee/marquee.css";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

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
            <div className="testimonial-content">
                <div className="title-block">
                    <h2 className="section-title">What others say about us</h2>
                </div>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </section>
    );
};

export default Testimonial;
