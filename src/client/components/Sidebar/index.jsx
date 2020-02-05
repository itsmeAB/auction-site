import React from 'react';
import CheckboxGroup from '../CheckboxGroup';
import './sidebar.css';

const Sidebar = (props) => {
  return (
    <div className="side-bar">
      <div className="side-bar__head">
        <label for="filter" className="side-bar__filter"><strong>Filter</strong></label>
        <button type="button" className="side-bar__clear">CLEAR</button>
      </div>
      <div className="side-bar__select-wrapper">
        <label>
          PRICE
        </label>
        <div className="side-bar__select-group">
          <select>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <select>
            <option>10</option>
            <option>100</option>
            <option>200</option>
            <option>500</option>
            <option>1000</option>
          </select>
        </div>
      </div>
      <div className="side-bar__check-group"><CheckboxGroup /></div>
    </div>
  );
}

export default Sidebar;