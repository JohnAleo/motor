import React, { useState } from 'react'
import { Catalogwrapper, Container,
   Filtrwrapper, Wrapper,
   Cost,Line
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
  Item,
  Drawerwrapper,
  Imgwrapper,
  Iwrapper,
  Sortwrapper} from '../../styles/motorstyle';
import { Bgwrapper } from '../../styles/navbarstyle';
import { campcar } from '../../mock/mockdata';
import car from '../../assets/mockasset/car.jpeg';
import hMenu from '../../assets/motor/hMenu.png';
import vMenu from '../../assets/motor/vMenu.png';
import HMenu from './Hmenu';
import VMenu from './Vmenu';
import AccordionItemMotor from '../accordion/itemaccordion';
import AccordionItemCompany from '../accordion/accordioncom';
import AccordionItemLicense from '../accordion/accordionlisence';
import AccordionItemTravelers from '../accordion/accordiontraveler';
import AccordionItemLocation from '../accordion/accordionlocation';
import ItemDrawer from '../../constants/drawback/drawbackitem';

const MotorComponent = () => {
  const [active, setActive]=useState(true);
  const data = campcar.maindata;
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
              <Iwrapper >
                <div>
                  <ItemDrawer/>
                </div>
                <Item>  
                  <p>Item </p> 
                  <h5>{dataLength}</h5> 
                </Item>
              </Iwrapper>
              <Sortwrapper>
                <p>Sort by</p>
                <input type="text" placeholder='select' />
              </Sortwrapper>
              </Itemleft>
              <Itemright>
              <input type="number" placeholder='60' style={{width:'82px'}}/>
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