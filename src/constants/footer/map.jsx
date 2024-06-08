const KakaoMap = () => {
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
          "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey={KEY}"
        );
        my_script.then(() => {
          console.log("script loaded!!!");
          const kakao = window["kakao"];
          kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            const options = {
              center: new kakao.maps.LatLng(35.88419, 128.7029796),
              level: 3,
            };
            const map = new kakao.maps.Map(mapContainer, options);
    
            const markerPositions = [new kakao.maps.LatLng(35.88419, 128.7029796)];
    
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
      <div id="map" className="map" />

      .map {
        flex: 1;
        height: 400px;
        /* width: 400px;
        height: 400px; */
        align-items: center;
        justify-content: center;
      }