import { Link } from 'react-router-dom';
import styled from 'styled-components';
import motorBg from '../assets/motor/motorBg.png'
import caravan from '../assets/caravanasset/caravan.jpg'
import tuning from '../assets/tuning/tuning.jpg'
import usedcar2 from '../assets/usedCar/usedcar2.jpg'

export const Container =styled.div`
display: flex;
padding: 10px 50px;
`
export const NavbarLeft =styled.div`
display: flex;
flex: 2;
`

export const NavbarMiddle =styled.div`
display: flex;
flex: 5;
justify-content: space-around ;
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
}
img{
    margin-right: 10px;
    cursor: pointer;
};
`
export const NavLink=styled(Link)`
color:black;
font-weight:600;
text-decoration:none;`

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


