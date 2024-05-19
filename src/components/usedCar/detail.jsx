import React from 'react'
import { Bgwrapper3, ButtonDetail } from '../../styles/navbarstyle';
import { Buttonwrapper,} from '../../styles/motorstyle';
import { useParams } from 'react-router-dom';
import { Aidal, Aidalin, Aidalinleft,
   Aidalright, Aidalwrapper, Awrapper, 
   Buttonin, Buttwrapper, Comfort, 
   Comfortwrapper, Easy, Easywrapper, 
   Heating, Heatingwrapper, Imagewrapper, Imgwrapper1,
    Introduction, Line1, Namewrapper,
     Resultwrapper, Tidy, Tidywrapper, 
     Ventil, Ventilwrapper } from '../../styles/detailusedCar';
import { usedCar } from '../../mock/mockdatausedcar'
import BasicTabsUsed from '../usedCar/tab';
const DetailUsedCar = () => {
  const {id}= useParams();
  //console.log(campcar);
  //console.log(parseInt(id));
  const resultdata = usedCar.maindata.find(
    (value) => value.id===parseInt(id))
  console.log(resultdata);
  return (
    <>
    <Bgwrapper3>
     <Resultwrapper>{resultdata.car.name}</Resultwrapper>
     <Buttonwrapper>
       <ButtonDetail>ADD TO CONTACT</ButtonDetail>
       <ButtonDetail>COMPARE</ButtonDetail>
     </Buttonwrapper>
    </Bgwrapper3>
    
      <Aidalwrapper>
        <Imagewrapper>
          <img src={resultdata.car.photo} alt="basic" />
        </Imagewrapper>
        <Aidal>
          <Aidalin>
            <Namewrapper>
              <h3>{resultdata.car.name}</h3>
              <p>Aid</p>
            </Namewrapper>
            <h4>{resultdata.car.cost}</h4>
          </Aidalin>
          <Line1></Line1>
          <Awrapper>
              <Aidalinleft>
                <p>License type</p>
                <p>People</p>
                <p>Company</p>
              </Aidalinleft>
              <Aidalright>
                <h4>{resultdata.car.company}</h4>
                <h4>{resultdata.car.people}</h4>
                <h4>{resultdata.car.license}</h4>
              </Aidalright>
          </Awrapper>
        </Aidal>
      </Aidalwrapper>
    <Introduction>
      <Comfortwrapper>
        <div>
        <Comfort>
          <p>Comfort</p>
          <div>{resultdata.car.word}</div>
        </Comfort>
        <Imgwrapper1><img src={resultdata.photo1} alt="comfort" style={{width:'683px',height:'477px',flexShrink:'0'}} /></Imgwrapper1>
        </div>
      </Comfortwrapper>
      <Tidywrapper>
        <div>
        <Imgwrapper1 $left><img src={resultdata.photo2} alt="tidy" style={{width:'683px',height:'477px',flexShrink:'0'}} /></Imgwrapper1>
        <Tidy>
          <p>Tidying away is child’s play!</p>
          <div>{resultdata.car.word1}</div>
        </Tidy>
        </div>
      </Tidywrapper>
      <Ventilwrapper>
        <div>
          <Ventil>
            <p>Ventilated , Lit up</p>
            <div>{resultdata.car.word2}</div>
          </Ventil>
          <Imgwrapper1><img src={resultdata.photo3} alt="vintil" style={{width:'683px',height:'477px',flexShrink:'0'}} /></Imgwrapper1>
        </div>
      </Ventilwrapper>
      <Easywrapper>
        <div>
          <Imgwrapper1><img src={resultdata.photo4} alt="easy"  style={{width:'683px',height:'477px',flexShrink:'0'}}/></Imgwrapper1>
          <Easy>
            <p>Easy access</p>
            <div>{resultdata.car.word3}</div>
          </Easy>
        </div>
      </Easywrapper>
      <Heatingwrapper>
        <div>
          <Heating>
            <p>Heating when driving</p>
            <h4>{resultdata.car.word4}</h4>
            <Buttwrapper>
                <Buttonin style={{width:'181px',height:'50px'}}>ADD TO CONTACT</Buttonin>
                <Buttonin style={{width:'181px',height:'50px'}}>COMPARE</Buttonin>
            </Buttwrapper>
          </Heating>
          <Imgwrapper1><img src={resultdata.photo5} alt="heating" style={{width:'683px',height:'477px',flexShrink:'0'}}/></Imgwrapper1>
        </div>
      </Heatingwrapper>
      <BasicTabsUsed />
    </Introduction>
    </>
   )
}

export default DetailUsedCar;