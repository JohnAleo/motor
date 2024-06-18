import styled from "styled-components";
import camping from '../assets/camping-place/camping.png'

export const Campingwrapper =styled.div`
display: flex;
flex-direction: column;
`
export const Camping =styled.div`
background-image: url(${camping});
width:cover ;
height:400px ;
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

export const Campwrapper=styled.div`
display:grid;
grid-template-areas:"a a a";
padding:100px 10%;
gap: 50px;
@media only screen and (max-width:1100px) {
    display: grid;
    grid-template-areas:"a a";   
}
@media only screen and (max-width:700px) {
    display: grid;
    grid-template-areas:"a";   
}`


export const Campercontainer=styled.div`
display: flex;
`
export const Camperwrapper=styled.div`
display: flex;
`

export const Camperinside=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
p{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal; 
}
div{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer; 
}
img{
    display: flex;
    width: 390px;
    height: 365px;
    border-radius: 15px;
    @media only screen and (max-width:700px) {
       display :flex ;
       width: 515px;
       height: 391px;
    }
}`

export const DetailContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;


`
