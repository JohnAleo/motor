import styled from "styled-components";

export const Premiumwrapper=styled.div`
display:flex;
flex-direction:column;
`

export const Premiumin=styled.div`
display:flex;
padding:10px 5%;

`


export const Premiumleft=styled.div`
display:flex;
flex:1;
gap:10px;`

export const Premiumright=styled.div`
display:flex;
flex:1;
justify-content:end;`

export const Questionwrapper=styled.div`
display:flex;
flex-direction: column;
//background-color:#eee;
align-items: center;
align-items: center;
flex-direction:column;
width: 450px;
height: 432px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`

export const Item1=styled.div`
display:flex;
//background-color:#eee;
justify-content: space-between;
padding:10px 5%;   
gap:50px;
background-color:#FAFAFA;
@media only screen and (max-width:1150px) {
   display :flex ;
   flex-direction: column;
   justify-content: center;
   background-color:#eee;
}
form{
    display: flex;
    justify-content: center;
}
`



export const Have =styled.div`
display:flex;
margin-top: 20px;
h4{
color: var(--text-color, #023047);
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 31.2px */
}`

export const Name =styled.div`
display:flex;
margin-top: 20px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

input{
width: 390px;
height: 50px;
flex-shrink: 0;
border-radius: 8px;
border: none;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
::placeholder{
    display: flex;    
}
}




`

export const Quest=styled.div`
display:flex;
margin-top: 20px;
input{
width: 390px;
height: 120px;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid var(--text, #373737);
opacity: 0.05;
background: var(--text, #373737);
}
`

export const Questbutton =styled.div`
display:flex;
margin-top: 20px;
justify-content:center; 
:hover{
 color: white;
 background-color:#006DAB;
}

`

export const Buttoninq =styled.div`
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
export const Item6wrapper=styled.div`
display:flex;
flex-direction:column;
padding:10px 5%;
`

export const Item6 =styled.div`
display: flex;
justify-content: space-between;
@media only screen and (max-width:750px)
 {
    display: flex;
    flex-direction: column;
}
`
export const Photowrapper=styled.div`
display: flex;
flex: 1;
width: 100%;
img{
    width: 100%;
    max-width: 250px;
    height: 100px;
    border-radius: 10px;
}
`
export const Compwrapper=styled.div`
display:flex;
flex: 1;
flex-direction: column;
justify-content: start;
@media only screen and (max-width:700px) {
   display :flex ;
   flex-direction: column;
}
h4{
        display:flex;    
        color: var(--text, #373737);
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 100%;
    }
    p{
        color: rgba(55, 55, 55, 0.80);
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 100%;
    }
    h5{
        display: flex;
        color: #373737;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        justify-content: start;
        width: 100%;
    }
`
export const Item6left=styled.div`
display: flex;
flex: 2;
align-items: center;
justify-content: space-between;
gap: 20px;
@media only screen and (max-width:750px)
 {
    display: flex;
    flex-direction: column;
 }
div{
    
}
`
export const Item6right=styled.div`
display: flex;
flex: 1;
flex-direction: column;
@media only screen and (max-width:750)
 {
    display: flex;
    flex-direction: column;
 }
div{
    display: flex;
    gap: 20px;
    h4{
        display:flex;
        justify-content: center;
        align-items: center;
        color: #373737;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    p{
        color: rgba(55, 55, 55, 0.70);
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}
`

export const Mapp =styled.div`
display: flex;
flex-direction: column;
gap: 50px;

`
export const Mappup=styled.div`
display:flex;
height:355px;
width:805px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
@media only screen and (max-width:1150px) {
 display:flex;
 width: 100%;
 justify-content: center;
}`

export const Mappdown=styled.div`
display:flex;
justify-content: space-between;
margin-top: 15px;

@media only screen and (max-width:1150px) {
 display:flex;
 width: 100%;
 }
 @media only screen and (max-width:490px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
   }
div{
    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 340px;
    height: 109px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    @media only screen and (max-width:490px) {
    display: flex;
    height: 109px;}
    
    p{
        color: #666;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 18.2px */
        padding: 0px 10px;
    }
    h4{
        color: var(--txt-color, #1E1C1C);
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding: 0px 10px;
    }
}
`

export const Mapwrapper=styled.div`
display:flex;
justify-content: space-between;
padding: 10px 5%;
gap: 20px;
@media only screen and (max-width:1150px) {
   display :flex ;
   flex-direction: column;
   justify-content: center;
}
form{
    display: flex;
    justify-content: center;
}`


export const Mailpart=styled.div`
display:flex;
form{
    display: flex;
    flex-direction: column;
}`
export const Inform=styled.div`
display:flex;
justify-content:center;
@media only screen and (max-width:1150px) {
   display :flex ;
   padding:0px 15px
}
input{
width:390px;
height:60px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
border: none;
@media only screen and (max-width:1150px) {
   display :flex ;
   width: 100%;
   padding:0px 10px
}
}
textarea{
width: 390px;
height: 160px;
flex-shrink: 0;
border-radius: 8px;
border:none;
background: rgba(55, 55, 55, 0.10);
@media only screen and (max-width:1150px) {
   display :flex ;
   width: 100%;
   padding:0px 10px
}
}`

export const Signtab=styled.div`
display:flex;
flex-direction: column;
gap: 20px;
width: 450px;
height: 530px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding: 25px 0px;
@media only screen and (max-width:1150px) {
   display :flex ;
   width: 100%;}
label{
    display: flex;
    margin-left: 32px;
    color: rgba(55, 55, 55, 0.90);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
  
}
p{
    display: flex;
    justify-content: center;
    color: var(--text-color, #023047);
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 31.2px */
    padding:10px 0px;
}
`
export const Signbuttonwrapper=styled.div`
display:flex;
justify-content:center; 
@media only screen and (max-width:1150px) {
   display :flex ;
   width: 100%;
   padding:0px 10px}

:hover{
 color: white;
 background-color:#006DAB;
}`

export const Signbutton=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding:5px ;
border-radius:10px;
width: 390px;
height: 60px;
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
@media only screen and (max-width:1150px) {
   display :flex ;
   width: 100%;
   padding:0px 10px}`


