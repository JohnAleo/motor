import React from 'react'
import { BgwrapperDetail, ButtonDetail } from '../../styles/navbarstyle';
import { Buttonwrapper } from '../../styles/motorstyle';
import { useParams } from 'react-router-dom';
import { campcar } from '../../mock/mockdata';
import { Aidalin, Aidalwrapper, Comfort, Comfortwrapper, Companywrapper, Costwrapper, Detail, Detailin1, Imgwrapperaid, Line1, Lisencewrapper, Namewrapper, Peoplewrapper, Resultwrapper } from '../../styles/detailusedCar';



const DetailMotor = () => {
  const {id}= useParams();
  //console.log(campcar);
  //console.log(parseInt(id));
  const resultdata = campcar.maindata.find(
    (value) => value.id===parseInt(id))
  console.log(resultdata);
  return(
    <>
    <BgwrapperDetail>
     <Resultwrapper>{resultdata.car.name}</Resultwrapper>
     <Buttonwrapper>
       <ButtonDetail>ADD TO CONTACT</ButtonDetail>
       <ButtonDetail>COMPARE</ButtonDetail>
     </Buttonwrapper>
    </BgwrapperDetail>

    <Detail>
      <Detailin1>
      <Imgwrapperaid>{resultdata.photo}</Imgwrapperaid>
      <Aidalwrapper>
        <Aidalin>
          <Costwrapper>
            <Namewrapper>
              <h1>{resultdata.car.name}</h1> <p>Aid</p>
            </Namewrapper>
            <h1>{resultdata.car.cost}</h1>
          </Costwrapper>
          <Line1></Line1>
          <Companywrapper>
            <p>Company</p> <h3>{resultdata.car.company}</h3>
          </Companywrapper>
          <Peoplewrapper>
            <p>People</p> <h3>{resultdata.car.people}</h3>
          </Peoplewrapper>
          <Lisencewrapper>
            <p>Lysence</p> <h3>{resultdata.car.license}</h3>
            </Lisencewrapper>
        </Aidalin>
        <Line1></Line1>
      </Aidalwrapper>
      </Detailin1>
      <Comfortwrapper>
        <Imgwrapperaid></Imgwrapperaid>
        <Comfort></Comfort>
      </Comfortwrapper>
    </Detail>
    </>
  )  
}

export default DetailMotor;







 

