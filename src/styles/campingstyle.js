import styled from "styled-components";
import camping from '../assets/camping-place/camping.png'

export const Campingwrapper =styled.div`
display: flex;
flex-direction: column;
`
export const Camping =styled.div`
background-image: url(${camping});
width:cover ;
height:460px ;
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
justify-content: center;
padding: 5px 5px 5px 5px;
&:hover {
    background-color: #fafafa;
    transform: scale(1.05);
    transition: 0.5s ease;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
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
flex: 1;
  /* border: 1px solid blue; */
  width: 100%;
  img {
    width: 100%;
    max-width: 395px;
    max-height: 300px;
    min-height: 300px;
    border-radius: 10px;
      @media only screen and (max-width: 800px) {
    height: 100%;
  }
};
`

export const DetailContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;


`

export const CampingCarus=styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  /* border: 1px solid blue; */
  margin-right: 10px;
  img {
    width: 100%;
    max-width: 194px;
    height: 147px;
    border-radius: 10px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url(<path-to-image>) lightgray 50% / cover no-repeat;
  }

`
export const DetailCampwrapper=styled.div`
display:flex;`

export const Information=styled.div`
display:flex;
padding:20px 20px 0px 0px;
gap: 10px;
flex-direction:column;
h1{
    color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
}`

export const Copymapwrapper=styled.div`
display:flex;
gap:20px;`

export const Locationwrapper=styled.div`
display:flex;
h1{
    color: var(--blue, #006DAB);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}`

export const Mapwrapper=styled.div`
display:flex;
div{
    border-radius:15px;
}
`

export const Infosection=styled.div`
display:flex;
flex-direction: column;
gap: 30px;
`
export const Linewrapper=styled.div`
display: flex;
width: 100%;
div{
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(55,55,55,0.3);
    margin: 10px 0px;
}
`
export const Infosection1=styled.div`
display:flex;
//flex-direction:column;
`
export const Time=styled.div`
display: flex;
align-items:center;
gap: 10px;
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
};
h5{
    color: var(--sariq, #FF7A00);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
};
`
export const Phone=styled.div`
display: flex;
align-items:center;
gap: 10px;
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`
export const Logo=styled.div`
display:flex;
align-items:center;
gap: 10px;
p{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`

export const Location=styled.div`
display:flex;
align-items:center;
gap: 10px;`

export const Infosectionleft=styled.div`
display:flex;
flex: 1;
gap: 20px;
flex-direction:column;
justify-content:start;`

export const Infosectionmiddle=styled.div`
display:flex;
flex-direction:column;
flex:1;
gap:20px;`
export const Infosectionright=styled.div`
display: flex;
flex: 3;
`
export const Description=styled.div`
display:flex;
flex-direction:column;
margin: 0px 0px 50px 0px;
gap: 10px;
h4{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}`