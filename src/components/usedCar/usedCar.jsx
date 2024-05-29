import React from 'react'
import { useState } from 'react'
import { Catalogwrapper, Container,
   Filtrwrapper, Wrapper,
   Cost,
 Line
  ,Column,
  Centerjust,
  Button1,
  Buttonwrapper1,
  CardContainer1,
  CardContainer1wrap,
  Compare,
  Itemwrapper,
  Itemleft,
  Itemright,
  Buttonwrapper2,
  Button2,
  Button3,
  Filtrin,
} from '../../styles/motorstyle';
import {  Bgwrapper3,} from '../../styles/navbarstyle';
import car from '../../assets/mockasset/car.jpeg';
import hMenu from '../../assets/motor/hMenu.png';
import vMenu from '../../assets/motor/vMenu.png';
import HMenu from '../usedCar/Hmenu';
import VMenu from '../usedCar/Vmenu';
import { usedCar } from '../../mock/mockdatausedcar';
import AccordionItemMotor from '../accordion/itemaccordion';
import AccordionItemCompany from '../accordion/accordioncom';
import AccordionItemLicense from '../accordion/accordionlisence';
import AccordionItemTravelers from '../accordion/accordiontraveler';
import AccordionItemLocation from '../accordion/accordionlocation';

const UsedCarComponent = () => 
    {const [active, setActive]=useState(true);
    const data = usedCar.maindata;
    const dataLength = data.length;
   
    function handleHMenu(){
      setActive(true);
    }
    function handleVMenu(){
      setActive(false);
    }
    
    return (
     <>
      <Container>
        <Bgwrapper3>
          <p>Home / Used Cars</p>
          <h5>Our ranges</h5>
          <h2>Used Cars</h2>
        </Bgwrapper3>
        <Wrapper>
          <Filtrwrapper>
            
            <Filtrin>
            <Cost>
              <Centerjust>
                <p>Cost of car</p> 
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
            <AccordionItemMotor/>
            <AccordionItemCompany/>
            <AccordionItemLicense/>
            <AccordionItemTravelers/>
            <AccordionItemLocation/>
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

export default UsedCarComponent;