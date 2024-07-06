
import { Mapp, Mappdown, Mappup } from '../../styles/premiumstyle'
import { useEffect, useRef } from 'react';



const Map = () => {
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
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(37.2405741, 127.1785572),
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, options);

        const markerPositions = [new kakao.maps.LatLng(35.88419, 128.7029796),
          new kakao.maps.LatLng(37.2405741, 127.1785572),
        ];
        

        markerPositions.forEach((position) => {
          const marker = new kakao.maps.Marker({
            position: position,
          });
          marker.setMap(map);
        });
      });
    });
  }, []);
  const addressRef = useRef(null);

  return (
    <>
    
    <Mapp>
        <Mappup><div id="map" className="map"  /></Mappup>
        <Mappdown>
            <div>
                <p>Phone number:</p>
                <h4>01045552113</h4>
                <h4>01045552113</h4>
            </div>
            <div>
                <p>E-mail</p>
                <h4>logo.uz</h4>
                <h4>Camping.com</h4>
            </div>
        </Mappdown>
    </Mapp>
    </>
  )

}
export default Map;