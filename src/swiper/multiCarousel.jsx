import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import car from '../assets/multicarousel/car.png'
import { Button, Buttonwrapper, Carouselin, Imgwrapper, Logged, Mail, Namewrapper, Recommend, Select, Sign } from '../styles/multicarousel';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import { Buttonin} from '../styles/detailusedCar';
import { Akar, Buttonwrapperpop, Log1, Log2, Log3, Logowrapper, Naver, Or, Talk } from '../styles/indexpop';
import RegistrateComponent from '../components/home/registrate';


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

const MultiCarousel = () => {
  return (
    <>
    <Recommend>
      <p>Recommend</p>
      <div></div>
    </Recommend>
    
    <Carousel responsive={responsive}>
    <Carouselin>
      <Imgwrapper><img src={car} alt="car1"/></Imgwrapper>
      <Namewrapper>
        <p>Name</p>
      </Namewrapper>
      <Buttonwrapper>
      <Popup
    trigger={<Button className="button"><p>Discover the range</p></Button>}
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
                <div><Link to="/registr">CREATE YOUR ACCOUNT</Link></div>
            </Buttonwrapperpop>
        </Sign>
        </div>
      </div>
    )}
   
  </Popup>
 
      </Buttonwrapper>
      <Select>
        <select>
          <option value="Model1">Choose a model</option>
          <option value="Model2">Choose a model</option>
          <option value="Model3">Choose a model</option>
          <option value="Model4">Choose a model</option>
        </select>
      </Select>
    </Carouselin>
    <Carouselin>
      <Imgwrapper><img src={car} alt="car1" /></Imgwrapper>
      <Namewrapper>
        <p>Name</p>
      </Namewrapper>
      <Buttonwrapper>
      <Popup
    trigger={<Button className="button"><p>Discover the range</p></Button>}
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
 
      </Buttonwrapper>
      <Select>
        <select>
          <option value="Model1">Choose a model</option>
          <option value="Model2">Choose a model</option>
          <option value="Model3">Choose a model</option>
          <option value="Model4">Choose a model</option>
        </select>
      </Select>
    </Carouselin>
    <Carouselin>
      <Imgwrapper><img src={car} alt="car1" /></Imgwrapper>
      <Namewrapper>
        <p>Name</p>
      </Namewrapper>
      <Buttonwrapper>
      <Popup
    trigger={<Button className="button"><p>Discover the range</p></Button>}
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
 
      </Buttonwrapper>
      <Select>
        <select>
          <option value="Model1">Choose a model</option>
          <option value="Model2">Choose a model</option>
          <option value="Model3">Choose a model</option>
          <option value="Model4">Choose a model</option>
        </select>
      </Select>
      </Carouselin>
    <Carouselin>
      <Imgwrapper><img src={car} alt="car1" /></Imgwrapper>
      <Namewrapper>
        <p>Name</p>
      </Namewrapper>
      <Buttonwrapper>
      <Popup
    trigger={<Button className="button"><p>Discover the range</p></Button>}
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
 
      </Buttonwrapper>
      <Select>
        <select>
          <option value="Model1">Choose a model</option>
          <option value="Model2">Choose a model</option>
          <option value="Model3">Choose a model</option>
          <option value="Model4">Choose a model</option>
        </select>
      </Select>
      </Carouselin>
    <Carouselin>
      <Imgwrapper><img src={car} alt="car1" /></Imgwrapper>
      <Namewrapper>
        <p>Name</p>
      </Namewrapper>
      <Buttonwrapper>
      <Popup
    trigger={<Button className="button"><p>Discover the range</p></Button>}
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
 
      </Buttonwrapper>
      <Select>
        <select>
          <option value="Model1">Choose a model</option>
          <option value="Model2">Choose a model</option>
          <option value="Model3">Choose a model</option>
          <option value="Model4">Choose a model</option>
        </select>
      </Select>
      </Carouselin>
    <Carouselin>
      <Imgwrapper><img src={car} alt="car1" /></Imgwrapper>
      <Namewrapper>
        <p>Name</p>
      </Namewrapper>
      <Buttonwrapper>
      <Popup
    trigger={<Button className="button"><p>Discover the range</p></Button>}
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
 
      </Buttonwrapper>
      <Select>
        <select>
          <option value="Model1">Choose a model</option>
          <option value="Model2">Choose a model</option>
          <option value="Model3">Choose a model</option>
          <option value="Model4">Choose a model</option>
        </select>
      </Select>
      </Carouselin>
  </Carousel>
  </>
  )
}

export default MultiCarousel