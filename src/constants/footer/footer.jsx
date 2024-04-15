import React from 'react'
import { Camper, Contact, Footer, Footerin, Menu, Service, } from './footerstyle';
import { Column } from '../../styles/motorstyle';
import tobe from '../../assets/footer/tobe.png'
import gram from '../../assets/footer/gram.png'




const FooterContainer = () => {
  return (
    <Footer>
        <Footerin>
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
                <div><img src={tobe} alt="tobe" /> <img src={gram} alt="gram" /> <img src="naver" alt="naver" /></div>
                <div>021 Korea Seul, LA</div>
                <div>camper@example.com</div>
                <div>(021) 345-6789-99</div>
            </Contact>
        </Column>
        </Footerin>
    </Footer>
  )
}

export default FooterContainer;