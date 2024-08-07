import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;`

export const Wrapper=styled.div`
display: flex;
justify-content: center;
height: cover;
padding: 2% 20%;
background: #fafafa;
gap:70px;
`


export const Filtrwrapper=styled.div`
//flex:2;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width:1220px) {
  display  :none ;
}
`

export const Catalogwrapper =styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 1450px;
//justify-content: center;
//flex:8;
gap: 10px;
`
//export const Vmenuwrapper=styled.div`
//display:flex;
//flex-direction: column;
//width:987px;
//gap:20px;`
//export const Vmenustyle=styled.div`
//display: flex;
//background-color: white;
//flex-direction: row;
//height: 223px;
//width: 100%;
//max-width: 987px;
//min-width: 900px;
//justify-content: space-around;
//border-radius: 20px;
//padding: 10px;
//box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
//h3{
//color: var(--blue, #006DAB);
//font-family: sans-serif;
//font-size: 22px;
//font-style: normal;
//font-weight: 700;
//line-height: normal; 
//}
//p{
//color: var(--text, #373737);
//font-family: Montserrat;
//font-size: 12px;
//font-style: normal;
//font-weight: 400;
//line-height: normal;
//}
//h4{
//color: var(--text, #373737);
//font-family: sans-serif;
//font-size: 16px;
//font-style: normal;
//font-weight: 600;
//line-height: normal;
//}
//&:hover {
//    background-color: #fafafa;
//    transform: scale(1.05);
//    transition: 0.5s ease;
//    cursor: pointer;
//    border-radius: 10px;
//    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
 // }
//
//`

//export const Hmenuwrapper=styled.div`
//display: grid;
//justify-content: center;
//width: 100%;
//grid-template-columns: repeat(4, 1fr);
//gap:25px;

//@media only screen and (max-width: 1350px){
//display:grid;
//grid-template-columns:repeat(3, 1fr);   
//}
//@media only screen and (max-width: 1000px){
//display:grid;
//grid-template-columns:repeat(2, 1fr); 
//.Navbarmiddle{
 //   display: none;
//}  

//}
//@media only screen and (max-width: 700px){
//display:grid;
//grid-template-columns:repeat(1, 1fr);   

//}
//`
//export const Hmenustyle=styled.div`
//display: flex;
//background-color: white;
//flex-direction: column;
//justify-content: space-around;
//border-radius: 20px;
//padding: 10px;
//box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

//h3{
//color: var(--blue, #006DAB);
//font-family: sans-serif;
//font-size: 22px;
//font-style: normal;
//font-weight: 700;
//line-height: normal; 
//}
//p{
//color: var(--text, #373737);
//font-family: Montserrat;
//font-size: 12px;
//font-style: normal;
//font-weight: 400;
//line-height: normal;
//}
//h4{
//color: var(--text, #373737);
//font-family: sans-serif;
//font-size: 16px;
//font-style: normal;
//font-weight: 600;
//line-height: normal;
//}
//&:hover {
//    background-color: #fafafa;
//    transform: scale(1.05);
//    transition: 0.5s ease;
 //   cursor: pointer;
//    border-radius: 10px;
//    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
 // }
//`
export const CardContainer=styled.div`
display: flex;
background-color: white;
flex-direction:${props=> props.$Vmenu ? 'row' : 'column'} ;
justify-content: space-around;
border-radius: 20px;
padding: 10px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
max-width: ${props=> props.$Vmenu ? '100%' : ''} ;
transition: all 0.35 ease 0s;
width:${props => props.$Vmenu ? '987px': ''};
height:${props => props.$Vmenu ? '223px': '307px'} ;
@media only screen and (max-width:1350) {
    display: flex;
    width:${props=> props.$VmenuCon ? '734px':""}
    
}
@media only screen and (max-width:400px) {
  display  : flex;
  flex-direction:${props=> props.$Vmenu ? 'column':''}; 
  height: 300px;
}


h3{
color: var(--blue, #006DAB);
font-family: sans-serif;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal; 
}
p{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
h4{
color: var(--text, #373737);
font-family: sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
&:hover {
    background-color: #fafafa;
    transform: scale(1.05);
    transition: 0.5s ease;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
`

