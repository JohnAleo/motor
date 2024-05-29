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
display:flex;
display:grid;
grid-template-areas:"a a a a ";
justify-content: center;
align-items: center;
gap: 30px;
@media only screen and (max-width:1100px) {
    display:grid;
    grid-template-areas:"a a";   
}
@media only screen and (max-width:700px){
    display:grid;
    grid-template-areas:" a";   
}

div{
    width: 292px;
    height: 292px;
    flex-shrink: 0;
    
   
}
`




export const Bgwrapper1=styled.div`
display:flex;
background-image:url(${rec1});
justify-content: center;
div{
    display: flex;
    justify-content: center;
    align-items: center;
}`

export const Bgwrapper2=styled.div`
display:flex;
background-image:url(${rec2});
div{
    display: flex;
    justify-content: center;
    align-items: center;
}`

export const Bgwrapper3=styled.div`
display:flex;
background-image:url(${rec3});
div{
    display: flex;
    justify-content: center;
    align-items: center;
}`

export const Bgwrapper4=styled.div`
display:flex;
background-image:url(${rec4});
div{
    display: flex;
    justify-content: center;
    align-items: center;
}`

export const Bgwrapper5=styled.div`
display:flex;
background-image:url(${rec5});
div{
    display: flex;
    justify-content: center;
    align-items: center;
}`

export const Bgwrapper6=styled.div`
display:flex;
background-image:url(${rec6});
div{
    display: flex;
    justify-content: center;
    align-items: center;
}`

export const Bgwrapper7=styled.div`
display:flex;
background-image:url(${rec7});
div{
    display: flex;
    justify-content: center;
    align-items: center;
}`

export const Bgwrapper8=styled.div`
display:flex;
background-image:url(${rec8});
div{
    display: flex;
    justify-content: center;
    align-items: center;
}`

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
