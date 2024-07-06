import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Popup from 'reactjs-popup';
import { Buttonin } from '../../styles/detailusedCar';
import { Logged, Mail, Registrbutton, Sign } from '../../styles/multicarousel';
import { Buttonwrapperpop, Registrwrapper } from '../../styles/indexpop';




const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const RegistrateComponent = () => {
  return (
    <Registrwrapper>
    <Popup
    trigger={<Buttonin className="button"> CREATE YOUR ACCOUNT </Buttonin>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
       
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

            <Buttonwrapperpop> 
              <Registrbutton>REGISTRATE</Registrbutton>   
            </Buttonwrapperpop>   
               
        </Sign>       
        </div>
        <div className="actions">
          
        </div>
      </div>
    )}
    
  </Popup>
  </Registrwrapper>
  )
}

export default RegistrateComponent;