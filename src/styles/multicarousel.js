import styled from "styled-components";
import back from"../assets/popup/back.png"

export const Imgwrapper=styled.div`
display: flex;
justify-content: center;
align-items: center;
//width: 290px;
width: 100%;
height: 167px;
flex-shrink: 0;
img{
  width: 100%;
  max-width: 290px;
  height: 167px;
  border-radius: 10px;
}
//background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`
export const Carouselin=styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
//  border:1px solid black;
padding:5px 1%;`



export const Recommend=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: var(--text, #373737);
font-family: Gilroy;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 20px 0px;
div{
    border-bottom:2px solid #FF7A00;
    width: 190px;
};
`

export const Recommend1=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: var(--text, #373737);
font-family: Gilroy;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 20px 0px;
div{
    border-bottom:2px solid #FF7A00;
    width: 110px;
};
`
export const Recommend2=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: var(--text, #373737);
font-family: Gilroy;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 20px 0px;
div{
    border-bottom:2px solid #FF7A00;
    width: 90px;
};
`


export const Button =styled.div`
width: 100%;
height: 45px;
flex-shrink: 0;
display: flex;
justify-content: center;
align-items: center;
padding:5px ;
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
display: inline-block;
p{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    transform:skewX(+20deg);
    margin-top: 5px;
}
`

export const Buttonwrapper=styled.div`
display:flex;
width: 100%;
justify-content:center; 
transform:skewX(-20deg);
:hover{
 color: white;
 background-color:#006DAB;}

 
 `
 export const Namewrapper=styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 color: var(--text, #373737);
 text-align: center;
 font-family: Montserrat;
 font-size: 18px;
 font-style: normal;
 font-weight: 600;
 line-height: normal;
 margin:7px 0px;`

 export const Select=styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 259px;
 height: 45px;
 flex-shrink: 0;

 select{
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
 }`

export const Blogwrapper =styled.div`
display: flex;
justify-content: center;
gap: 20px;
padding: 20px 50px 20px 50px;
@media only screen and (max-width:1100px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

`

export const Camper =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 27px;

 
@media only screen and (max-width:1100px){
   display :flex ;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}



h4{
    display: flex;
    justify-content: start;
    color: #000;
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 100%;
}
h3{
    display: flex;
    justify-content: start;
    color: var(--sariq, #FF7A00);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
}  
p{
    display: flex;
    justify-content: start;
    width: 380px;
    height: 124px;
    flex-shrink: 0;
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;

}
`

export const Blogs =styled.div`
 display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    border-radius: 15px;
  }
  img {
    width: 100%;
    max-width: 258px;
    max-height: 258px;
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: auto auto;
    margin-top: 40px;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`

export const Buttonplay=styled.div`
flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  width: 100%;
  max-width: 292px;
  color: white;
  border-radius: 10px;
  img {
    width: 100%;
    cursor: pointer;
  }
  &:hover {
    background-color: #fafafa;
    transform: scale(1.05);
    transition: 0.5s ease;
    cursor: pointer;
    border-radius: 18px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
`

//// Home style blog part
export const Blog1 =styled.div`
display:flex;
background-repeat:no-repeat;
background-position:center;
width:100%;
height: 258px;
flex-shrink: 0;
border-radius: 20px;
//background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`
export const Blog2 =styled.div`
display:flex;
background-repeat:no-repeat;
background-position:center;
width:100%;
height: 258px;
flex-shrink: 0;
border-radius: 20px;
//background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);`

export const Blog3 =styled.div`
display:flex;
background-repeat:no-repeat;
background-position:center;
width:100%;
height: 258px;
flex-shrink: 0;
border-radius: 20px;
//background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);`

export const Blog4 =styled.div`
display:flex;
background-repeat:no-repeat;
background-position:center;
width:100%;
height: 258px;
flex-shrink: 0;
border-radius: 20px;
//background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);`

export const Blog5 =styled.div`
display:flex;
background-repeat:no-repeat;
background-position:center;
width:100%;
height: 258px;
flex-shrink: 0;
border-radius: 20px;
//background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);`

export const Blog6 =styled.div`
display:flex;
background-repeat:no-repeat;
background-position:center;
width:100%;
height: 258px;
flex-shrink: 0;
border-radius: 20px;
//background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);`
/// Home style blog 



export const Sign =styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
margin-top: 40px;
padding: 25px 0px;
width: 500px;
height: 614px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
label{
    display: flex;
    margin-left: 32px;
    color: rgba(55, 55, 55, 0.80);
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
p{
    color: var(--text, #373737);
    font-family: "Open Sans";
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 32px;
}
`
export const Mail=styled.div`
display:flex;
justify-content: center;
input{
width: 434px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
border: none;
}
`
export const Logged =styled.div`
display:flex;
input{
    width: 23px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 5px;
    background: rgba(55, 55, 55, 0.15);

}
div{
    display: flex;
    flex: 1;
    justify-content:${props => props.$logged1? 'start':'center'} ;
    align-items:center ;
    gap: 5px;
    margin-left: ${props=> props.$logged1? '32px':'0px'};
    label{
        display: flex;
        margin-left: -1px;
    }
}
`

export const RegistrComponent=styled.div`
display:flex;
background-image:url(${back});
justify-content:center;
padding:50px 0px;`


export const Swiperwrapper=styled.div`
display:flex;
//position: relative;
`
export const Registrbutton=styled.div`
display:flex;
justify-content: center;
align-items: center;
padding:5px ;
border-radius:10px;
width: 434px;
height: 50px;
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
text-decoration:none;
text-decoration-line:none;`

export const Registrbuttonwrapper=styled.div`
display:flex;
justify-content:center; 
text-decoration-line:none;
text-decoration:none;
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
    text-decoration-line:none;
    text-decoration:none;
    cursor:pointer;
    :hover{
        color: white;
        background-color:#006DAB;  
    }
}
:hover{
 color: white;
 background-color:#006DAB;
 border-radius:10px;
}`

export const Carouselwrapper=styled.div`
display:flex;
flex-direction:column;
padding:0px 12%;
background-color:#fff`
