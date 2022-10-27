import React from 'react';
import './footer.scss';
import FooterInfo from './FooterInfo';
import FooterLast from './FooterLast';

const Footer = () => {
  return (
    <footer className="footer">
      <FooterInfo />
      <FooterLast />
    </footer>
  );
};

export default Footer;
