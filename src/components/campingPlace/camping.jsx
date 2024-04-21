import React from 'react';
import camp11 from '../../assets/camping-place/camp11.png';
import camp12 from '../../assets/camping-place/camp12.png';
import camp13 from '../../assets/camping-place/camp13.png';

import { Campingwrapper, Camping,Campingcatalog, Campcat } from '../../styles/campingstyle';
const CampingComponent = () => {
  return (
    <Campingwrapper>
      <Camping>
        <p>Home / Camping place</p>
        <h2>Camping places</h2>
      </Camping>
      <Campingcatalog>
          <Campcat>
            <img src={camp11} alt="camp11" />
            <h5>Camping place name</h5>
            <p>Location</p>
          </Campcat>
          <Campcat>
            <img src={camp12} alt="camp12" />
            <h5>Camping place name</h5>
            <p>Location</p>
          </Campcat>
          <Campcat>
            <img src={camp13} alt="camp13" />
            <h5>Camping place name</h5>
            <p>Location</p>
          </Campcat>
          <Campcat>
            <img src={camp11} alt="camp11" />
            <h5>Camping place name</h5>
            <p>Location</p>
          </Campcat>
          <Campcat>
            <img src={camp12} alt="camp12" />
            <h5>Camping place name</h5>
            <p>Location</p>
          </Campcat>
          <Campcat>
            <img src={camp13} alt="camp13" />
            <h5>Camping place name</h5>
            <p>Location</p>
          </Campcat>
          <Campcat>
            <img src={camp11} alt="camp11" />
            <h5>Camping place name</h5>
            <p>Location</p>
          </Campcat>
          <Campcat>
            <img src={camp12} alt="camp12" />
            <h5>Camping place name</h5>
            <p>Location</p>
          </Campcat>
          <Campcat>
            <img src={camp13} alt="camp13" />
            <h5>Camping place name</h5>
            <p>Location</p>
          </Campcat>
          <Campcat>
            <img src={camp11} alt="camp11" />
            <h5>Camping place name</h5>
            <p>Location</p>
          </Campcat>
          <Campcat>
            <img src={camp12} alt="camp12" />
            <h5>Camping place name</h5>
            <p>Location</p>
          </Campcat>
          <Campcat>
            <img src={camp13} alt="camp13" />
            <h5>Camping place name</h5>
            <p>Location</p>
            </Campcat>
      </Campingcatalog>
    </Campingwrapper>
  )
}

export default CampingComponent;