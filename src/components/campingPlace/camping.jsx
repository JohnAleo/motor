import React from 'react';
import CampingMenu from '../campingPlace/campingmenu'
import { Campingwrapper, Camping } from '../../styles/campingstyle';

const CampingComponent = () => {
  return (
    <Campingwrapper>
      <Camping>
        <p>Home / Camping place</p>
        <h2>Camping places</h2>
      </Camping>
      <CampingMenu />
    </Campingwrapper>
  )
};

export default CampingComponent;