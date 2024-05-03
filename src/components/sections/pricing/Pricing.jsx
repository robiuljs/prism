import PricingCard from "@/components/cards/PricingCard";
import Button from "@/components/utilities/Button";

const Pricing = () => {
    return (
        <section className="pricing-section">
            <div className="container flex flex-col justify-center md:gap-y-[76px] sm:gap-y-12 gap-y-8">
                <div className="">
                    <h2 className='lg:text-[80px] sm:text-[60px] text-4xl lg:leading-[85px] leading-tight text-center font-medium tracking-[-.07em] pb-1 diamond-gradient'>
                        know Our Pricing
                    </h2>
                </div>
                <div className="pricing-card-wrapper flex flex-wrap justify-center gap-10">
                    <div className="pricing-card lg:w-[30%] sm:w-[47%] w-auto">
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
                    </div>
                    <div className="pricing-card lg:w-[30%] sm:w-[47%] w-auto">
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
                    </div>
                    <div className="pricing-card lg:w-[30%] sm:w-[47%] w-auto">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
