import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';

import {
    Cost,Line
   ,Column,
   Centerjust,
   Button1,
   Buttonwrapper1,
   CardContainer1,
   CardContainer1wrap,
   Compare,
   } from '../../styles/motorstyle';
 import car from '../../assets/mockasset/car.jpeg';
 import AccordionItemCompany from '../../components/accordion/accordioncom';
 import AccordionItemLicense from '../../components/accordion/accordionlisence';
 import AccordionItemTravelers from '../../components/accordion/accordiontraveler';
 import AccordionItemLocation from '../../components/accordion/accordionlocation';

 import { 
   Border,
   CostTitle,
   AccordionsWrapper} from '../../styles/motorstyle';
 import Accordion from "@mui/material/Accordion";
 import AccordionSummary from "@mui/material/AccordionSummary";
 import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
 import AccordionDetails from "@mui/material/AccordionDetails";
 import Typography from "@mui/material/Typography";
 import FormGroup from "@mui/material/FormGroup";
 import FormControlLabel from "@mui/material/FormControlLabel";
 import Checkbox from "@mui/material/Checkbox";
 import { campcar } from '../../mock/mockdata';
export default function ItemDrawer() {
  const [open, setOpen] = React.useState(false);
  const data = campcar.maindata;
  const dataLength = data.length;
 
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [selectedLabel, setSelectedLabel] = React.useState([])

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
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(true)}>
      <List style={{background:'#FAFAFA'}}>
          <ListItem>
            <ListItemButton>
              <Cost>
              <Centerjust>
                  <p>Cost of car</p> 
              </Centerjust>
              <Line></Line>
                  <div>
                    <Column>
                        <label>from</label>
                        <input type="text" />
                    </Column>
                    <Column>
                        <label>to</label>
                        <input type="text" />
                    </Column>
                  </div>
              </Cost>
            </ListItemButton>
          </ListItem>

          <ListItem  style={{background:'#FAFAFA'}}>
            <ListItemButton style={{background:'#FAFAFA'}}>
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
            </ListItemButton>
          </ListItem>

          <ListItem  style={{background:'#FAFAFA'}}>
            <ListItemButton  style={{background:'#FAFAFA'}}>
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
            </ListItemButton>
          </ListItem>

          <ListItem style={{background:'#FAFAFA'}}>
            <ListItemButton style={{background:'#FAFAFA'}}>
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
            </ListItemButton>
          </ListItem>

          <ListItem style={{background:'#FAFAFA'}}>
            <ListItemButton style={{background:'#FAFAFA'}}>
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
            </ListItemButton>
          </ListItem>

          <ListItem style={{background:'#FAFAFA'}}>
            <ListItemButton style={{background:'#FAFAFA'}}>
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
            </ListItemButton>
          </ListItem>

          <ListItem style={{background:'#FAFAFA'}}>
            <ListItemButton style={{background:'#FAFAFA'}}>
            <Buttonwrapper1>
              <Button1>Cancel</Button1>
              <Button1 $search>Search</Button1>
            </Buttonwrapper1>
            </ListItemButton>
          </ListItem>

          <Buttonwrapper1>
          <Compare>
              <p>Compare</p>
              <CardContainer1wrap>
                <CardContainer1> <img src={car} alt="car" /></CardContainer1>
                <CardContainer1> <img src={car} alt="car" /></CardContainer1>
                <CardContainer1> <img src={car} alt="car" /></CardContainer1>
                </CardContainer1wrap>
            </Compare>
            </Buttonwrapper1>
      </List>

      <Divider />
     
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
