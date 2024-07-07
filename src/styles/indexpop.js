import styled from "styled-components";
import rec1 from "../assets/popup/rec1.png"
import rec2 from "../assets/popup/rec2.jpg"
import rec3 from "../assets/popup/rec3.png"
import rec4 from "../assets/popup/rec4.png"
import rec5 from "../assets/popup/rec5.png"
import rec6 from "../assets/popup/rec6.png"
import rec7 from "../assets/popup/rec7.png"
import rec8 from "../assets/popup/rec8.png"
import koleso from "../assets/popup/koleso.png"
import akar from "../assets/popup/akar.png"
import naver from "../assets/popup/naver.png"
import talk from "../assets/popup/talk.png"
import log1 from "../assets/popup/log1.png"
import log2 from "../assets/popup/log2.png"
import log3 from "../assets/popup/log3.png"

export const Videowrapper=styled.div`
display:grid;
justify-content: center;
width: 100%;
grid-template-areas:"a a a a ";
justify-content: center;
align-items: center;
gap: 30px;
background-color: #fff;
@media only screen and (max-width:1100px) {
    display:grid;
    grid-template-areas:"a a"; 
    width  : 100%;
    max-width: 1150px;


}
@media only screen and (max-width:700px){
    display:grid;
    grid-template-areas:" a";
    width  : 100%;      
}

`
export const Videoblogwrapper=styled.div`
display:flex;
flex-direction:column;
background-color:#fff;`

export const Iframe=styled.div`
display:flex;
width:850px;
height:580px;`




export const Imgwrapper=styled.div`
display:flex;
background-image:url(${koleso});
width: 58px;
height: 58px;
flex-shrink: 0;
fill: rgba(255, 255, 255, 0.30);
stroke-width: 1px;
stroke: #FFF;`

export const Buttonwrapperpop =styled.div`
display:flex;
justify-content:center; 

div{
    display: flex;
    justify-content: center;
    align-items: center;
    padding:5px ;
    border-radius:10px;
    width: 434.5px;
    height: 50.014px;
    flex-shrink: 0;
    background-color:transparent;
    border:2px solid  #006DAB;
    border-color:#006DAB;
    color: var(--blue, #006DAB);
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor:pointer;
    :hover{
        color: white;
        background-color:#006DAB;  
    }
}
:hover{
 color: white;
 background-color:#006DAB;
}`

export const Or =styled.div`
display:flex;
justify-content: center;
align-items: center;
gap: 20px;
button{
    display: flex;
    border-bottom: 1px  rgba(55, 55, 55, 0.15);;
    width: 119.017px;
    height: 1px;
}
h5{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6D6D6D;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
`
export const Logowrapper =styled.div`
display:flex;
justify-content:center;
gap:15px;`

export const Naver=styled.div`
display: flex;
justify-content: center;
align-items: center;
background-image: url(${naver});
background-position: center;
width: 46px;
height: 46px;
flex-shrink: 0;
`
export const Log1=styled.div`
display:flex;
background-position: center;
background-image: url(${log1});
width: 20.7px;
height: 18.4px;
flex-shrink: 0;
`

export const Akar=styled.div`
display: flex;
justify-content: center;
align-items: center;
background-image: url(${akar});
background-position: center;
background-repeat: no-repeat;
width: 46px;
height: 46px;
flex-shrink: 0;
`
export const Log2=styled.div`
display:flex;
background-image: url(${log2});
background-position: center;
width: 22.7px;
height: 23.4px;
flex-shrink: 0;
`

export const Talk=styled.div`
display: flex;
justify-content: center;
align-items: center;
background-image: url(${talk});
background-position: center;
width: 46px;
height: 46px;
flex-shrink: 0;
`
export const Log3=styled.div`
display:flex;
background-position: center;
background-image: url(${log3});
width: 29.7px;
height: 23.4px;
flex-shrink: 0;
`
export const Registrwrapper=styled.div`
display:flex;
background-color:blueviolet;`


export const Popvideo=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 25px 30px 25px;
  width: 100%;
  border-radius: 15px;
 iframe{
    width: 100%;
    width: 850px;
    height: 360px;
    border-radius: 15px;
    @media only screen and (max-width: 1050px) {
      width  :698px ;
      height: 387px;
        
    }

    
    @media only screen and (max-width: 800px) {
      width  :350px ;
      height: 380px;
        
    }

 }
  @media only screen and (max-width: 700px) {
    padding: 10px 15px 20px 15px;
  }
`

export const Titlecontent=styled.div`
display:flex;
align-items: center;
padding: 20px 0px 0px 30px;
color: #000;
font-family: "Open Sans";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;`


export const Titleinside=styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px 0px 25px;
  h3 {
    color: #000;
    font-family: "Open Sans";
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: #000;
    font-family: "Open Sans";
    font-size: 33px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }`

  export const Boxwrapper =styled.div`
  display:flex;
  flex-direction: column;
  border-radius:15px;`