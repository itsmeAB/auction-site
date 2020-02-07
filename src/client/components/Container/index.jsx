import React from 'react';
import Sidebar from '../Sidebar';
import Card from '../Card';
import './container.scss';

const Container = () => {
  const cardItems = ['card1', 'card2', 'card3'];
  return (
    <div className="container">
      <div className="container__side-bar">
        <Sidebar />
      </div>
      <div className="container__main">
        <div className="container__card-wrapper">
          {cardItems.map(card => <Card />)}
        </div>
        <button type="button" className="container__button" onClick={() => { }}>Load more</button>
      </div>
    </div>
  );
}

export default Container;