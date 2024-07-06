import React, { useEffect, useRef } from 'react'
import { Copymapwrapper,  Description,  Information,  Infosection, 
   Infosection1, 
   Infosectionleft, 
   Infosectionmiddle, 
   Infosectionright, 
   Linewrapper, 
   Location, 
   Locationwrapper, Logo, Mapwrapper, 
   Phone,
   Time} from '../../styles/campingstyle';
import { useParams } from 'react-router-dom';
import { camping } from '../../mock/camping';
import CampingCarousel from '../../swiper/createcarousel';
import Button from "@mui/material/Button";
import clock from '../../assets/camping-place/clock.svg'
import home from '../../assets/camping-place/home.svg'
import location from '../../assets/camping-place/location.svg'
import phone from '../../assets/camping-place/phone.svg'
const DetailCamping = () => {
  const{id}=useParams();
  const detaildata= camping.maindata.find(
    (value)=> value.id===parseInt(id))
    console.log(detaildata);
    // map code
      const new_script = (src) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.addEventListener("load", () => {
            resolve();
          });
          script.addEventListener("error", (e) => {
            reject(e);
          });
          document.head.appendChild(script);
        });
      };
    
      useEffect(() => {
        const my_script = new_script(
          "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1d1f9885b44c0843aebe6424ba0c69d8"
        );
        my_script.then(() => {
          console.log("script loaded!!!");
          const kakao = window["kakao"];
          const latitude=detaildata.campsite.map.latitude;
          const longitude=detaildata.campsite.map.longitude;

          
          kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            const options = {
              center: new kakao.maps.LatLng(latitude, longitude),
              level: 3,
            };
            const map = new kakao.maps.Map(mapContainer, options);
    
            const markerPositions = [new kakao.maps.LatLng(latitude, longitude),
              
            ];
            
    
            markerPositions.forEach((position) => {
              const marker = new kakao.maps.Marker({
                position: position,
              });
              marker.setMap(map);
            });
          });
        });
      }, [
        detaildata.campsite.map.latitude,
        detaildata.campsite.map.longitude,
      ]);
      const addressRef = useRef(null);
 //map end

  return (
   <div style={{padding:'100px 10%'}}>

   <CampingCarousel/>
    <Information>
      <h1>{detaildata.campsite.name}</h1>
      <Copymapwrapper>
      <Locationwrapper>
        <h1>{detaildata.campsite.location}</h1>
      </Locationwrapper>
      <Button size="small"
              sx={{
                height: "25px",
                width: "120px",
                border: "1px solid  #FF7A00",
                color: "#FF7A00"}} >
        Copy map
      </Button>
      </Copymapwrapper>
   </Information>
   <Infosection>
    <Linewrapper>
        <div></div>
    </Linewrapper>
    
      <Infosection1>
        <Infosectionleft>
          <Location><img src={location} alt="location" /> {detaildata.campsite.location}</Location>
          <Phone><img src={phone} alt="phone" /><p>01001018596</p></Phone>
        </Infosectionleft>
        <Infosectionmiddle>
          <Time><img src={clock} alt="clock" /> <p>from</p> <h5>{detaildata.campsite.from}</h5> <p>to</p> <h5>{detaildata.campsite.to}</h5> </Time>
          <Logo><img src={home} alt="home" /> <p>{detaildata.campsite.logo}</p></Logo>
        </Infosectionmiddle>
        <Infosectionright><div></div></Infosectionright>
      </Infosection1>
      <Description>
        <h4>Description</h4>
        <p>{detaildata.campsite.Explanation}</p>
      </Description>
   </Infosection>
   <Mapwrapper >
      <div id="map" className="map"  />
   </Mapwrapper>
   
    </div>
  )
}

export default DetailCamping;