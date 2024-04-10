import { Link } from 'react-router-dom';
import styled from 'styled-components';
import motorBg from '../assets/motor/motorBg.png'
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
`

