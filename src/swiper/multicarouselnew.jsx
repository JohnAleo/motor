import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Buttonwrapper, Carouselin, 
    Carouselwrapper, 
    Imgwrapper, Logged, Mail, Namewrapper,
     Recommend, Registrbutton, Registrbuttonwrapper,
      Select, Sign } from '../styles/multicarousel';
import Popup from 'reactjs-popup';
import { Link, useParams } from 'react-router-dom';
import { Buttonin} from '../styles/detailusedCar';
import { Akar, Buttonwrapperpop, Log1, Log2, Log3, Logowrapper, Naver, Or, Talk } from '../styles/indexpop';
import { campcar } from '../mock/mockdata';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MultiCarouselNew = () => {
 
    const data = campcar.maindata;
    console.log("camp carausel data:", data)

  return (
    <>
    <Recommend>
      <p>Recommend</p>
      <div></div>
    </Recommend>
    
    <Carousel showDots={false}
arrows={false}
responsive={responsive}
infinite
autoPlay
autoPlaySpeed={2000}
transitionDuration={2000}
containerClass="carousel-container"
removeArrowOnDeviceType={["tablet", "mobile"]}
> 
{data.map((value,key)=> {
    return(
    <Carouselin key={key}>
      <Imgwrapper><img src={value.car.photo} alt="car1" /></Imgwrapper>
      <Namewrapper>
        <p>{value.car.name}</p>
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
    )
    }
    )}
  </Carousel>
  
  </>
  );
}

export default MultiCarouselNew