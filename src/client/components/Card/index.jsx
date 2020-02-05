import React from "react"
import defaultImage from './TopCap.png';
import './card.css';

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
      <div className="ui-lib-card__price">
        Current Bid MSRP Units
      </div>
      <div className="ui-lib-card__action">
        <div>View auction</div><div>Watch</div>
      </div>
    </div>
  )
}

export default Card
