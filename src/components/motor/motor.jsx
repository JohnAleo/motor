import React from 'react'
import {  CardContainer, Carwrapper, Catalogwrapper, Container,
   Filtrwrapper, Wrapper,Button,Buttonwrapper, 
   Filtrdown,
   Catalogup,
   Cost,
   Brand,
   Company,
   License,
   Travelers,Line
  ,Column,Location,
  Columnwrapper,
  Imgwrapper,
  Centerjust,
  Centeralign,
  Button1,
  Buttonwrapper1,
  CardContainer1,
  CardContainer1wrap,
  Compare,
  Center,
  Ratewrapper} from '../../styles/motorstyle';
import { Bgwrapper } from '../../styles/navbarstyle';
import { campcar } from '../../mock/mockdata';
import strelka from "../../assets/motor/strelka.png"
import car from '../../assets/mockasset/car.jpeg'
import { Footer } from '../../constants/footer/footerstyle';
import star from '../../assets/motor/star.png'

const MotorComponent = () => {
  const data = campcar.maindata;
  console.log("data:",campcar);
  
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
          
          <Filtrdown>
              <Cost>
                <Columnwrapper>
                  <p>Cost of car</p> 
                  <Imgwrapper> <img src={strelka} alt="strelka" /></Imgwrapper>
                </Columnwrapper>
                <Line></Line>
                <Columnwrapper>
                  <Column>
                      <label>from</label>
                      <input type="text" />
                  </Column>
                  <Column>
                      <label>to</label>
                      <input type="text" />
                  </Column>
                </Columnwrapper>
            </Cost>
            <Brand>
              <Columnwrapper> 
                <p>Brand</p> 
                <Imgwrapper> <img src={strelka} alt="strelka" /></Imgwrapper>
              </Columnwrapper>  
              <Line></Line>
              <div>
                  <input type="checkbox" /><label>Aidal</label>
              </div>
              <div>
                  <input type="checkbox" /><label>Knal</label>
              </div>
              <div>
                  <input type="checkbox" /><label>Escape</label>
              </div>
        </Brand>
        <Company>
          <Columnwrapper>
            <p>Company</p>
            <Imgwrapper> <img src={strelka} alt="strelka" /></Imgwrapper>
          </Columnwrapper>
          <Line></Line>
            <div>
                <input type="checkbox" /><label>Escape</label>
            </div>
            <div>
                <input type="checkbox" /><label>Aidal</label>
            </div>
        </Company>
        <License>
          <Columnwrapper>
              <p>License</p>
              <Imgwrapper> <img src={strelka} alt="strelka" /></Imgwrapper>
          </Columnwrapper>
          <Line></Line>
            <div>
                <input type="checkbox" /><label>1 year</label>
            </div>
            <div>
                <input type="checkbox" /><label>2 years</label>
            </div>
            <div>
                <input type="checkbox" /><label>1.5 years</label>
            </div>
        </License>
        <Travelers>
          <Columnwrapper>
                <p>Number of travelers</p>
                <Imgwrapper> <img src={strelka} alt="strelka" /></Imgwrapper>
          </Columnwrapper>
          <Line></Line>
            <div>
                <input type="checkbox" /> <label>2</label>
            </div>
            <div>
                <input type="checkbox" /><label>3-4</label>
            </div>
            <div>
                  <input type="checkbox" /><label>5+</label>
            </div>
        </Travelers>
        <Location>
          <Columnwrapper>
            <p>Location</p>
            <Imgwrapper> <img src={strelka} alt="strelka" /></Imgwrapper>
          </Columnwrapper>  
          <Line></Line>

            <div><Centerjust><input type="checkbox" /></Centerjust><label>Seoul</label></div>
            
            <div>
                <input type="checkbox" /><label>Korea</label>
            </div>
            <div>
                <input type="checkbox" /><label>Busan</label>
            </div>
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
          </Filtrdown>
        </Filtrwrapper>
        <Catalogwrapper>
          <Catalogup>
            <p></p>
          </Catalogup>  
          <Carwrapper>
          {
            data.map((value,key) => {
              return(
                <CardContainer key={key}>
                  <img src={value.car.photo} alt="car-photo" />
                  <h4>{value.car.name || "no data"}</h4>
                  <Centeralign>
                      <div><p>{value.car.company || "no data"}</p></div> 
                      <Ratewrapper><img src={star} alt="star" /> <p>{value.car.rate || "no data"}</p></Ratewrapper>
                  </Centeralign>
                  <h3>{value.car.cost || "no data"}</h3>
                  <Buttonwrapper>
                    <Button>Order</Button>
                    <Button>Compare</Button>
                  </Buttonwrapper>
                </CardContainer>
              )
            })
          }
        </Carwrapper>
        </Catalogwrapper>
        <Footer /> 
      </Wrapper>
    </Container>
    
     </>
  )
}

export default MotorComponent;