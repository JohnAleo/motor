import React from 'react'
import star from '../../assets/motor/star.png'
import { Button, Buttonwrapper, CardContainer, Carimg, Carwrapper, Centeralign, Ratewrapper } from '../../styles/motorstyle';
import { campcar } from '../../mock/mockdata';
const MenuH = () => {
    const data = campcar.maindata;
    const dataLength = data.length;
    console.log("data:", data.length);
  return (
    <Carwrapper>
          {
            data.map((value,key) => {
             
              return(
                <CardContainer key={key}>
                  <Carimg>
                    <img src={value.car.photo} alt="car-photo" width={200} height={140} />
                  </Carimg>
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
        </ Carwrapper>
  )
}

export default MenuH;