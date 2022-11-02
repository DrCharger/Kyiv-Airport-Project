import React from 'react';
import './footerAuthor.scss';

const FooterAuthor = () => {
  return (
    <div className="last-conteiner">
      <div className="last-conteiner-info">
        <div className="datas">
          © 2011-2021
          <br />
          Міжнародний аеропорт «Київ»
        </div>
        <div className="ufuture">
          <div>
            <a href="https://ufuture.com/uk/" target={'_blank'} className="ufuture-link">
              <span>
                Part of Ufuture <br /> Investment Group
              </span>
              <img
                src="https://iev.aero/images/logo_white.png"
                alt="logo"
                className="ufuture-link__img"
              />
            </a>
          </div>
          <div>
            <span>
              Розробка сайту
              <br />
              Dimon Charger
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAuthor;
