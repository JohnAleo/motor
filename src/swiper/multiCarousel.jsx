import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import car from '../assets/multicarousel/car.png'
import { Button, Buttonwrapper, Carouselin, Imgwrapper, Namewrapper, Recommend, Select } from '../styles/multicarousel';



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
      <Button><p>Discover the range</p></Button>
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
      <Button><p>Discover the range</p></Button>
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
      <Button><p>Discover the range</p></Button>
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
      <Button><p>Discover the range</p></Button>
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
      <Button><p>Discover the range</p></Button>
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
        <Button><p>Discover the range</p></Button>
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