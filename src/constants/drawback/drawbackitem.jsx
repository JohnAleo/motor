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
 import AccordionItemMotor from '../../components/accordion/itemaccordion';
 import AccordionItemCompany from '../../components/accordion/accordioncom';
 import AccordionItemLicense from '../../components/accordion/accordionlisence';
 import AccordionItemTravelers from '../../components/accordion/accordiontraveler';
 import AccordionItemLocation from '../../components/accordion/accordionlocation';

export default function ItemDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(true)}>
      <List>
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

          <ListItem>
            <ListItemButton>
                <AccordionItemMotor/>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
                <AccordionItemCompany/>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
                <AccordionItemLicense/>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
                <AccordionItemTravelers/>  
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
                <AccordionItemLocation/> 
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
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
