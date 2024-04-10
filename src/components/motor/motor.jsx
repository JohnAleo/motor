import React from 'react'
import {  Catalogwrapper, Container, Filtrwrapper, Wrapper } from '../../styles/motorstyle';
import { Bgwrapper } from '../../styles/navbarstyle';
import { campcar } from '../../mock/mockdata';


const MotorComponent = () => {
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
        <Catalogwrapper></Catalogwrapper>
      </Wrapper>
    </Container>
  )
}

export default MotorComponent;