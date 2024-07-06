import React from 'react'
import {Inform, Signbutton, Signbuttonwrapper, Signtab } from '../../styles/premiumstyle';




const Question = () => {
  return (
    <form>
          <Signtab>
            <p>Have you got a question</p>
            <Inform>
                <input type="text" placeholder='Name' />
            </Inform>
            <Inform>
              <input type="email" placeholder='Email' />
            </Inform>
            <Inform $quest>
              <textarea type="text" placeholder='Your question' />
            </Inform>
            <Signbuttonwrapper>   
              <Signbutton>Send question</Signbutton>    
            </Signbuttonwrapper>
        
          </Signtab>
      </form>
  )
}

export default Question;