
const TestimonialCard = () => {
    return (
      <div className="testimonial-card">
        <div className="testimonial-card__head">
          <ul className="rating-stars">
            <li>
              <img src="/assets/image/icons/blue-star.svg" alt="" />
            </li>
            <li>
              <img src="/assets/image/icons/blue-star.svg" alt="" />
            </li>
            <li>
              <img src="/assets/image/icons/blue-star.svg" alt="" />
            </li>
            <li>
              <img src="/assets/image/icons/blue-star.svg" alt="" />
            </li>
            <li>
              <img src="/assets/image/icons/blue-star.svg" alt="" />
            </li>
          </ul>
          <div className="brand-image">
            <img src="/assets/image/logo-clutch.svg" alt="" />
          </div>
        </div>
        <div className="testimonial-card__body">
          <p>
            Mi auctor sagittis habitasse elit. In orci lorem sodales sem enim
            fusce. At sem amet lacus eu aliquet venenatis tell bibendum sapien.
          </p>
        </div>
        <div className="testimonial-card__footer">
          <div className="user-info">
            <div className="user-profile">
              <img src="/assets/image/user-profile.png" alt="" />
            </div>
            <div className="user-details">
              <h4 className="user-name">Sarah John</h4>
              <h4 className="user-position">CEO of Own Multi Company</h4>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialCard;
  