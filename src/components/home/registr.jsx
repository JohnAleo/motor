import React from 'react'
import { Logged, Mail, RegistrComponent, Sign } from '../../styles/multicarousel'
import { Buttonwrapperpop } from '../../styles/indexpop'
import { Buttonin } from '../../styles/detailusedCar'
import { Link } from 'react-router-dom'

const Registr = () => {
  return (
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
    <Link to="/camper">
      <Buttonwrapperpop>   
        <Buttonin style={{width:'434px',height:'50px'}}>REGISTRATE</Buttonin>    
      </Buttonwrapperpop> 
    </Link>     
  </Sign>     
  </RegistrComponent>
  )
}

export default Registr