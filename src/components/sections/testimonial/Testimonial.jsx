"use client";

import React, { useRef, useEffect } from "react";
import TestimonialCard from "@/components/cards/TestimonialCard";
import {
    motion,
    useSpring,
    useTransform,
    easeInOut
} from "framer-motion";
import { useRafLoop } from "react-use";
import { useWindowSize } from "@react-hook/window-size";

const MarqueeItem = (props) => {
    const { children, speed } = props;

    const itemRef = useRef(null);
    const rectRef = useRef(null);
    const x = useRef(0);
    const [width, height] = useWindowSize();

    const setX = () => {
        if (!itemRef.current || !rectRef.current) {
            return;
        }

        const xPercentage = (x.current / rectRef.current.width) * 100;

        if (xPercentage < -100) {
            x.current = 0;
        }

        if (xPercentage > 0) {
            x.current = -rectRef.current.width;
        }

        itemRef.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
    };

    useEffect(() => {
        if (itemRef.current) {
            rectRef.current = itemRef.current.getBoundingClientRect();
        }
    }, [width, height]);

    const loop = () => {
        //Substracts the current x from the speed set by useSpring
        x.current -= speed.get();
        setX();
    };

    const [_, loopStart] = useRafLoop(loop, false);

    useEffect(() => {
        loopStart();
    }, []);

    return (
        <motion.div className="item" ref={itemRef}>
            <TestimonialCard />
        </motion.div>
    );
};


const Testimonial = (props) => {

    const {
        speed = 1,
        threshold = 0.014,
        children,
    } = props;

    const marqueeRef = useRef(null);
    const slowDown = useRef(false);

    const x = useRef(0);
    const [wWidth] = useWindowSize();
    const speedSpring = useSpring(speed, {
        damping: 40,
        stiffness: 90,
        mass: 5
    });

    const opacity = useTransform(
        speedSpring,
        [-wWidth * 0.05, 0, wWidth * 0.05],
        [1, 0, 1]
    );
    const skewX = useTransform(
        speedSpring,
        [-wWidth * 0.05, 0, wWidth * 0.05],
        [1, 0, 1]
    );

    const loop = () => {
        /**
         * Do nothing if we're slowing down
         * or
         * Our x is less than the threshold
         *
         * The threshold basically tells how much to speed up
         *
         * Without this stop - x.current will mutiple expodentially
         */
        if (slowDown.current || Math.abs(x.current) < threshold) {
            return;
        }

        /**
         * This portion speeds up the spring until it reaches the `threshold`
         */
        x.current *= 0.66;

        if (x.current < 0) {
            x.current = Math.min(x.current, 0);
        } else {
            x.current = Math.max(x.current, 0);
        }

        //speedSpring sets the speed for the marquee items that gets passed to the item components
        speedSpring.set(speed + x.current);
    };

    useRafLoop(loop);
    const testimonialData = [
        {
            name: "Sarah Connor",
            text: "Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien."
        },

    ]

    return (
        <motion.section className="testimonial-section overflow-x-hidden" id="testimonial">
            <div className="container  flex flex-col items-center justify-center md:gap-y-[76px] sm:gap-y-12 gap-y-8">
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
                        What others say about us
                    </motion.h2>
                </div>
                <div class="flex gap-3 justify-center  w-full">
                    <motion.div
                        className="marquee gap-3"
                        ref={marqueeRef}
                        style={{ skewX }}
                    >
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
                    </motion.div>
                </div>

            </div>

        </motion.section>
    );
};

export default Testimonial;