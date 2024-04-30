import React from 'react'
import { BgwrapperDetail, ButtonDetail } from '../../styles/navbarstyle'
import { Buttonwrapper } from '../../styles/motorstyle'
import {Aidal, Aidalwrapper, Imgwrapperused, Introduction} from '../../styles/detailusedCar'
import car17 from '../../assets/usedCar/car17.jpg'
const DetailUsedCar = () => {
  return (
    <>
    <BgwrapperDetail>
     <p>Aidal</p>
     <Buttonwrapper>
       <ButtonDetail>ADD TO CONTACT</ButtonDetail>
       <ButtonDetail>COMPARE</ButtonDetail>
     </Buttonwrapper>
    </BgwrapperDetail>
    <Introduction>
      <div>
        <Imgwrapperused>
          <img src={car17} alt="car17" />
        </Imgwrapperused>
        <Aidalwrapper>
          <Aidal>
            <h4>Aidal</h4>
            <p>aid</p>
          </Aidal>
          <h3>50.000$</h3>
        </Aidalwrapper>
        <button></button>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Introduction>
    </>
   )
}

export default DetailUsedCar