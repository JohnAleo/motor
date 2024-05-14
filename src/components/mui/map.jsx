import React from 'react'
import { Mapp, Mappdown, Mappup } from '../../styles/premiumstyle'
import map from '../../assets/muiasset/map.png'
const Map = () => {
  return (
    <Mapp>
        <Mappup><img src={map} alt="mapphoto" /></Mappup>
        <Mappdown>
            <div>
                <p>Phone number:</p>
                <h4>01045552113</h4>
                <h4>01045552113</h4>
            </div>
            <div>
                <p>E-mail</p>
                <h4>logo.uz</h4>
            </div>
        </Mappdown>
    </Mapp>
  )
}

export default Map