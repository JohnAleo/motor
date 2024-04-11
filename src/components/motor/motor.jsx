import React from 'react'
import {  CardContainer, Carwrapper, Catalogwrapper, Container,
   Filtrwrapper, Wrapper,Button,Buttonwrapper } from '../../styles/motorstyle';
import { Bgwrapper } from '../../styles/navbarstyle';
import { campcar } from '../../mock/mockdata';


const MotorComponent = () => {
  const data = campcar.maindata;
  console.log("data:",campcar);
  
  return (
   
    <Container>
      <Bgwrapper>
        <p>Home / Motors</p>
        <h5>Our ranges</h5>
        <h2>Motors</h2>
      </Bgwrapper>
      <Wrapper>
        <Filtrwrapper></Filtrwrapper>
        <Catalogwrapper>
          <Carwrapper>
          {
            data.map((value,key) => {
              return(
                <CardContainer key={key}>
                  <img src={value.car.photo} alt="car-photo" />
                  <h4>{value.car.name || "no data"}</h4>
                  <p>{value.car.company || "no data"}</p> 
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
      </Wrapper>
    </Container>
  )
}

export default MotorComponent;