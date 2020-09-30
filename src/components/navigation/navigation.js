import React from 'react';
import './navigation.css';
import facebook from '~assets/facebook.svg'
import instagram from '~assets/instagram.svg';
import twitter from '~/assets/twitter.svg';
import cart from '~/assets/cart.svg';




export default function Navigation() {
  return (
    <div className="Navigation">
      <ul>
        <li><a href="institutional.asp">QUEM SOMOS</a></li>
        <li><a href="team.asp">EQUIPE</a></li>
        <li><a href="contact.asp">CONTATO</a></li>
      </ul>
      <nav>
        <li><a href="facebook.asp"><img alt="facebook" src={facebook}/></a></li>
        <li><a href="instagram.asp"><img alt="instagram" src={instagram}/></a></li>
        <li><a href="twitter.asp"><img alt="twitter" src={twitter}/></a></li>
        <li><a href="cart.asp"><img alt="cart" src={cart}/></a></li>

      </nav>
    </div>
  );
}

