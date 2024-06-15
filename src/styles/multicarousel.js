import styled from "styled-components";
import koleso from "../assets/popup/koleso.png";
import play from "../assets/popup/play.png";
import re1 from "../assets/popup/re1.png"
import re2 from "../assets/popup/re2.png"
import re3 from "../assets/popup/re3.png"
import re4 from "../assets/popup/re4.png"
import re5 from "../assets/popup/re5.png"
import re6 from "../assets/popup/re6.png"


export const Imgwrapper=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 290px;
height: 167px;
flex-shrink: 0;
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
width: 259px;
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
    justify-content: center;
    align-items: center;
    transform:skewX(+20deg);
    margin-top: 5px;
}
`

export const Buttonwrapper=styled.div`
display:flex;
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

}
`

export const Blogs =styled.div`
display: grid;
grid-template-areas: "a a a";
justify-content: start;
gap: 50px;
@media only screen and (max-width:1100px){
   display :grid;
   grid-template-areas: "a a";}

   @media only screen and (max-width:700px){
   display :grid ;
   grid-template-areas: "a";
   justify-content: center;
   align-items: center;
}


`

export const Buttonplay=styled.div`
display: flex;
background-image: url(${koleso});
background-repeat:no-repeat;
background-position: center;
`
export const Play =styled.div`
display:flex;
background-image:url(${play});
background-repeat:no-repeat;
background-position:center;
cursor:pointer;`

export const Blog1 =styled.div`
display:flex;
background-image:url(${re1});
background-repeat:no-repeat;
background-position:center;
width: 257px;
height: 258px;
flex-shrink: 0;
border-radius: 20px;
//background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`
export const Blog2 =styled.div`
display:flex;
background-image:url(${re2});
background-repeat:no-repeat;
background-position:center;
width: 257px;
height: 258px;
flex-shrink: 0;
border-radius: 20px;
//background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);`

export const Blog3 =styled.div`
display:flex;
background-image:url(${re3});
background-repeat:no-repeat;
background-position:center;
width: 257px;
height: 258px;
flex-shrink: 0;
border-radius: 20px;
//background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);`

export const Blog4 =styled.div`
display:flex;
background-image:url(${re4});
background-repeat:no-repeat;
background-position:center;
width: 257px;
height: 258px;
flex-shrink: 0;
border-radius: 20px;
//background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);`

export const Blog5 =styled.div`
display:flex;
background-image:url(${re5});
background-repeat:no-repeat;
background-position:center;
width: 257px;
height: 258px;
flex-shrink: 0;
border-radius: 20px;
//background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);`

export const Blog6 =styled.div`
display:flex;
background-image:url(${re6});
background-repeat:no-repeat;
background-position:center;
width: 257px;
height: 258px;
flex-shrink: 0;
border-radius: 20px;
//background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);`

export const Sign =styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
padding: 10px 0px;
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
