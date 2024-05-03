import React from 'react'
import Button from '../utilities/Button'

const PricingCard = () => {
    return (
        <div className="pricing-card">
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
    )
}

export default PricingCard