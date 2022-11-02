import React from 'react';
import './footer.scss';
import FooterInfo from './FooterInfo';
import FooterAuthor from './FooterAuthor';

const Footer = () => {
  return (
    <footer className="footer">
      <FooterInfo />
      <FooterAuthor />
    </footer>
  );
};

export default Footer;
