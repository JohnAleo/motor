import React from 'react'
import star from '../../assets/motor/star.png'
import { Button, Buttonwrapper, CardContainer, Carimg, Carwrapper, Centeralign, Ratewrapper, Wholewrapper } from '../../styles/motorstyle';
import { campcar } from '../../mock/mockdata';
import { Link } from 'react-router-dom';
const HMenu = ({exportedData}) => {
    const data = campcar.maindata;
    const dataLength = data.length;
    console.log("data:", data.length);
  return (
    <Wholewrapper>
    <Carwrapper >
          { 
            exportedData.map((value,key) => {
              return(
                <Link to= {`${value.id}`} style={{textDecoration:'none'}}>
                <CardContainer key={key} >
                  <Carimg>
                    <img src={value.car.photo} alt="car-photo" style={{width:'100%',height:'140px'}}/>
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
                </Link>
              )
            })
          }
        </ Carwrapper>
        </Wholewrapper>
  )
}

export default HMenu;