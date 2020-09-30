import React from 'react';
import './navigation.css';
import {facebook} from '../../assets/facebook.svg'

export default function Navigation() {
  return (
    <div className="Navigation">
      <ul>
        <li><a href="institutional.asp">QUEM SOMOS</a></li>
        <li><a href="team.asp">EQUIPE</a></li>
        <li><a href="contact.asp">CONTATO</a></li>
      </ul>
      <nav>
        <li><a href="facebook.asp"><img alt="facebook" src="../../assets/facebook"/></a></li>
        <li><a href="instagram.asp"><img alt="instagram" src="../../assets/instagram"/></a></li>
        <li><a href="twitter.asp"><img alt="twitter" src="../../assets/twitter"/></a></li>
        <li><a href="cart.asp"><img alt="cart" src="../../assets/cart"/></a></li>

      </nav>
    </div>
  );
}

