import React, { useState } from 'react'
import { Catalogwrapper, Container,
   Filtrwrapper, Wrapper,
   Cost
  ,Column,
  Centerjust,
  Button1,
  Buttonwrapper1,
  CardContainer1,
  CardContainer1wrap,
  Compare,
  Itemwrapper,
  Itemleft,
  Itemright,
  Buttonwrapper2,
  Button2,
  Button3,
  Filtrin,
  Border,
  CostTitle,
  AccordionsWrapper,
  DraweriPhone,
  Itemdrawerwrapper,
  Itemlength,
  Selectwrapper,
  Sortby,
  Selectin} from '../../styles/motorstyle';
import { Bgwrapper2 } from '../../styles/navbarstyle';
import car from '../../assets/mockasset/car.jpeg';
import hMenu from '../../assets/motor/hMenu.png';
import vMenu from '../../assets/motor/vMenu.png';
import HMenu from './Hmenu';
import VMenu from './Vmenu';
import ItemDrawer from '../../constants/drawback/drawbackitem';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { tuning } from '../../mock/mockdatatuning';

const TuningComponent = () => 
    { ////H and V position
      const [active, setActive]=useState(true);
      const data = tuning.maindata;
      const dataLength = data.length;

///set active of grid and column buttons
const [view, setView] = React.useState('list');

const handleChange = (event, nextView) => {
  setView(nextView);
};
     
      function handleHMenu(){
        setActive(true);
      }
      function handleVMenu(){
        setActive(false);
      }
    ////
    ///////////////////////////////
    ////Sidebar Filter
    const [selectedLabel, setSelectedLabel] = useState([])
    
    const handleCheckBoxChange = (labelName) => {
     const isSelected = selectedLabel.includes(labelName)
     setSelectedLabel(
       isSelected 
       ? selectedLabel.filter((itsName) => itsName !== labelName)
       : [...selectedLabel, labelName]
     )
    }
    
    const filteredData = data.filter(
     (item) => 
     selectedLabel.length === 0 ||
     selectedLabel.includes(item.car.company)||
     selectedLabel.includes(item.car.license)||
     selectedLabel.includes(item.car.people)||
     selectedLabel.includes(item.car.location)
    )
    ////////////////////////////
    
     
      console.log ("filtered data", filteredData)
      return (
       <>
        <Container>
          <Bgwrapper2>
            <p>Home / Tunings</p>
            <h5>Our ranges</h5>
            <h2>Tunings</h2>
          </Bgwrapper2>
          
          <Wrapper>
            <Filtrwrapper>
              <Filtrin>
              <Cost>
                <Centerjust>
                  <p>Cost of car</p> 
                </Centerjust>
                <Border></Border>
                <div>
                    <Column>
                        <label>from</label>
                        <input type="text"/>
                    </Column>
                    <Column>
                        <label>to</label>
                        <input type="text" />
                    </Column>
                </div>
            </Cost>
            
            <AccordionsWrapper>
            <Accordion
              defaultExpanded
              sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ padding: "0px" }}
              >
                <CostTitle>Brand</CostTitle>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0px" }}>
                <Typography>
                  <Border $marginBottom30></Border>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="다온티앤티" onChange={() => handleCheckBoxChange("다온티앤티")}/>
                    <FormControlLabel control={<Checkbox />} label="제일모빌"  onChange={() => handleCheckBoxChange("제일모빌")}/>
                    <FormControlLabel control={<Checkbox />} label="영남캠핑카"  onChange={() => handleCheckBoxChange("영남캠핑카")}/>
                    <FormControlLabel control={<Checkbox />} label="영남캠핑카" onChange={() => handleCheckBoxChange("영남캠핑카")}/>
                    <FormControlLabel control={<Checkbox />} label="한울캠핑카" onChange={() => handleCheckBoxChange("한울캠핑카")}/>
                    <FormControlLabel control={<Checkbox />} label="훼미리캠핑카" onChange={() => handleCheckBoxChange("훼미리캠핑카")}/>
                    <FormControlLabel control={<Checkbox />} label="에이스캠퍼" onChange={() => handleCheckBoxChange("에이스캠퍼")}/>
                    <FormControlLabel control={<Checkbox />} label="월든모빌" onChange={() => handleCheckBoxChange("월든모빌")}/>
                    <FormControlLabel control={<Checkbox />} label="위드원모터스" onChange={() => handleCheckBoxChange("위드원모터스")}/>
                    <FormControlLabel control={<Checkbox />} label="미스터캠퍼" onChange={() => handleCheckBoxChange("미스터캠퍼")}/>
                    <FormControlLabel control={<Checkbox />} label="드림캠핑카" onChange={() => handleCheckBoxChange("드림캠핑카")}/>
                    <FormControlLabel control={<Checkbox />} label="모터홈코리아" onChange={() => handleCheckBoxChange("모터홈코리아")}/>
                  </FormGroup>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionsWrapper>
    
            <AccordionsWrapper>
            <Accordion
              defaultExpanded
              sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ padding: "0px" }}
              >
                <CostTitle>Company</CostTitle>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0px" }}>
                <Typography>
                  <Border $marginBottom30></Border>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="다온티앤티" onChange={() => handleCheckBoxChange("다온티앤티")}/>
                    <FormControlLabel control={<Checkbox />} label="제일모빌"  onChange={() => handleCheckBoxChange("제일모빌")}/>
                    <FormControlLabel control={<Checkbox />} label="영남캠핑카"  onChange={() => handleCheckBoxChange("영남캠핑카")}/>
                    <FormControlLabel control={<Checkbox />} label="영남캠핑카" onChange={() => handleCheckBoxChange("영남캠핑카")}/>
                    <FormControlLabel control={<Checkbox />} label="한울캠핑카" onChange={() => handleCheckBoxChange("한울캠핑카")}/>
                    <FormControlLabel control={<Checkbox />} label="훼미리캠핑카" onChange={() => handleCheckBoxChange("훼미리캠핑카")}/>
                    <FormControlLabel control={<Checkbox />} label="에이스캠퍼" onChange={() => handleCheckBoxChange("에이스캠퍼")}/>
                    <FormControlLabel control={<Checkbox />} label="월든모빌" onChange={() => handleCheckBoxChange("월든모빌")}/>
                    <FormControlLabel control={<Checkbox />} label="위드원모터스" onChange={() => handleCheckBoxChange("위드원모터스")}/>
                    <FormControlLabel control={<Checkbox />} label="미스터캠퍼" onChange={() => handleCheckBoxChange("미스터캠퍼")}/>
                    <FormControlLabel control={<Checkbox />} label="드림캠핑카" onChange={() => handleCheckBoxChange("드림캠핑카")}/>
                    <FormControlLabel control={<Checkbox />} label="모터홈코리아" onChange={() => handleCheckBoxChange("모터홈코리아")}/>
                  </FormGroup>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionsWrapper>
            
            <AccordionsWrapper>
            <Accordion
              defaultExpanded
              sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ padding: "0px" }}
              >
                <CostTitle>License type</CostTitle>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0px" }}>
                <Typography>
                  <Border $marginBottom30></Border>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="1종 보통" onChange={() => handleCheckBoxChange("1종 보통")}/>
                    <FormControlLabel control={<Checkbox />} label="2종 보통" onChange={() => handleCheckBoxChange("2종 보통")}/>
                    <FormControlLabel control={<Checkbox />} label="3종 보통" onChange={() => handleCheckBoxChange("3종 보통")}/>
                  </FormGroup>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionsWrapper>
    
            <AccordionsWrapper>
            <Accordion
              defaultExpanded
              sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ padding: "0px" }}
              >
                <CostTitle>Number of travelers</CostTitle>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0px" }}>
                <Typography>
                  <Border $marginBottom30></Border>
                  <i style={{color: "#006DAB"}}>*Children are considered</i>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="3인"  onChange={() => handleCheckBoxChange("3인")}/>
                    <FormControlLabel control={<Checkbox />} label="4인"  onChange={() => handleCheckBoxChange("4인")}/>
                    <FormControlLabel control={<Checkbox />} label="5인"  onChange={() => handleCheckBoxChange("5인")}/>
                    <FormControlLabel disabled control={<Checkbox />} label="6인"  onChange={() => handleCheckBoxChange("6인")}/>
                  </FormGroup>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionsWrapper>
           
            <AccordionsWrapper>
            <Accordion
              defaultExpanded
              sx={{ boxShadow: "none", backgroundColor: "#FAFAFA", width: "100%" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ padding: "0px" }}
              >
                <CostTitle>Location</CostTitle>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0px" }}>
                <Typography>
                  <Border $marginBottom30></Border>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="경상권" onChange={() => handleCheckBoxChange("경상권")}/>
                    <FormControlLabel control={<Checkbox />} label="수도권" onChange={() => handleCheckBoxChange("수도권")}/>
                    <FormControlLabel control={<Checkbox />} label="경상권" onChange={() => handleCheckBoxChange("경상권")}/>
                    <FormControlLabel control={<Checkbox />} label="충청권" onChange={() => handleCheckBoxChange("충청권")}/>
            
                  </FormGroup>
                </Typography>
              </AccordionDetails>
            </Accordion>
            </AccordionsWrapper>
                <Buttonwrapper1>
                  <Button1>Cancel</Button1>
                  <Button1 $search>Search</Button1>
                </Buttonwrapper1>
                <Compare>
                  <p>Compare</p>
                  <CardContainer1wrap>
                    <CardContainer1> <img src={car} alt="car" /></CardContainer1>
                    <CardContainer1> <img src={car} alt="car" /></CardContainer1>
                    <CardContainer1> <img src={car} alt="car" /></CardContainer1>
                  </CardContainer1wrap>
                </Compare>
              </Filtrin>
            </Filtrwrapper>
          {/*Filtr end  */}
        
    
            <Catalogwrapper>
            <Itemwrapper>
            <Itemleft>
                <DraweriPhone>
                    <Itemdrawerwrapper>
                      <ItemDrawer/>
                    </Itemdrawerwrapper> 
                    <Itemlength>
                      <p>Item</p>
                      <h5>{tuning.maindata.length}</h5>
                    </Itemlength>
                </DraweriPhone>
                <Selectwrapper>
                  <Sortby>Sort by</Sortby>
                  <Selectin >
                    <select>
                      <option value="">select</option>
                      <option value="">A</option>
                      <option value="">B</option>
                      <option value="">C</option>
                    </select>
                  </Selectin>
                </Selectwrapper>
            </Itemleft>
            <Itemright>
              <Selectwrapper>
                  <select style={{width:'82px'}}>
                      <option value="">60</option>
                      <option value="">A</option>
                      <option value="">B</option>
                      <option value="">C</option>
                    </select>
              </Selectwrapper>
              <Buttonwrapper2>
                <Button2 onClick={handleHMenu}><img src={hMenu} alt="menu-H" /></Button2>
                <Button3 onClick={handleVMenu}><img src={vMenu} alt="menu-V" /></Button3>
              </Buttonwrapper2>
            </Itemright>
          </Itemwrapper>
              <Border $width100 $margin0 $marginTop6></Border>
                  <>
                  {
                    active ? <HMenu />: <VMenu />
                  }
                  </> 
            </Catalogwrapper>
          </Wrapper>
        </Container>
       
         </>
      )
    }
export default TuningComponent;