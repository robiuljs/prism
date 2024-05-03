import PricingCard from "@/components/cards/PricingCard";

const Pricing = () => {
    return (
        <section className="pricing-section">
            <div className="container flex flex-col justify-center gap-y-[76px]">
                <div className="">
                    <h2 className='text-[80px] leading-[85px] text-center font-medium tracking-[-.07em] pb-1 diamond-gradient'>
                        know Our Pricing
                    </h2>
                </div>
                <div className="pricing-card-wrapper flex justify-center gap-10">
                    <PricingCard/>
                    <PricingCard/>
                    <PricingCard/>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
