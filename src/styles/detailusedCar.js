import styled from "styled-components"


export const Resultwrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;
color:white;
width: 509.208px;
height: 76.407px;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: normal;`

export const Line1=styled.div`
display:flex;
width: 100%;
max-width:1100px;
border-bottom: 2px solid rgba(55, 55, 55, 0.30) ;

`

export const Aidalwrapper =styled.div`
display:flex;
justify-content: center;
padding: 0px 15%;
gap: 30px;
width: 100%;
@media only screen and (max-width:1150px) {
   display :none ;
}


`
export const Imagewrapper=styled.div`
display:flex;
justify-content:end;
width: 100%;
height: 477px;
img{
  display  :flex ;
  border-radius: 15px;  
  width: 670px;
  height: 477px;
}

`

export const Aidal=styled.div`
display:flex;
flex-direction:column;
padding: 20px  4%;
width:100%;
max-width:670px;
height: 477px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Aidalin=styled.div`
display:flex;
align-items: center;
justify-content: space-between;

h4{
    display: flex;  
    color: #006DAB;
    font-family: Montserrat;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

`

export const Awrapper=styled.div`
display:flex;
justify-content: space-between;


`

export const Aidalinleft =styled.div`
display:flex;
flex-direction:column;
justify-content: space-around;
p{
margin-top: 25px;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal; 
}`
export const Aidalright=styled.div`
display:flex;
flex-direction:column;
justify-content: space-around;

h4{
margin-top:25px;
color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}`

export const Namewrapper=styled.div`
display:flex;
flex-direction:column;
h3{
color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
p{
color: #000;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}`

export const Introduction =styled.div`
display: flex;
flex-direction: column;
padding: 10px 10%;
width: 100%;
@media only screen and (max-width:1150px) {
   display :none ;
}

//margin: 20px;
//border: 1px solid red;

`

export const Comfortwrapper=styled.div`
display:flex;
justify-content: center;
padding: 0px 7%;
width: 100%;
div{
    display: flex;
    gap: 150px;
     margin-top: 30px;
}
`

export const Comfort =styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width: 100%;
//align-items: center;
flex:1;
p{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
div{
display: flex;
justify-content: center;
width: 533px;
height: 169px;
flex-shrink: 0;
color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
margin-top: -80px;
}`



export const Imgwrapper1=styled.div`
display:flex;
flex:1;
width: 100%;    
justify-content:${(props)=> (props.$left ? 'end':'start')};`

export const Tidywrapper=styled.div`
display:flex;
justify-content: center;

div{
    display: flex;
    gap: 150px; 
}`

export const Tidy=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex:1;
p{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
div{
display: flex;
justify-content: center;
width: 533px;
height: 169px;
flex-shrink: 0;
color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
margin-top: -80px;
}
`

export const Ventilwrapper=styled.div`
display:flex;
justify-content: center;
div{
    display: flex;
    gap: 150px;
    }  
`

export const Ventil=styled.div`
display:flex;
flex-direction: column;
p{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top:70px;
}
div{
    display: flex;
    justify-content: center;   
width: 533px;
height: 169px;
flex-shrink: 0;
color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
margin-top: -80px;
}  
`
export const Easywrapper=styled.div`
display:flex;
justify-content: center;
div{
    display: flex;
    gap: 150px;  
};`


export const Easy =styled.div`
display:flex;
flex-direction: column;
p{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top:70px;
}
div{
width: 533px;
height: 169px;
flex-shrink: 0;
color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
margin-top: -80px;
} 
`

export const Heatingwrapper=styled.div`
display:flex;
justify-content: center;
div{
    display: flex;
    gap: 150px;  
};
`
export const Heating=styled.div`
display:flex;
flex-direction: column;
p{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top:70px;
}
h4{
width: 533px;
height: 169px;
flex-shrink: 0;
color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
margin-top: -80px;
margin-bottom: -100px;
}
`
export const Buttonin=styled.div`
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
text-decoration:none;
text-decoration-line:none;
`
export const Buttonin1=styled.div`
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
text-decoration:none;
text-decoration-line:none;
@media only screen and (max-width:1150) {
    width:100%;
    max-width:1100px;}
@media only screen and (max-width:450) {
    width:100%;
    max-width:1100px;}
`
export const Buttwrapper=styled.div`
display:flex;
justify-content:center; 
:hover{
 color: white;
 background-color:#006DAB;
}

margin-top: -50px;
`
export const Buttwrapper1=styled.div`
display:flex;
gap: 50px;
justify-content:center; 
padding:20px 0px 100px 0px;
margin-left:-265px;

:hover{
 color: white;
 background-color:#006DAB;
}
margin-top: -50px;

@media only screen and (max-width:890px) {
    
    margin-left:10px ;
}
@media only screen and (max-width:480px) {
    
    gap:5px;
}
`
export const Responsewrapper=styled.div`
display:none;
@media only screen and (max-width:1150px) {
   display :flex ;
   flex-direction: column;
   justify-content: center;
   padding: 0px 7%;
   gap:10px;

}`
export const Responseimg=styled.div`
display:flex;
justify-content:center;
border-radius: 15px;  
width:100%;
max-width:1100px;`

export const Responsivewrapper=styled.div`
display:flex;
justify-content:center;
`

export const Responsivewrappertext=styled.div`
display:flex;
flex-direction: column;

p{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
div{
display: flex;
justify-content: center;
width: 683px;
height: 169px;
flex-shrink: 0;
color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
}`

export const Textwrapper=styled.div`
display:flex;
justify-content:center;
`

export const ResponseButton=styled.div`
display:flex;
justify-content:center;
@media only screen and (max-width:550px) {
   margin-top : 50px;
}
width:100%;
max-width:1100px;`

export const Detailwrapper=styled.div`
display:flex;
flex-direction:column;
    
`

