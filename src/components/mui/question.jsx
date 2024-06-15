import React from 'react'
import {Inform, Signtab } from '../../styles/premiumstyle';
import { Buttonwrapperpop } from '../../styles/indexpop';
import { Buttonin } from '../../styles/detailusedCar';



const Question = () => {
  return (
    <form>
          <Signtab>
            <p>Have you got a question</p>
            <label htmlFor="">Your name</label>
            <Inform>
                <input type="text" placeholder='Name' />
            </Inform>
            <label htmlFor="">Your email</label>
            <Inform>
              <input type="email" placeholder='Email' />
            </Inform>
            <label htmlFor="">Your question</label>
            <Inform $quest>
              <textarea type="text" placeholder='Your question' />
            </Inform>
            <Buttonwrapperpop>   
              <Buttonin style={{width:'390px',height:'50px'}}>Send question</Buttonin>    
            </Buttonwrapperpop>
        
          </Signtab>
      </form>
  )
}

export default Question;