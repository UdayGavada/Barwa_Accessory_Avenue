import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        <a href="https://www.disclaimergenerator.net/live.php?token=AwbQaqJTsfWrygV7t00p9Q72tYsCeD6Y">
          2023 Barwa All rights reserverd by Barwa
        </a>
      </p>
      <p className="icons">
        <a
          href="https://www.instagram.com/barwamobile/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://twitter.com/barwamobile?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  );
};

export default Footer;
