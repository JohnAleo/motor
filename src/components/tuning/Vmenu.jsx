import React from 'react'
import { Button, Buttonwrapper, CardContainer, Cardwrapper, Carimg, Centeralign, Inforwrapper, Ratewrapper, Vmenustyle, Vmenuwrapper } from '../../styles/motorstyle';
import star from '../../assets/motor/star.png'
import { tuning } from '../../mock/mockdatatuning';
import { Link } from 'react-router-dom';
const VMenu = () => {
    const data = tuning.maindata;
    const dataLength = data.length;
    console.log("data:", data.length);
  return (
    <Cardwrapper $Vmenu >
    {
      data.map((value,key) => {
       
        return(
          <>
          <Link to={`${value.id}`} style={{textDecoration:'none'}} >
          <CardContainer key={key} $Vmenu>
            <Carimg $Vmenu>
            <img src={value.car.photo} alt="car-photo" style={{width:'100%',height:'160px'}} />
            </Carimg>
            <Inforwrapper $Vmenu>
              <Centeralign $Vmenu>
              <h4 style={{width:'100%',maxWidth:'150px'}}>{value.car.name || "no data"}</h4>
              <h3 style={{width:'100%',maxWidth:'150px'}}>{value.car.cost || "no data"}</h3>
              </Centeralign>
              <Centeralign>
                  <div style={{width:'100%',maxWidth:'150px'}}><p>{value.car.company || "no data"}</p></div> 
                  <Ratewrapper><img src={star} alt="star" /> <p>{value.car.rate || "no data"}</p></Ratewrapper>
              </Centeralign>
              
              <Buttonwrapper $Vmenu>
                <Button $Vmenu> Order</Button>
                <Button $Vmenu>Compare</Button>
              </Buttonwrapper>
            </Inforwrapper>
            
          </CardContainer>
          </Link>
          </>
        )
      })
    }
 
  </Cardwrapper>
  )
}

export default VMenu;