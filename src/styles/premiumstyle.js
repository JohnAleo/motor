import styled from "styled-components";

export const Premiumwrapper=styled.div`
display:flex;
flex-direction:column;
`

export const Premiumin=styled.div`
display:flex;
padding:20px 12%;

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
justify-content: space-between;
padding:20px 12%;   
gap:50px;
background-color:#FAFAFA;
@media only screen and (max-width:1100px) {
   display :flex ;
   flex-direction: column;
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
padding:20px 12%;`

export const Item6 =styled.div`
display: flex;
justify-content: space-between;
`

export const Item6left=styled.div`
display: flex;
align-items: center;
gap: 20px;
div{
    h4{
        color: var(--text, #373737);
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    p{
        color: rgba(55, 55, 55, 0.80);
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    h5{
        color: #373737;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}
`
export const Item6right=styled.div`
display: flex;
flex-direction: column;
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
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

`
export const Mappup=styled.div`
display:flex;
height:380px;
width:700px;
@media only screen and (max-width:1100px) {
 display   : flex;
 justify-content: center;
}`

export const Mappdown=styled.div`
display:flex;
justify-content: space-between;
margin-top: 20px;
div{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 340px;
    height: 109px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
   
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


export const Mailpart=styled.div`
display:flex;
form{
    display: flex;
    flex-direction: column;
}`
export const Inform=styled.div`
display:flex;
justify-content:center;
input{
width:390px;
height:50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
border: none;
}
textarea{
width: 390px;
height: 120px;
flex-shrink: 0;
border-radius: 8px;
border:none;
background: rgba(55, 55, 55, 0.10);
}`

export const Signtab=styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
width: 450px;
height: 500px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding: 25px 0px;
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
}
`

