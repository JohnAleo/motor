import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MotorComponent from '../../components/motor/motor';
import { NavLink } from '../../styles/navbarstyle';

export default function NavbarDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
          <ListItem>
            <ListItemButton>
            <NavLink to ="/motor">
                <p>Motor <img src="" alt="" /></p>
           </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
            <NavLink to="/caravan">
                <p>Caravan <img src="" alt="" /></p>
           </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
            <NavLink to="/tuning">
                <p>Tuning <img src="" alt="" /></p>
           </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
            <NavLink to="used-car">
                <p> Used Car <img src="" alt="" /></p>
           </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
            <NavLink to="camping-place">
                <p>Camping Place <img src="" alt="" /></p>
           </NavLink>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem>
            <ListItemButton>
                <p>Profile</p>
            <ListItemText />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem>
            <ListItemButton>
                <p>My orders</p>
            <ListItemText />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem>
            <ListItemButton>
                <p>Setting</p>
            <ListItemText />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem>
            <ListItemButton>
                <p>Log out</p>
            <ListItemText />
            </ListItemButton>
          </ListItem>
      </List>
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
