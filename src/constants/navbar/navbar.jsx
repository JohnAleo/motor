import React from 'react'
import { Buttonuser, Camper, Container,Drawerin,Drawerin1,Enwrapper,Img2,NavLink,NavbarLeft,NavbarMiddle,NavbarRight } from '../../styles/navbarstyle'
import cart1 from '../../assets/navbar/cart1.svg'
import dropicon from '../../assets/navbar/drop-icon.svg'
import NavbarDrawer from '../drawback/drawback'
import RegistrateComponent from '../../components/home/registrate'
import { Logged, Mail, Registrbutton, Registrbuttonwrapper, Sign } from '../../styles/multicarousel'
import { Akar, Buttonwrapperpop, Log1, Log2, Log3, Logowrapper, Naver, Or, Talk } from '../../styles/indexpop'
import { Buttonin } from '../../styles/detailusedCar'
import Popup from 'reactjs-popup'
import { Badge } from '@mui/material'
import DrawerRight from '../drawback/drawerright'
import { Link } from 'react-router-dom'


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
                <p>Motor <img src={dropicon} alt="icon" style={{width:'12px',height:'12px'}}/></p>
           </NavLink>
           <NavLink to="/caravan">
                <p>Caravan <img src={dropicon} alt="icon" style={{width:'12px',height:'12px'}}/></p>
           </NavLink>
           <NavLink to="/tuning">
                <p>Tuning <img src={dropicon} alt="icon" style={{width:'12px',height:'12px'}}/></p>
           </NavLink>
           <NavLink to="used-car">
                <p> Used Car <img src={dropicon} alt="icon" style={{width:'12px',height:'12px'}}/></p>
           </NavLink>
           <NavLink to="camping-place">
                <p>Camping Place <img src={dropicon} alt="icon" style={{width:'12px',height:'12px'}}/></p>
           </NavLink>
        </NavbarMiddle>
        <NavbarRight>
          <Badge badgeContent={4} color="primary">
              <img src={cart1} alt="cart" style={{width:'28px',height:'28px'}}/>
          </Badge>
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
                                <Registrbuttonwrapper>
                                <Link to="/registr"
                                      style={{textDecorationLine:'none'}}>
                                    <Registrbutton>
                                        CREATE YOUR ACCOUNT
                                    </Registrbutton>
                                </Link>
                                </Registrbuttonwrapper>
                            </Sign>
                        </div>
                    </div>
                       )}
   
                 </Popup>
          </Img2>
          <Enwrapper>
              <p>En</p>
              <img src={dropicon} alt="icon"/>
          </Enwrapper>
            <Drawerin1>
               <DrawerRight/> 
            </Drawerin1>
        </NavbarRight>
    </Container>
  )
}

export default Navbar;