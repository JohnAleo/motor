import React, { useState } from 'react'
import {  CardContainer, Carwrapper, Catalogwrapper, Container,
   Filtrwrapper, Wrapper,Button,Buttonwrapper, 
   Cost,
   Brand,
   Company,
   License,
   Travelers,Line
  ,Column,Location,
  Imgwrapper,
  Centerjust,
  Centeralign,
  Button1,
  Buttonwrapper1,
  CardContainer1,
  CardContainer1wrap,
  Compare,
  Ratewrapper,
  Itemwrapper,
  Itemleft,
  Itemright,
  Buttonwrapper2,
  Button2,
  Button3,
  Carimg,
  Filtrin,
  Inputwrapper} from '../../styles/motorstyle';
import { Bgwrapper } from '../../styles/navbarstyle';
import { campcar } from '../../mock/mockdata';
import strelka from "../../assets/motor/strelka.png";
import car from '../../assets/mockasset/car.jpeg';
import star from '../../assets/motor/star.png';
import hMenu from '../../assets/motor/hMenu.png';
import vMenu from '../../assets/motor/vMenu.png';
import HMenu from './Hmenu';
import VMenu from './Vmenu';

const MotorComponent = () => {
  const [active, setActive]=useState(false);
  const data = campcar.maindata;
  const dataLength = data.length;
 
  function handleHMenu(){
    setActive(false);
  }
  function handleVMenu(){
    setActive(true);
  }
  
  return (
   <>
    <Container>
      <Bgwrapper>
        <p>Home / Motors</p>
        <h5>Our ranges</h5>
        <h2>Motors</h2>
      </Bgwrapper>
      <Wrapper>
        <Filtrwrapper>
          
          <Filtrin>
          <Cost>
            <Centerjust>
              <p>Cost of car</p> 
              <Imgwrapper><img src={strelka} alt="strelka" /></Imgwrapper>
            </Centerjust>
            <Line></Line>
            <div>
                <Column>
                    <label>from</label>
                    <input type="text" />
                </Column>
                <Column>
                    <label>to</label>
                    <input type="text" />
                </Column>
            </div>
        </Cost>
        <Brand>
          <Centerjust>
            <p>Brand</p> 
            <Imgwrapper><img src={strelka} alt="strelka" /></Imgwrapper>
          </Centerjust>
          <Line></Line>
          <Inputwrapper>
              <input type="checkbox" /><label>Aidal</label>
          </Inputwrapper>
          <Inputwrapper>
              <input type="checkbox" /><label>Knal</label>
          </Inputwrapper>
          <Inputwrapper>
              <input type="checkbox" /><label>Escape</label>
          </Inputwrapper>
        </Brand>
        <Company>
          <Centerjust>
            <p>Company</p> <Imgwrapper><img src={strelka} alt="strelka" /></Imgwrapper>
          </Centerjust>
          <Line></Line>
          <Inputwrapper>
              <input type="checkbox" /><label>Escape</label>
          </Inputwrapper>
          <Inputwrapper>
              <input type="checkbox" /><label>Aidal</label>
          </Inputwrapper>
        </Company>
        <License>
          <Centerjust>
              <p>Licensee</p> 
              <Imgwrapper><img src={strelka} alt="strelka" /></Imgwrapper>
          </Centerjust>
          <Line></Line>
          <Inputwrapper>
              <input type="checkbox" /><label>1 year</label>
          </Inputwrapper>
          <Inputwrapper>
              <input type="checkbox" /><label>2 years</label>
          </Inputwrapper>
          <Inputwrapper>
              <input type="checkbox" /><label>1.5 years</label>
          </Inputwrapper>
        </License>
        <Travelers>
          <Centerjust>
              <p>Number of travelers</p> 
              <Imgwrapper><img src={strelka} alt="strelka" /></Imgwrapper>
          </Centerjust>
          <Line></Line>
          <Inputwrapper>
              <input type="checkbox" /><label>2</label>
          </Inputwrapper>
          <Inputwrapper>
              <input type="checkbox" /><label>3-4</label>
          </Inputwrapper>
          <Inputwrapper>
                <input type="checkbox" /><label>5+</label>
          </Inputwrapper>
        </Travelers>
        <Location>
          <Centerjust>
              <p>Location</p> 
              <Imgwrapper><img src={strelka} alt="strelka" /></Imgwrapper>
              </Centerjust>
          <Line></Line>
          <Inputwrapper>
              <input type="checkbox" /><label>Seoul</label>
          </Inputwrapper>
          <Inputwrapper>
              <input type="checkbox" /><label>Korea</label>
          </Inputwrapper>
          <Inputwrapper>
              <input type="checkbox" /><label>Busan</label>
          </Inputwrapper>
        </Location>
            <Buttonwrapper1>
              <Button1>Cancel</Button1>
              <Button1 $search>Search</Button1>
            </Buttonwrapper1>
            <Compare>
              <p>Compare</p>
              <CardContainer1wrap>
                <CardContainer1> <img src={car} alt="car" /></CardContainer1>
                <CardContainer1> <img src={car} alt="car" /></CardContainer1>
                <CardContainer1> <img src={car} alt="car" /></CardContainer1>
                </CardContainer1wrap>
            </Compare>
          </Filtrin>
        </Filtrwrapper>
        <Catalogwrapper>
          <Itemwrapper>
            <Itemleft>
              <p>Item </p> 
              <h5>{dataLength}</h5> 
            </Itemleft>
            <Itemright>
              <p>Sort by</p>
              <input type="text" placeholder='select' />
              <input type="number" placeholder='60' style={{width:'60px'}}/>
              <Buttonwrapper2>
                <Button2 onClick={handleHMenu}><img src={hMenu} alt="menu-H" /></Button2>
                <Button3 onClick={handleVMenu}><img src={vMenu} alt="menu-V" /></Button3>
              </Buttonwrapper2>
            </Itemright>
          </Itemwrapper>
          <>
          {
            active ? <HMenu />: <VMenu />
          }
           </> 
          
        </Catalogwrapper>
      </Wrapper>
    </Container>
   
     </>
  )
}

export default MotorComponent;