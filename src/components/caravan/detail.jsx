import React from 'react'
import { BgwrapperDetail, ButtonDetail } from '../../styles/navbarstyle';
import { Button, Buttonwrapper } from '../../styles/motorstyle';


const DetailCaravan = () => {
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

export default DetailCaravan;