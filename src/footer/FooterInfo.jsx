import React from 'react';
import { footerData } from '../data/footerData';
import { netWorks } from '../data/networks';

const FooterInfo = () => {
  return (
    <div className="footer-container">
      {footerData.map(info => (
        <div key={info.id} className="footer-container__info">
          <h3 className="footer-container__info-header">{info.name}</h3>
          <ul className="footer-container__info-header__list">
            {info.about.map(li => (
              <li key={`about-${li}`} className="footer-container__info-header__list-item">
                <span className="footer-container__info-header__list-item__text">{li}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="contacts">
        <div>
          <div className="contacts__phone">
            <span className="contacts__phone-title">Авіадовідка</span>
            <h3 className="contacts__phone-number">+38 (044) 500 49 73</h3>
          </div>
          <div className="contacts__network">
            <span className="contacts__network-title">Приєднуйтесь до нас</span>
            <ul className="contacts__network__list">
              {netWorks.map(el => (
                <li key={`netw-${el.id}`} className="contacts__network__list-item">
                  <a target={'_blank'} href={el.url}>
                    <img srcSet={el.img_url} alt={el.name} className="img" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
