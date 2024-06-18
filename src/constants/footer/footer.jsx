import React from 'react'
import { Camper, Contact, Footer, Footerin, Iconwrapper, Menu, Service, } from './footerstyle';

import tobe from '../../assets/footer/tobe.png';
import gram from '../../assets/footer/gram.png';
import nav from '../../assets/footer/nav.png';
import { NavLink } from '../../styles/navbarstyle';




const FooterContainer = () => {
  return (
    <Footer>
        <NavLink to="/camper">
        <Camper>Camper</Camper>
        </NavLink>
        <Footerin>
            <p>Services</p>
            <Service>
                <div>Camping</div>
                <div>Lodging</div>
                <div>Harbor</div>
                <div>Day Use</div>
            </Service>
        </Footerin>
        <Footerin>
            <p>Menu</p>
            <Menu>
                <div>About</div>
                <div>Service</div>
                <div>Booking</div>
                <div>Blog</div>
            </Menu>
        </Footerin>
        <Footerin>
            <p>Contact</p>
            <Contact>
                <Iconwrapper><img src={tobe} alt="tobe" /> <img src={gram} alt="gram" /> <img src={nav} alt="nav" /></Iconwrapper>
                <div>021 Korea Seul, LA</div>
                <div>camper@example.com</div>
                <div>(021) 345-6789-99</div>
            </Contact>
        </Footerin>
    </Footer>
  )
}

export default FooterContainer;