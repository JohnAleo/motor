import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;`

export const Wrapper=styled.div`
display: flex;
border: 1px solid black;
height: 1000px;
padding: 20px 15%;
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
border: 1px solid black;
border-radius: 20px;
padding: 5px;
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
padding:10px 15px;
border-radius:15px;
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
padding:10px 5px;`


