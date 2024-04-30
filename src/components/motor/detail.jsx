import React from 'react'
import { BgwrapperDetail, ButtonDetail } from '../../styles/navbarstyle';
import { Buttonwrapper } from '../../styles/motorstyle';

const DetailMotor = () => {
  return (
    <>
    <BgwrapperDetail>
     <p>Aidal</p>
     <Buttonwrapper>
       <ButtonDetail>ADD TO CONTACT</ButtonDetail>
       <ButtonDetail>COMPARE</ButtonDetail>
     </Buttonwrapper>
    </BgwrapperDetail>
    </>
   )
}

export default DetailMotor;