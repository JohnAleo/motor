import React from 'react'
import { Aidal, Aidalin, Aidalinleft, Aidalright,
     Awrapper,  Buttonin1,  
     Buttwrapper1, 
     Line1, Namewrapper, ResponseButton,
      Responseimg, Responsewrapper, Responsivewrapper,
       Responsivewrappertext, Textwrapper } from '../../styles/detailusedCar'
import { useParams } from 'react-router-dom';
import { caravan } from '../../mock/mockdatacaravan';

const DetailResponse = () => {
    const {id}= useParams();
    //console.log(campcar);
    //console.log(parseInt(id));
    const resultdata = caravan.maindata.find(
      (value) => value.id===parseInt(id))
    console.log(resultdata);
  return (
   <>
   <Responsewrapper>
        <Responseimg>
          <img src={resultdata.car.photo} alt="basic" style={{width: '100%',height: '477px'}} />
        </Responseimg>
        <Responsivewrapper>
        <Aidal>
          <Aidalin>
            <Namewrapper>
              <h3>{resultdata.car.name}</h3>
              <p>Aid</p>
            </Namewrapper>
            <h4>{resultdata.car.cost}</h4>
          </Aidalin>
          <Line1><div></div></Line1>
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
        </Responsivewrapper>
        <Responseimg>
            <img src={resultdata.photo1} alt="comfort" style={{width:'100%',maxWidth:'1100px'}}/>
        </Responseimg>
        <Textwrapper>
            <Responsivewrappertext>
                <p style={{width:'100%',maxWidth:'1100px'}}>Comfort</p> 
                <div style={{width:'100%',maxWidth:'1100px'}}>{resultdata.car.word}</div>
            </Responsivewrappertext>
        </Textwrapper>
        <Responseimg>
            <img src={resultdata.photo2} alt="tidy" style={{width:'100%',maxWidth:'1100px'}}/>
        </Responseimg>
        <Textwrapper>
            <Responsivewrappertext>
                <p style={{width:'100%',maxWidth:'1100px'}}>Tidying away is child’s play!</p>
                <div style={{width:'100%',maxWidth:'1100px'}}>{resultdata.car.word1}</div>
            </Responsivewrappertext>
        </Textwrapper>
        <Responseimg>
            <img src={resultdata.photo3} alt="vintil" style={{width:'100%',maxWidth:'1100px'}}/>
        </Responseimg>
        <Textwrapper>
            <Responsivewrappertext>
                <p style={{width:'100%',maxWidth:'1100px'}}>Ventilated , Lit up</p>
                <div style={{width:'100%',maxWidth:'1100px'}}>{resultdata.car.word2}</div>
            </Responsivewrappertext>
        </Textwrapper>
        <Responseimg>
            <img src={resultdata.photo4} alt="easy" style={{width:'100%',maxWidth:'1100px'}}/>
        </Responseimg>
        <Textwrapper>
            <Responsivewrappertext>
                <p style={{width:'100%',maxWidth:'1100px'}}>Easy access</p>
                <div style={{width:'100%',maxWidth:'1100px'}}>{resultdata.car.word3}</div>
            </Responsivewrappertext>
        </Textwrapper>
        <Responseimg>
            <img src={resultdata.photo5} alt="" style={{width:'100%',maxWidth:'1100px'}}/> 
        </Responseimg>
        <Textwrapper>
            <Responsivewrappertext >
                <p style={{width:'100%',maxWidth:'1100px'}}>Heating when driving</p>
                <div style={{width:'100%',maxWidth:'1100px'}}>{resultdata.car.word4}</div>
            </Responsivewrappertext>
        </Textwrapper>
        <ResponseButton >
            <Buttwrapper1 >
                <Buttonin1>ADD TO CONTACT</Buttonin1>
                <Buttonin1 >COMPARE</Buttonin1>
            </Buttwrapper1>
        </ResponseButton>
        
   </Responsewrapper>

   </>
  )
}

export default DetailResponse