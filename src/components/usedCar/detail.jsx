import React from 'react'
import { BgwrapperDetail, ButtonDetail } from '../../styles/navbarstyle'
import { Buttonwrapper } from '../../styles/motorstyle'
import { Introduction} from '../../styles/detailusedCar'
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
     
    </Introduction>
    </>
   )
}

export default DetailUsedCar