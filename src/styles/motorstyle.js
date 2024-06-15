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
@media only screen and (max-width:1100px) {
  display  :none ;
}
`

export const Catalogwrapper =styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
//flex:8;
gap: 10px;


`

export const Carwrapper=styled.div`
display: grid;
justify-content: center;
width: 100%;
grid-template-columns: repeat(4, 1fr);
gap:25px;

@media only screen and (max-width: 1350px){
display:grid;
grid-template-columns:repeat(3, 1fr);   
}
@media only screen and (max-width: 1000px){
display:grid;
grid-template-columns:repeat(2, 1fr); 
.Navbarmiddle{
    display: none;
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
flex:2;
flex-direction:column;
justify-content: ${props=> props.$Vmenu ? 'center':'baseline'};
padding: ${props => props.$Vmenu ? "0px 20px":"0px 0px"};
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

export const CardContainer=styled.div`
display: flex;
flex-direction:${props=> props.$Vmenu ? 'row' : 'column'} ;
justify-content: space-around;
border-radius: 20px;
padding: 10px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
width:${props => props.$Vmenu ? '100%': '223px'};
height:${props => props.$Vmenu ? '223px': '307px'} ;

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
`

export const Carimg=styled.div`
display: flex;
flex: 1;
justify-content: center;
align-items: ${props=> props.$Vmenu ? 'center':'baseline'};
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

export const Itemwrapper=styled.div`
display: flex;
width: 970px;
justify-content: space-between;
border-bottom: 1px solid  #37373780;
margin-bottom: 20px;
padding: 5px;
@media only screen and (max-width:1100px){
   width : 100%;
}
div{
    display: flex;
};

`
export const Sortwrapper=styled.div`
@media only screen and (max-width:1100px) {
        display: flex;
        
    }
`

export const Itemleft=styled.div`
display: flex;
align-items: center;
flex: 1;

p{
display: flex;
align-items: center;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
margin-left: 20px;
}
h5{
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%;

}
div{
    display: flex;
    justify-content: start;
    gap: 20px;
    p{
        @media only screen and (max-width:700px) {
         display   :none ;
        }
    }
    input{
        border:1px solid #37373760;
        border-radius:5px;
        padding: 5px;
        margin-left: 20px;
        }
        @media only screen and (max-width:700px){
            display   :flex ;
            justify-content: space-between;
        }
}
@media only screen and (max-width:700px){
            display   :flex ;
            flex-direction: column;
        }
`
export const Item =styled.div`
display: flex;
@media only screen and (max-width:700px){
            display   :flex ;
            //margin-left:-160px;
        }
      
`

export const Iwrapper=styled.div`
display:flex;
align-items: center;

div{
    display: none;
    @media only screen and (max-width:1100px) {
      display  :flex ;
    }
}

`

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
@media only screen and (max-width:700px) {
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
input{
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
width: 100%px;
height: 1px;
background: rgba(55, 55, 55, 0.30);
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


`
export const Centeralign=styled.div`
display:flex;
justify-content:space-between;
align-items:center;`

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
background-color:${props=> props.$search ? "#006DAB":'var(--sariq, #FF7A00)'};
border: none;
color: white;
font-family: sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor:pointer;`

export const Buttonwrapper1=styled.div`
display:flex;
justify-content:center;
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




