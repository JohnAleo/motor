import React from 'react'
import { DetailContainer } from '../../styles/campingstyle';
import { useParams } from 'react-router-dom';
import { camping } from '../../mock/camping';
const DetailCamping = () => {
  const{id}=useParams();
  const detaildata= camping.maindata.find(
    (value)=> value.id===parseInt(id))
    console.log(detaildata);
  return (
   <>
     <DetailContainer>
      <div>{detaildata.campsite.photo}</div>
      <div>dlkcrkrvv</div>
      <p>fdvdfvgrbgrbgrb</p>
      <h1>ergergregr</h1>

      </DetailContainer>
   
    </>
  )
}

export default DetailCamping;