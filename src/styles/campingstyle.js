import styled from "styled-components";
import camping from '../assets/camping-place/camping.png'

export const Campingwrapper =styled.div`
display: flex;
flex-direction: column;
`
export const Camping =styled.div`
background-image: url(${camping});
width:cover ;
height:350px ;
background-position:center;
background-repeat:no-repeat;
background-size:cover;
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

h2{
color: #FFF;
font-family: Montserrat;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const Campingcatalog =styled.div`
display: grid;
grid-template-areas:"a a a";
padding: 100px;
gap: 50px;

`
export const Campcat=styled.div`
display: flex;
flex-direction: column;
gap: 10px;
h5{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;
};
`