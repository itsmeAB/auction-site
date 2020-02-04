import React from 'react';
import Sidebar from '../Sidebar';
import './container.css';

const Container = () => {
  return (
    <div className="container">
      <div className="container__side-bar">
        <Sidebar />
      </div>
      <div className="container__main">Container</div>
    </div>
  );
}

export default Container;