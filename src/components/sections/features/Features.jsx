import SectionTitle from "@/components/layout/SectionTitle";

const Features = () => {
    return (
        <section className="innovation-section relative z-20">
            <div className="container flex flex-col justify-center gap-y-[76px]">
                <div className="">
                    <h2 className='text-[80px] leading-[85px] text-center font-medium tracking-[-.07em] pb-1 diamond-gradient'>
                        Fueling <br />Innovation Growth
                    </h2>
                </div>
                <div className="innovation-card-wrapper max-w-[1092px] mx-auto w-full flex flex-col gap-[13px]">
                    <div className="w-full flex items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[40px] py-[50px] px-[65px]">
                        <h3 className="content-card__title text-[35px] leading-[42px] font-medium max-w-[370px]  diamond-gradient">
                            Unlimited Daily Top-up & Spending
                        </h3>
                        <img src="/assets/image/icons/arrow-fill-top.svg" alt="" />
                    </div>
                    <div className="w-full flex items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[40px] px-[65px]">
                        <h3 className="content-card__title text-[52px] leading-[60px] font-bold max-w-[370px]  diamond-gradient">
                            No ATM Withdrawal Limit
                        </h3>
                        <img src="/assets/image/atm-2.png" alt="" />
                    </div>
                    <div className="feature-grid">
                        <div className="feature-grid-1 w-full flex items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] py-[50px] px-[65px]">
                            <h3 className="content-card__title text-[35px] leading-[42px] font-medium max-w-[370px]  diamond-gradient">
                                Accepted Worldwide
                            </h3>
                            <img src="/assets/image/icons/feature-icon-2.svg" alt="" />
                        </div>
                        <div className="feature-grid-2 w-full flex items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] py-[50px] px-[65px]">
                            <h3 className="content-card__title text-[35px] leading-[42px] font-medium max-w-[370px]  diamond-gradient">
                                24/7 Customer Support
                            </h3>
                            <img src="/assets/image/icons/feature-icon-3.svg" alt="" />
                        </div>
                        <div className="feature-grid-3 w-full flex items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] py-[50px] px-[65px]">
                            <h3 className="content-card__title text-[35px] leading-[42px] font-medium max-w-[370px]  diamond-gradient">
                                All funds are protected by Visa
                            </h3>
                            <img src="/assets/image/icons/feature-icon-4.svg" alt="" />
                        </div>
                        <div className="feature-grid-4 w-full flex flex-col items-center justify-between gap-y-10 bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] py-[40px] px-[34px]">
                            <h3 className="content-card__title text-[35px] leading-[42px] font-medium diamond-gradient">
                                Deposit within 6 different crypto currencies
                            </h3>
                            <div className="flex justify-between w-full">
                                <img src="/assets/image/icons/feature-1.svg" alt="" />
                                <img src="/assets/image/icons/feature-2.svg" alt="" />
                                <img src="/assets/image/icons/feature-3.svg" alt="" />
                                <img src="/assets/image/icons/feature-4.svg" alt="" />
                                <img src="/assets/image/icons/feature-5.svg" alt="" />
                                <img src="/assets/image/icons/feature-6.svg" alt="" />
                            </div>
                        </div>
                        <div className="feature-grid-5 w-full flex items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[20px] px-[34px]">
                            <h3 className="content-card__title text-[35px] leading-[42px] font-medium max-w-[370px]  diamond-gradient">
                                Plastic and Metal Cards
                            </h3>
                            <img src="/assets/image/icons/credit-card.svg" alt="" />
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between bg-gradient-to-t from-white/5 to-black/90 rounded-[40px] px-[65px]">
                        <h3 className="content-card__title text-[35px] leading-[40px] font-bold max-w-[516px]  diamond-gradient">
                            Off-shore Company and Bank (Panama Jurisdiction)
                        </h3>
                        <img src="/assets/image/vault.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;

