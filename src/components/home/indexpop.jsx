import React from 'react'
import Popup from 'reactjs-popup';
import {
    Videowrapper,Popvideo,
    Titleinside} from '../../styles/indexpop';
import { Blog1, Blog2, Blog3, Blog4, 
  Blog5, Blog6, Blogs, Blogwrapper,
   Buttonplay, Camper, Recommend1,
    Recommend2 } from '../../styles/multicarousel';
import play1 from "../../assets/popup/play1.png"
import play2 from "../../assets/popup/play2.png"
import play3 from "../../assets/popup/play3.png"
import play4 from "../../assets/popup/play4.png"
import play5 from "../../assets/popup/play5.png"
import play6 from "../../assets/popup/play6.png"
import play7 from "../../assets/popup/play7.png"
import re1 from "../../assets/popup/re1.png"
import re2 from "../../assets/popup/re2.png"
import re3 from "../../assets/popup/re3.png"
import re4 from "../../assets/popup/re4.png"
import re5 from "../../assets/popup/re5.png"
import re6 from "../../assets/popup/re6.png"
const Homepop = () => {
  return (
    <>
    <Recommend1>
      <p>Videos</p>
      <div></div>
    </Recommend1>
    <Videowrapper >

      <div>
        <Popup
                  trigger={<Buttonplay className="button"> <img src={play1} alt="play1" /> </Buttonplay>}
                  modal
                  nested> 
                  
    {close => (
      <div className="modal" style={{borderRadius:'15px'}}>
        <Titleinside>
        <h2> Watch our video </h2>
          <p className="close" onClick={close}>
              &times;
            </p>
        </Titleinside>
        <Popvideo>
        
        <iframe
           src="https://www.youtube.com/embed/Y4emGUah2bY?si=hkd6dn4jPgkkFY8O" 
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin" 
           allowfullscreen>
        </iframe>
        </Popvideo>
      </div>
    )}
    </Popup>
    </div>
 
      <div><Popup
   trigger={<Buttonplay className="button"> <img src={play5} alt="play5" /> </Buttonplay>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <Titleinside>
        <h2> Watch our video </h2>
          <p className="close" onClick={close}>
              &times;
            </p>
          
        </Titleinside>
      
      <Popvideo>
      
        <iframe  
        src="https://www.youtube.com/embed/7DTOvEXFlHY?si=141EX3j3ERwJ3wW4" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
        </Popvideo>
        </div>
    )}
   
  </Popup>
  </div>
    
      <div><Popup
    trigger={<Buttonplay className="button"> <img src={play2} alt="play2" /> </Buttonplay>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <Titleinside>
        <h2> Watch our video </h2>
          <p className="close" onClick={close}>
              &times;
            </p>
          
        </Titleinside>
        
          <Popvideo>
        
        <iframe 
        src="https://www.youtube.com/embed/Y6DUdkZ4G8Q?si=gBlMa6KimyEDKkF4" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
        </Popvideo>
        </div>
     
    )}
   
  </Popup>
  </div>
    
      <div><Popup
    trigger={<Buttonplay className="button"> <img src={play3} alt="play3" /> </Buttonplay>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <Titleinside>
        <h2> Watch our video </h2>
          <p className="close" onClick={close}>
              &times;
            </p>
          
        </Titleinside>
       
        <Popvideo>
          
        <iframe 
        src="https://www.youtube.com/embed/xcvDD8fp6AA?si=G00kw8vUeowHKpIb" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
        </Popvideo>
        </div>
    
    )}
   
  </Popup>
  </div>
  
      <div><Popup
    trigger={<Buttonplay className="button"> <img src={play4} alt="play4" /> </Buttonplay>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <Titleinside>
        <h2> Watch our video </h2>
          <p className="close" onClick={close}>
              &times;
            </p>
          
        </Titleinside>
        
        <Popvideo>
         
        <iframe  
        src="https://www.youtube.com/embed/uAZfmRjkXXU?si=PXD9TNxnPEj_1p2v" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
        </Popvideo>
        </div>
  
    )}
   
  </Popup>
  </div>
  
      <div><Popup
    trigger={<Buttonplay className="button"> <img src={play5} alt="play5" /> </Buttonplay>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <Titleinside>
        <h2> Watch our video </h2>
          <p className="close" onClick={close}>
              &times;
            </p>
          
        </Titleinside>
        
        <Popvideo>
        
        <iframe 
        src="https://www.youtube.com/embed/n8aJRy43qT8?si=q6KH6l38BCPEx8Kj" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
        </Popvideo>
        </div>
    
    )}
   
  </Popup>
  </div>
    
      <div><Popup
    trigger={<Buttonplay className="button"> <img src={play6} alt="play6" /> </Buttonplay>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <Titleinside>
        <h2> Watch our video </h2>
          <p className="close" onClick={close}>
              &times;
            </p>
          
        </Titleinside>
        
        <Popvideo>
       
        <iframe 
        src="https://www.youtube.com/embed/Z5eWDgcfzqk?si=u5UOHMiKrOkq9gLa" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
        </Popvideo>
        </div>
     
    )}
   
  </Popup>
  </div>
  
      <div><Popup
   trigger={<Buttonplay className="button"> <img src={play7} alt="play7"  /> </Buttonplay>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <Titleinside>
        <h2> Watch our video </h2>
          <p className="close" onClick={close}>
              &times;
            </p>
          
        </Titleinside>
        
        <Popvideo>
         
        <iframe
        src="https://www.youtube.com/embed/-Ed8KJvfx-0?si=Z6oiR7jeBlXUILmI" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        </iframe>
        </Popvideo>
        </div>
     
    )}
   
  </Popup>
  </div>

  </Videowrapper>
  <Recommend2>
      <p>Blogs</p>
      <div></div>
    </Recommend2>
    <Blogwrapper>
      <Camper>
        <h4>Camper</h4>
        <h3>@camper_1</h3>
        <p>Camping truly is for everyone, from your oldest <br />
          family member to little campers just trekking <br />
          out for the first time. Whether your plan is to <br />
          relax, explore or reconnect, CAMPER <br />
          campgrounds are a great place to create <br />
          memories with those you love.</p>
      </Camper>
      <Blogs>
       <Blog1><img src={re1} alt="play" /></Blog1>
       <Blog2><img src={re2} alt="play" /></Blog2>
       <Blog3><img src={re3} alt="play" /></Blog3>
       <Blog4><img src={re4} alt="play" /></Blog4>
       <Blog5><img src={re5} alt="play" /></Blog5>
       <Blog6><img src={re6} alt="play" /></Blog6>
      </Blogs>
    </Blogwrapper>
  </>
  )
}

export default Homepop;