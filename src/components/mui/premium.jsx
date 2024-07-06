import React from 'react'
import { campcar } from '../../mock/mockdata';
import { Compwrapper, Item6, Item6left, Item6right,
   Item6wrapper, Photowrapper, Premiumin, Premiumleft,
    Premiumright, Premiumwrapper } from '../../styles/premiumstyle';



const Premium = () => {
    const data = campcar.maindata.slice(0,6);
    const dataLength = data.length;
    console.log("data:", data.length)
  return (
    <Premiumwrapper>
       <Premiumin>
            <Premiumleft>
                <h4>Premium review</h4>
                <p>{dataLength}</p>
            </Premiumleft>
            <Premiumright>
                <select >
                    <option >Best</option>
                    <option >Super</option>
                    <option >Optional</option>
                    <option >Optimal</option>
                    <option >Budget</option>
                    <option >Discount</option>
                </select>
            </Premiumright>
        </Premiumin>
          <Item6wrapper>
            {
              data.map((value,key) => {
                return(
             
            <Item6>
                <Item6left>
                  <Photowrapper><img src={value.car.photo || "no data"}  alt="carphoto" /></Photowrapper>
                  <Compwrapper>
                    <h4>{value.car.name}</h4>
                    <p>{value.car.company}</p>
                    <h5>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</h5>
                  </Compwrapper>
                </Item6left>
                <Item6right>
                  <div>
                    <p>ID:</p> <h4>{value.id}</h4>
                  </div>
                  <div>
                    <p>Date:</p> <h4>14.05.2024</h4>
                  </div>
                  <div>
                    <p>Viewed:</p> <h4>727</h4>
                  </div>
                </Item6right>
            </Item6>
            )
             })
            }
            </Item6wrapper>
          
    </Premiumwrapper>
  )
}

export default Premium;