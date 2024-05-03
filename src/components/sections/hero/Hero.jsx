import Button from "@/components/utilities/Button";

const Hero = () => {
    return (
        <section
            className="relative flex flex-col justify-center pt-[155px] pb-[100px]"
        >
            <div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <img src="/assets/image/grid.svg" alt="" />
                </div>
            </div>
            <div className="container z-10 flex flex-col justify-center gap-y-8">
                <div className="flex flex-col justify-center items-center gap-y-8 text-center max-w-4xl mx-auto">
                    <div className="flex flex-col justify-center items-center gap-y-8">
                        <div className="subtitle">
                            <div className="line"></div>
                            <p>Top Banking Platform</p>
                            <div className="line"></div>
                        </div>
                        <h1 className="text-[74px] leading-[79px] font-medium tracking-[-.07em] pb-1 diamond-gradient">
                            Presenting New Era of Banking Powered by Prism
                        </h1>
                        <p className="max-w-[654px] text-[22px] leading-[29px] tracking-[-.06em] font-normal text-[#D9D9DA]">
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
                    <img src="/assets/image/credit-card.svg" alt="" />
                </div>
                <div className="hero-overlay">
                </div>
            </div>
        </section>
    );
};

export default Hero;
