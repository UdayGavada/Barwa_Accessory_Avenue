import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Barwa All rights reserverd By UT</p>
      <p className="icons">
      <a href="https://www.instagram.com/barwamobile/" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram />
      </a>
      <a href="https://twitter.com/barwamobile?lang=en" target="_blank" rel="noopener noreferrer">
        <AiOutlineTwitter />
        </a>
      </p>
    </div>
  )
}

export default Footer