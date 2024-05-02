const Hero = () => {
    return (
        <section
            className="relative flex flex-col justify-center pt-[155px]"
        >
            <div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <img src="/assets/image/grid.svg" alt="" />
                </div>
            </div>
            <div className="container z-10 flex flex-col justify-center">
                <div className="flex flex-col justify-center text-center">
                    <div className="title-block">
                        <div className="subtitle">
                            <div className="line"></div>
                            <p>Top Banking Platform</p>
                            <div className="line"></div>
                        </div>
                        <h1 className="section-title">
                            Presenting New Era of Banking Powered by Prism
                        </h1>
                        <p>
                            Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim
                            fusce At sem amet lacus eu aliquet venenatis tell bibendum sapien.
                        </p>
                    </div>
                    <div className="btn-block">
                        <button className="btn btn-icon">
                            Get Started
                            <span>
                                <img src="assets/image/icons/arrow-right.svg" alt="" />
                            </span>
                        </button>
                    </div>
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
