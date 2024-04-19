import React from 'react'
import { Button, Buttonwrapper, CardContainer, Carimg, Carwrapper, Centeralign, Inforwrapper, Ratewrapper } from '../../styles/motorstyle';
import star from '../../assets/motor/star.png'
import { campcar } from '../../mock/mockdata';
const VMenu = () => {
    const data = campcar.maindata;
    const dataLength = data.length;
    console.log("data:", data.length);
  return (
    <>
    <div>Vmenu</div>
    <>
          {
            data.map((value,key) => {
             
              return(
                <CardContainer key={key} $Vmenu>
                  <Carimg $Vmenu>
                    <img src={value.car.photo} alt="car-photo" width={200} height={140} />
                  </Carimg>
                  <Inforwrapper $Vmenu>
                    <Centeralign>
                    <h4>{value.car.name || "no data"}</h4>
                    <h3>{value.car.cost || "no data"}</h3>
                    </Centeralign>
                    <Centeralign>
                        <div><p>{value.car.company || "no data"}</p></div> 
                        <Ratewrapper><img src={star} alt="star" /> <p>{value.car.rate || "no data"}</p></Ratewrapper>
                    </Centeralign>
                    
                    <Buttonwrapper $Vmenu>
                      <Button $Vmenu> Order</Button>
                      <Button $Vmenu>Compare</Button>
                    </Buttonwrapper>
                  </Inforwrapper>
                  
                </CardContainer>
              )
            })
          }
        </ >
        </>
  )
}

export default VMenu;