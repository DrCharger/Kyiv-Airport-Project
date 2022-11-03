import React from 'react';
import './footer.scss';
import FooterInfo from './FooterInfo';
import FooterAuthor from './FooterAuthor';
import FooterContacts from './contacts/FooterContacts';

const Footer = () => {
  return (
    <footer className="footer">
      <FooterInfo />
      <FooterContacts />
      <FooterAuthor />
    </footer>
  );
};

export default Footer;
