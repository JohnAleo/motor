import React from 'react'
import { Buttoninq, Gmail, Have, Name, Quest, Questbutton, Questionwrapper } from '../../styles/premiumstyle';



const Question = () => {
  return (
    <Questionwrapper>
        <Have>
          <h4>Have you got a question</h4>
        </Have>
        <Name ><input type="text" placeholder='Your name' /></Name>
        <Gmail><input type="text" placeholder='Your email' /> </Gmail>
        <Quest><input type="text" placeholder='Your question' /></Quest>
        <Questbutton>
                <Buttoninq style={{width:'181px',height:'50px'}}>Send questions</Buttoninq>
        </Questbutton>
    </Questionwrapper>
  )
}

export default Question;