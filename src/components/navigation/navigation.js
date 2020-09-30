import React from 'react';
import './navigation.css';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';
import cart from '../../assets/icons/cart.svg';
import babakery from '../../assets/icons/babakery.svg'

const facebookIcon = facebook;
const instagramIcon = instagram;
const twitterIcon = twitter;
const cartIcon = cart;
const babakeryLogo = babakery;

export default function Navigation() {
  return (
    <div className="navbar">
      <div className="Navigation">
        <ul>
          <li><a href="institutional.asp">QUEM SOMOS</a></li>
          <li><a href="team.asp">EQUIPE</a></li>
          <li><a href="contact.asp">CONTATO</a></li>
        </ul>

        <div className="logo">
          <img alt="babakery logo" src={babakeryLogo} />
        </div>

        <ul>
          <a href="facebook.asp"><img alt="facebook" src={facebookIcon} /></a>
          <a href="instagram.asp"><img alt="instagram" src={instagramIcon} /></a>
          <a href="twitter.asp"><img alt="twitter" src={twitterIcon} /></a>
          <a href="cart.asp"><img alt="cart" src={cartIcon} /></a>
        </ul>
      </div>
      <div className="empty">

      </div>

    </div>
  );
}

