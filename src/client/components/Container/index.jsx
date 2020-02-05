import React from 'react';
import Sidebar from '../Sidebar';
import Card from '../Card';
import './container.css';

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
      </div>
    </div>
  );
}

export default Container;