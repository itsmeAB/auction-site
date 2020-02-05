import React from 'react';
import './checkboxGroup.css';

const CheckboxGroup = () => {
  const items = ['west', 'Midwest', 'Southeast', 'Northeast', 'Southwest'];
  return (
    <div className="checkbox-group">
      <div className="checkbox-group__title">
        LOCATION(USA)
      </div>
      <div className="checkbox-group__items">
        {items.map(i => 
        <label>
          <input
            name="numberOfGuests"
            type="checkbox"
            checked={false}
            onChange={() => { }} />
          {i}
        </label>)}
      </div>
    </div>
  );
}

export default CheckboxGroup;