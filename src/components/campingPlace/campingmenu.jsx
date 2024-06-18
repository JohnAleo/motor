import React from "react";
import { Link } from "react-router-dom";
import { camping } from "../../mock/camping";
import { Campercontainer, Camperinside, Camperwrapper, Campwrapper } from "../../styles/campingstyle";


const CampingMenu=() => {
    const data = camping.maindata;
    const dataLength = data.length;
    console.log("data:", data.length)
    return(
        <Campwrapper>
            {
                data.map((value,key) => {
                    return(
                        <Link to= {`${value.id}`} style={{textDecoration:'none'}}>
                            <Campercontainer key={key}>
                                <Camperwrapper>
                                    <Camperinside>
                                        <img src={value.campsite.photo} alt="camping-place" />
                                        <p>{value.campsite.name}</p>
                                        <div>{value.campsite.location}</div>
                                    </Camperinside>
                                </Camperwrapper>
                            </Campercontainer>
                        </Link>
                    )
                })
            }
        </Campwrapper>
    )
}
export default CampingMenu;