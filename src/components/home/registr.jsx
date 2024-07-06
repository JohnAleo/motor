import React from 'react'
import { Logged, Mail, RegistrComponent, Registrbutton, Registrbuttonwrapper, Sign } from '../../styles/multicarousel'
import { Link } from 'react-router-dom'
import AnimatedBg from "react-animated-bg";

// by default delay = 0 and duration = 0.2s
const Registr = () => (

    <RegistrComponent>
    <Sign>
    <p>Sign in</p>
  <label htmlFor="">Email</label>
    <Mail>
    <input type="email"  />
    </Mail>
  <label htmlFor="">Password</label>
    <Mail>
      <input type="text"  />
    </Mail>
    <label htmlFor="">Repeat your password</label>
    <Mail>
      <input type="text" />
    </Mail>
    <Logged $logged1>
      <div>
        <input type="checkbox" />
        <label htmlFor="">Keep me logged in</label>
      </div>
    </Logged>
    <Link to="/camper" style={{textDecorationLine:'none'}}>
      <Registrbuttonwrapper>   
        <Registrbutton>REGISTRATE</Registrbutton>    
      </Registrbuttonwrapper> 
    </Link>     
  </Sign>     
  </RegistrComponent>

 
);
export default Registr