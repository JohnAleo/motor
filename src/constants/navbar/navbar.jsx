import React from 'react'
import { Buttonuser, Camper, Container,Drawerin,Drawerin1,Img1,Img2,NavLink,NavbarLeft,NavbarMiddle,NavbarRight } from '../../styles/navbarstyle'
import cart from '../../assets/navbar/cart.png'
import NavbarDrawer from '../drawback/drawback'
import RegistrateComponent from '../../components/home/registrate'
import { Logged, Mail, Sign } from '../../styles/multicarousel'
import { Akar, Buttonwrapperpop, Log1, Log2, Log3, Logowrapper, Naver, Or, Talk } from '../../styles/indexpop'
import { Buttonin } from '../../styles/detailusedCar'
import Popup from 'reactjs-popup'


const Navbar = () => {
  return (
    <Container>
        <NavbarLeft>
          <Drawerin>
               <NavbarDrawer/>
          </Drawerin>
          <NavLink to="/camper"> 
               <Camper>Camper</Camper>
          </NavLink>
        </NavbarLeft>
        <NavbarMiddle >
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
          <Img1>
            <img src={cart} alt="cart" />
          </Img1>
          <Img2>
          <Popup
    trigger={<Buttonuser className="button"></Buttonuser>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="content">
        <Sign>  
          <p>Sign in</p>
        <label htmlFor="">Email</label>
          <Mail>
          <input type="email"  />
          </Mail>
        <label htmlFor="">Password</label>
          <Mail>
            <input type="text" />
          </Mail>
          <Logged>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Keep me logged in</label>
            </div>
            <div>
              <label>Forgot your password?</label>
            </div>
          </Logged>
       
          <Buttonwrapperpop>   
            <Buttonin style={{width:'434px',height:'50px'}}>SIGN IN</Buttonin>    
          </Buttonwrapperpop>
         <Or>
          <button></button>
          <h5>Or</h5>
          <button></button>
         </Or>
         <Logowrapper>
          <Naver><Log1></Log1></Naver>
          <Akar><Log2></Log2></Akar>
          <Talk><Log3></Log3></Talk>
         </Logowrapper>
         <Buttonwrapperpop>
                <div><RegistrateComponent/></div>
            </Buttonwrapperpop>
        </Sign>
        </div>
      </div>
    )}
   
  </Popup>
          </Img2>
            <p>En</p>
            <Drawerin1>
               <NavbarDrawer/>
          </Drawerin1>
        </NavbarRight>
    </Container>
  )
}

export default Navbar;