export const Carwrapper=styled.div`
display: grid;
justify-content: center;
width: 100%;
max-width: 1450px;
grid-template-columns: repeat(4, 1fr);
gap:25px;

@media only screen and (max-width: 1450px){
display:grid;
grid-template-columns:repeat(3, 1fr); 
width  : 100%;
max-width: 1100px;

}
@media only screen and (max-width: 1000px){
display:grid;
grid-template-columns:repeat(2, 1fr); 
max-width: 1000px;
.Navbarmiddle{
    display: none;
} 

@media only screen and (max-width:1350) {
    display: flex;
    //width:${props=> props.$VmenuCon ? '734px':""}
    
}

}
@media only screen and (max-width: 700px){
display:grid;
grid-template-columns:repeat(1, 1fr);   

}`

export const Wholewrapper =styled.div`
display:flex;
`

export const Inforwrapper =styled.div`
display:flex;
flex:3;
flex-direction:column;
justify-content: ${props=> props.$Vmenu ? 'center':'center'};
padding: ${props => props.$Vmenu ? "0px 20px":"0px 0px"};
width: 100%;
`

export const Cardwrapper=styled.div`
display:flex;
justify-content: center;
width: 100%;
flex-direction:column;
gap:20px;
.overlay{
    display: flex;
    width: 230px;
    height: 315px;
}`



export const Carimg=styled.div`
display: flex;
flex: 2;
justify-content: center;
align-items: ${props=> props.$Vmenu ? 'center':''};
img{
    border-radius: 10px;

}

`

export const Button =styled.button`
display: flex;
flex: ${props=> props.$Vmenu ? '1':""};
justify-content: center;
align-items: center;
padding:5px ;
border-radius:10px;
width: 94px;
height: 35px;
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
cursor:pointer;`

export const Buttonwrapper=styled.div`
display:flex;
justify-content:space-between;
gap: ${props=> props.$Vmenu ? "10px": '20px'};
:hover{
 color: white;
 background-color:#006DAB;
}
margin-top: 10px;
 `


export const Filtrin=styled.div`
display: flex;
justify-content: center;
flex-direction: column;
gap:70px;
padding: 12px 0px;
`
export const Itemleft=styled.div`
display: flex;
align-items: center;
flex: 1;
gap: 10px;
@media only screen and (max-width:780px) {
    display: flex;
    flex-direction: column;
}
`

export const DraweriPhone=styled.div`
display:flex;
@media only screen and (max-width:780px) {
    display: flex;
    margin-left: -150px;
}
`
export const Itemwrapper=styled.div`
display: flex;
width: 100%;
justify-content: center;
padding: 5px;
@media only screen and (max-width:1100px){
   width : 100%;
}
`
export const Itemdrawerwrapper=styled.div`
display:none;
@media only  screen and (max-width:1220px) {
  display:flex;  
}
`
export const Itemlength=styled.div`
display:flex;
align-items:center;
gap:10px;
P{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}
h5{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;
}`

export const Selectwrapper=styled.div`
display:flex;
align-items:center;
`
export const Selectin=styled.div`
display: flex;
width: 100%;
select{
width: 227px;
height: 30px;
flex-shrink: 0; 
border-radius: 5px;
@media only screen and (max-width:950px) {
    width: 150px;
}
}
align-items:center;`

export const Sortby=styled.div`
width: 100px;
display:flex;
align-items: center;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
@media only screen and (max-width:1100px) {
    display: none;
}
@media only screen and (max-width:780px) {
    display: flex;
}`

export const Itemright =styled.div`
display:flex;
align-items: center;
flex:1;
justify-content: end;
gap: 5px;
@media only screen and (max-width:1000px){
    display: flex;
    width: auto;
}

@media only screen and (max-width:780px) {
    display: flex;
    flex-direction: column;
}
p{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
}
select{
border:1px solid #37373760;
border-radius:5px;
padding: 5px;
}
`
export const Button2=styled.div`
display: flex;
justify-content: center;
width: 41px;
height: 30px;
flex-shrink: 0; 
border-radius: 5px 0px 0px 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
cursor: pointer;
padding:7px 6px;
`
export const Button3=styled.div`
display: flex;
justify-content: center;
width: 41px;
height: 30px;
flex-shrink: 0; 
border-radius: 0px 5px 5px 0px;
border: 1px solid rgba(55, 55, 55, 0.30);
cursor: pointer;
padding:6px 6px;
`

export const Buttonwrapper2=styled.div`
display: flex;

`


