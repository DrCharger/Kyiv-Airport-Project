import React from 'react';

const InputElement = () => {
  return (
    <div className="input-content">
      <div className="input-content-justify">
        <div className="input-content-justify-flex">
          <h2 className="input-content__title">ПОШУК РЕЙСУ</h2>
          <div className="input-content__action">
            <i></i>
            <form action="">
              <input
                className="input-content__action-fly"
                type="text"
                placeholder="Номер рейсу або місто"
              />
              <button className="input-content__action-btn">ЗНАЙТИ</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputElement;
