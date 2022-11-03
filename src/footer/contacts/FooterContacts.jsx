import React from 'react';
import { netWorks } from '../../data/networks';

const FooterContacts = () => {
  return (
    <div className="contacts-medium">
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
  );
};

export default FooterContacts;