export const Cost =styled.div`
display: flex;
flex-direction: column;
gap: 10px;
div{
    display:flex;
    gap: 5px;
}

`
export const Inputwrapper=styled.div`
display:flex;
align-items:center;
gap: 10px;

input{
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
}`

export const Drawerwrapper=styled.div`
display:none;
@media only screen and (max-width:1100px) {
 display :flex ;
}
@media only screen and (max-width:700px) {
    display: none;
}`

export const Brand =styled.div`
display: flex;
flex-direction: column;
gap: 10px;

`
export const Company =styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const License =styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const Travelers =styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const Location =styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const Line =styled.div`
display: flex;
width: 100%;
div{
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(55,55,55,0.3);
    margin: 10px 0px;
}
`


export const Column =styled.div`
display:flex;
flex-direction:column;
justify-content: center;


input{
width: 91px;
height: 36px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(55, 55, 55, 0.60);
}
label{
color: var(--text, #373737);
font-family: sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
}
p{
color: #FFF;
font-family: sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`

export const Columnwrapper =styled.div`
display:flex;
align-items: center;
gap:30px;
display: flex;
justify-content: space-between;

`

export const Imgwrapper=styled.div`
img{
width: 15px;
height: 15px;
flex-shrink: 0;

}`
export const Centerjust =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
P{
    color: #000;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}

`
export const Centeralign=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:${props => props.$Vmenu ? '100%':''};
h3{
    display: flex;
    width: 100%;
}
h4{
    display: flex;
    width:100%;
}
@media only screen and (max-width:500px) {
  display  : flex;
  width: ${props => props.$Vmneu ? '100%':''};
}`

export const Companywrapper=styled.div`
display:flex;
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}`

export const Ratewrapper=styled.div`
display:flex;
justify-content: ${props => props.$Vmenu ? 'space-between':'center'};
gap: 5px;
padding: 5px 10px;
//justify-content: end;
`

export const Button1 =styled.button`
display: flex;
justify-content: center;
align-items: center;
padding:5px ;
border-radius:20px;
width: 94px;
height: 35px;
flex-shrink: 0;
background-color:#006DAB;
border: none;
color: white;
font-family: sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor:pointer;
`

export const Buttonwrapper1=styled.div`
display:flex;
justify-content:center;
:hover{
    background-color:var(--sariq, #FF7A00);
}
//:hover{
 //color:${props=> props.$cancel ? "black":"black"};
 //border: 2px solid #006DAB;
 //background-color:${props=> props.$cancel ? "transparent":"transparent"};
//}
gap: 20px;
 `

export const CardContainer1=styled.div`
display: flex;
justify-content: center;
border-radius: 20px;
padding: 15px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
width: 75px;
height: 90px;
flex-shrink: 0;
img{
    width: 80px;
    height: 50px;
}
`
 export const Compare =styled.div`
 display:flex;
 flex-direction:column;
 p{
    color:#006DAB ;
    padding: 5px 0px 5px 20px;
 }`

export const CardContainer1wrap=styled.div`
display:flex;
justify-content:space-between;
padding:20px 5%;
cursor:pointer;`

export const Border = styled.div`
  width: 100%;
  max-width: 1450px;
  width: ${(props) => (props.$width100 ? `100%` : ``)};
  height: 1px;
  background: rgba(55, 55, 55, 0.3);
  margin: 15px 0px 30px 0px;
  margin: ${(props) => (props.$margin0 ? `0px` : ``)};
  margin-top: ${(props) => (props.$marginTop6 ? `5px` : ``)};
  margin: ${(props)=> props.$marginBottom30 ? `0px 0px 10px 0px` : ``};
`;

export const CostTitle = styled.h2`
  padding-top: ${(props) => (props.$paddingTop ? `13px` : `0px`)};
  border: 0px solid black;
  color: ${(props) => (props.$colorBlue ? `#006DAB` : `#373737`)};
  font-family: Montserrat;
  font-size: ${(props) => (props.$fontSize27 ? `27px` : `18px`)};
  font-style: normal;
  font-weight: ${(props) => (props.$fontWeight700 ? `700` : `600`)};
  line-height: 100%; /* 18px */
  @media only screen and (max-width: 600px) {
    font-size: ${(props) => (props.$fontSize27 ? `22px` : ``)};

  }
`;
export const AccordionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;





