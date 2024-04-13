import React from 'react'
import { Camper, Contact, Footerwrapper, Menu, Service, } from './footerstyle';
import { Column } from '../../styles/motorstyle';
const Footer = () => {
  return (
    <Footerwrapper>
        <Camper>Camper</Camper>
        <Column>
            <p>Services</p>
            <Service>
                <div>Camping</div>
                <div>Lodging</div>
                <div>Harbor</div>
                <div>Day Use</div>
            </Service>
        </Column>
        <Column>
            <p>Menu</p>
            <Menu>
                <div>About</div>
                <div>Service</div>
                <div>Booking</div>
                <div>Blog</div>
            </Menu>
        </Column>
        <Column>
            <p>Contact</p>
            <Contact>
                <div><img src="" alt="" /> <img src="" alt="" /> <img src="" alt="" /></div>
                <div>021 Korea Seul, LA</div>
                <div>camper@example.com</div>
                <div>(021) 345-6789-99</div>
            </Contact>
        </Column>
    </Footerwrapper>
  )
}

export default Footer;