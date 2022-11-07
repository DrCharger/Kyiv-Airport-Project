import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';

const PlaneContainer = ({ onClick, seatsChosen }) => {
  const newSector = [2, 1, 0];
  const newRow = [7, 6, 5, 4, 3, 2, 1];
  const newSeatLeft = ['A', 'B', 'C'];
  const newSeatRight = ['D', 'E', 'F'];

  const handleChange = seat => {
    onClick(seat);
  };

  return (
    <div className="plane-container">
      <div className="plane-container-full">
        <div className="window1"></div>
        <div className="window2"></div>
        <div className="window3"></div>
        <div className="window4"></div>
        <div className="plane-board">
          <div className="plane-board-cont">
            {newSector.map(sector => (
              <div key={`sec-l-${sector}`} className="sector">
                {newRow.map(row => (
                  <div key={`row-l-${row}`} className="sector-row">
                    {newSeatLeft.map(seat => (
                      <div
                        key={`seat-${seat}`}
                        className={classNames('sector-row-seat', {
                          disabled: seatsChosen.includes(`${sector * newRow.length + row} ${seat}`),
                        })}
                        onClick={() => handleChange(`${sector * newRow.length + row} ${seat}`)}
                      >
                        {sector * newRow.length + row + seat}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="plane-board-cont">
            {newSector.map(sector => (
              <div key={`sec-r-${sector}`} className="sector">
                {newRow.map(row => (
                  <div key={`row-r-${row}`} className="sector-row">
                    {newSeatRight.map(seat => (
                      <div
                        key={`seat-${seat}`}
                        className={classNames('sector-row-seat', {
                          disabled: seatsChosen.includes(`${sector * newRow.length + row} ${seat}`),
                        })}
                        onClick={() => handleChange(`${sector * newRow.length + row} ${seat}`)}
                      >
                        {sector * newRow.length + row + seat}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="plane-cabin"></div>
        <div className="plane-board-wing-back"></div>
        <div className="plane-board-wing-left"></div>
        <div className="plane-board-wing-right"></div>
        <div className="plane-board-wing-left-back"></div>
        <div className="plane-board-wing-right-back"></div>
        <div className="turbina-left"></div>
        <div className="turbina-right"></div>
      </div>
    </div>
  );
};

export default PlaneContainer;
