import styled from "styled-components";
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
margin: 30px 0px;
div{
    border-bottom:2px solid #FF7A00;
    width: 190px;
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
 margin:10px 0px;`

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
