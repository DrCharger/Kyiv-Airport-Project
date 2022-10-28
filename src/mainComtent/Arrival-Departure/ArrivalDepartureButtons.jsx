import React from 'react';

const ArrivalDepartureButtons = () => {
  return (
    <div className="search-result">
      <div className="tabs">
        <div className="tablist">
          <div className="tablist-container">
            <button className="tablist-container-btn">
              <span className="tablist-container-btn-text">Departure</span>
            </button>
            <button className="tablist-container-btn2">
              <span className="tablist-container-btn-text">Arrivals</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrivalDepartureButtons;
