import React from 'react'
import {Routes,Route } from 'react-router-dom';
import Navbar from './constants/navbar/navbar';
import HomeComponent from './components/home/home'
import MotorComponent from './components/motor/motor';
import CaravanComponent from './components/caravan/caravan';
import TuningComponent from './components/tuning/tuning';
import UsedCarComponent from './components/usedCar/usedCar';
import CampingComponent from './components/campingPlace/camping';
import Footer from './constants/footer/footer';
import DetailMotor from './components/motor/detail';
import DetailCaravan from './components/caravan/detail';
import DetailTuning from './components/tuning/detail';
import DetailUsedCar from './components/usedCar/detail';
import DetailCamping from './components/campingPlace/detailcamping';
import Registr from './components/home/registr';
import DisplayNavbar from './components/home/navbarregistr';
import DisplayFooter from './components/home/footerregistr';
import ScrollToTop from './constants/navbar/scrolltotop';

export const RouterComponent = () => {
  return (
    <>
    <DisplayNavbar>
        <Navbar />
    </DisplayNavbar>
    <ScrollToTop />
    <Routes>
        <Route path="/" element= {<HomeComponent />} ></Route>
        <Route path="/camper" element= {<HomeComponent />} ></Route>
        <Route path="/motor" element= {<MotorComponent />}></Route>
        <Route path="/caravan" element= {<CaravanComponent />}></Route>
        <Route path="/tuning" element= {<TuningComponent />}></Route>    
        <Route path="/used-car" element= {<UsedCarComponent />}></Route>
        <Route path="/camping-place" element= {<CampingComponent />}></Route>
        <Route path="/motor/:id" element ={<DetailMotor />}></Route>
        <Route path='/caravan/:id' element={<DetailCaravan />}></Route>
        <Route path='/tuning/:id' element={<DetailTuning />}></Route>
        <Route path='/used-car/:id' element={<DetailUsedCar/>}></Route>
        <Route path='/camping-place/:id' element={<DetailCamping/>}></Route>
        <Route path='/registr' element={<Registr/>} ></Route> 
    </Routes>
    <DisplayFooter>
      <Footer/>
    </DisplayFooter>
   
    </>
  )
}
export default RouterComponent;