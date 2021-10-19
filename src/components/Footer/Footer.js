import React from 'react';
import './Footer.scss';
import logo from '../../assets/img/footer-logo.svg';



const Footer= () => {
    return ( 
<section className="footer_up">
    <div className="collabo">
        <img src={logo} classname="footer_logo" alt="" />
        <h4 className="connect">We collaborate with ambitious<br/> brands and people. <span>Let’s connect:</span>
        </h4>
    </div>
    <div className="contact">
     <ul className="stay">
         <li>⚪️ STAY IN THE KNOW</li>
         <li>Email Adress</li>
     </ul>
     <ul className="contact_info"> Social
         <li><a href="#">Instagram </a></li>
         <li><a href="#">Twitter</a></li>
         <li><a href="#">Linkedin</a></li>
         <li><a href="#">Facebook</a></li>
     </ul>
     <ul> INITIATIVES
         <li><a href="#">Crafted  </a></li>
         <li><a href="#">Culture Manual</a></li>
         <li><a href="#">Applied </a></li>
         <li><a href="#">Brandbeats</a></li>
         <li><a href="#">Moves</a></li>
     </ul>
     <ul> OFFICES
         <li><a href="#">San Diego – CA</a></li>
         <li><a href="#">Bay Area – CA</a></li>
         <li><a href="#">St. Louis – MO</a></li>
     </ul>

    </div>
    <div className="footer_below">
    BASIC®, INC 10 - 20©
EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™
TERMS, PRIVACY POLICY


    </div>

</section>
     );
}
 
export default Footer ;

// STAY IN THE KNOW
// Social 
// Instagram Twitter Linkedin Facebook
// INITIATIVES
// Crafted Culture Manual Applied Brandbeats Moves
// OFFICES
// San Diego – CA
// Bay Area – CA
// St. Louis – MO
