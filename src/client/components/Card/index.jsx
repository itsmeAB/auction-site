import React from "react"
import defaultImage from './TopCap.png';
import './card.scss';

// props => type: 'live', 'new', 'eligible', title
const Card = () => {
  return (
    <div className="ui-lib-card">
      <div className="ui-lib-card__img">
        <img src={defaultImage} />
      </div>
      <div className="ui-lib-card__tag-wrapper">
        <div className="ui-lib-card__tag">
          live auction
      </div>
        <div className="ui-lib-card__text">
          3 days left
      </div>
      </div>
      <div className="ui-lib-card__title">
        Original iPhone Boxes By Apple Liquidation Lot
      </div>
      <hr className="ui-lib-card__hr" />
      <div className="ui-lib-card__group">
        <div className="ui-lib-card__price">
          <div className="ui-lib-card__price-value">
            $200
        </div>
          <div className="ui-lib-card__price-label">
            Current Bid
        </div>
        </div>
        <div className="ui-lib-card__price">
          <div className="ui-lib-card__price-value">
            $500
        </div>
          <div className="ui-lib-card__price-label">
            MSRP
        </div>
        </div>
        <div className="ui-lib-card__price">
          <div className="ui-lib-card__price-value">
            20
        </div>
          <div className="ui-lib-card__price-label">
            Units
        </div>
        </div>

      </div>
      <div className="ui-lib-card__action">
        <div>View auction</div><div>Watch</div>
      </div>
    </div>
  )
}

export default Card
