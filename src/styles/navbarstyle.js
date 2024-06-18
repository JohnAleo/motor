import { Link } from 'react-router-dom';
import styled from 'styled-components';
import motorBg from '../assets/motor/motorBg.png'
import caravan from '../assets/caravanasset/caravan.jpg'
import tuning from '../assets/tuning/tuning.jpg'
import usedcar2 from '../assets/usedCar/usedcar2.jpg'
import user from '../assets/navbar/user.png'

export const Container =styled.div`
display: flex;
padding: 10px 50px;
background-color: #fff;
position: fixed;
width: 100%;
z-index: 2;
`
export const NavbarLeft =styled.div`
display: flex;
flex: 2;

`
export const Drawerin=styled.div`
display:none;
@media only screen and (max-width:1100px){
   display: flex;
};
@media only screen and (max-width:700px){
  display  : none;
}
`

export const NavbarMiddle =styled.div`
display: flex;
flex: 5;
justify-content: space-around ;
align-items: center;
@media only screen and (max-width:1100px){
    display: none;
}
p{
    cursor: pointer;
}
`
export const NavbarRight =styled.div`
display:flex;
flex: 2;
justify-content: end;
p{
    cursor: pointer;
    @media only screen and (max-width:700px) {
       display : none;
    }
}
`
export const Drawerin1=styled.div`
display:none;
@media only screen and (max-width:700px) {
    display: flex;
}`

export const Img1=styled.div`
display: flex;
align-items: center;
width: 27px;
height: 27px;
flex-shrink: 0;
margin-right: 10px;
cursor: pointer;
`
export const Img2=styled.div`
display: flex;
align-items: center;
background-image:url(${user});
width: 27px;
height: 27px;
flex-shrink: 0;
margin-right: 10px;
@media only screen and (max-width:700px) {
    display: none;
}
`
export const Buttonuser=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 22px;
height: 22px;
background-color:transparent;
//border:2px solid  #006DAB;
//border-color:#006DAB;
cursor:pointer;`

export const NavLink=styled(Link)`
color:black;
font-weight:600;
text-decoration:none;`

export const Camper=styled.div`
display: flex;
color: #006DAB;
font-family:Montserrat;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;`

export const Bgwrapper =styled.div`
background-image:url(${motorBg});
background-position:center;
background-repeat:no-repeat;
background-size:cover;
height: 500px;
flex-shrink: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
h5{
color: #FFF;
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h2{
color: #FFF;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`

export const Bgwrapper1 =styled.div`
background-image:url(${caravan});
background-position:center;
background-repeat:no-repeat;
background-size:cover;
height: 500px;
flex-shrink: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
h5{
color: #FFF;
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h2{
color: #FFF;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`

export const Bgwrapper2 =styled.div`
background-image:url(${tuning});
background-position:center;
background-repeat:no-repeat;
background-size:cover;
height: 500px;
flex-shrink: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
h5{
color: #FFF;
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h2{
color: #FFF;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`

export const Bgwrapper3 =styled.div`
background-image:url(${usedcar2});
background-position:center;
background-repeat:no-repeat;
background-size:cover;
height: 500px;
flex-shrink: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
h5{
color: #FFF;
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h2{
color: #FFF;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`

export const BgwrapperDetail =styled.div`
background-image:url(${motorBg});
background-position:center;
background-repeat:no-repeat;
background-size:cover;
height: 350px;
flex-shrink: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
h5{
color: #FFF;
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h2{
color: #FFF;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
div{
    display: flex;
}
`
export const ButtonDetail=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding:5px ;
border-radius:10px;
width: 181.5px;
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
`


