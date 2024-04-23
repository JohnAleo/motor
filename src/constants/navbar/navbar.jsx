import React from 'react'
import { Container,NavLink,NavbarLeft,NavbarMiddle,NavbarRight } from '../../styles/navbarstyle'
import camper from '../../assets/navbar/camper.png'
import cart from '../../assets/navbar/cart.png'
import user from '../../assets/navbar/user.png'
const Navbar = () => {
  return (
    <Container>
        <NavbarLeft><img src={camper} alt="camper" /></NavbarLeft>
        <NavbarMiddle>
            <NavLink to ="/motor">
                <p>Motor <img src="" alt="" /></p>
           </NavLink>
           <NavLink to="/caravan">
                <p>Caravan <img src="" alt="" /></p>
           </NavLink>
           <NavLink to="/tuning">
                <p>Tuning <img src="" alt="" /></p>
           </NavLink>
           <NavLink to="used-car">
                <p> Used Car <img src="" alt="" /></p>
           </NavLink>
           <NavLink to="camping-place">
                <p>Camping Place <img src="" alt="" /></p>
           </NavLink>
        </NavbarMiddle>
        <NavbarRight>
            <img src={cart} alt="cart" />
            <img src={user} alt="user" />
            <p>En</p>
        </NavbarRight>
    </Container>
  )
}

export default Navbar;