const Features = () => {
    return (
      <section className="innovation-section">
        <div className="innovation-content">
          <div className="title-block">
            <h2 className="section-title">Fueling Innovation Growth</h2>
          </div>
          <div className="innovation-card-wrapper">
            <div className="content-card">
              <div className="content-card__body">
                <h3 className="content-card__title">
                  Unlimited Daily Top-up & Spending
                </h3>
              </div>
              <div className="content-card__image">
                <img src="/assets/image/icons/arrow-fill-top.svg" alt="" />
              </div>
            </div>
            <div className="content-card-two">
              <div className="content-card-two__body">
                <h3 className="content-card-two__title">
                  No ATM Withdrawal Limit
                </h3>
              </div>
              <div className="content-card-two__image">
                <img src="/assets/image/icons/atm.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  
  