import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;`

export const Wrapper=styled.div`
display: flex;
border: 1px solid black;
height: 1000px;
padding: 20px 5%;
background: #fafafa;
`

export const Filtrwrapper=styled.div`
flex:2;
border:1px solid blue;`

export const Catalogwrapper =styled.div`
flex:8;
border:1px solid red;`

export const Carwrapper=styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap:15px;   
`
export const CardContainer=styled.div`
border-radius: 20px;
padding: 15px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
h3{
color: var(--blue, #006DAB);
font-family: Montserrat;
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

export const Button =styled.button`
display: flex;
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
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor:pointer;`

export const Buttonwrapper=styled.div`
display:flex;
justify-content:space-between;
:hover{
 color: white;
 background-color:#006DAB;
}
margin-top: 10px;
 `


export const Filtrdown=styled.div`
display: flex;
flex-direction: column;
gap: 70px;
`

export const Catalogup=styled.div`
`
export const Cost =styled.div`
display: flex;
flex-direction: column;

`
export const Brand =styled.div`
display: flex;
flex-direction: column;
input{
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
margin-top: 20px;
}

`
export const Company =styled.div`
display: flex;
flex-direction: column;
input{
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
margin-top: 20px;
}`
export const License =styled.div`
display: flex;
flex-direction: column;
input{
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
margin-top: 20px;
}`
export const Travelers =styled.div`
display: flex;
flex-direction: column;
input{
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
margin-top: 20px;
}`
export const Location =styled.div`
display: flex;
flex-direction: column;
input{
width: 22px;
height: 22px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
margin-top: 20px;
}`
export const Line =styled.div`
width: 100%px;
height: 1px;
background: rgba(55, 55, 55, 0.30);`
export const Column =styled.div`
display:flex;
flex-direction:column;

input{
width: 91px;
height: 36px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(55, 55, 55, 0.60);
}
label{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
}`

export const Columnwrapper =styled.div`
display:flex;
gap:30px;
display: flex;
justify-content: space-between;`

export const Imgwrapper=styled.div`
img{
width: 15px;
height: 15px;
flex-shrink: 0;

}`
export const Centerjust =styled.div`
display: flex;
justify-content: left;
`
export const Centeralign=styled.div`
display:flex;
justify-content:left;
align-items:center;`