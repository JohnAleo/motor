import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from '../../styles/navbarstyle';
import { ListItemText } from '@mui/material';
export default function DrawerRight() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
    <React.Fragment>
      <ButtonGroup variant="outlined">
        {['right'].map((anchor) => (
          <Button key={anchor} onClick={toggleDrawer(anchor, true)} 
          style={{color:' var(--blue, #006DAB)',alignItems:'center'}}>
            <MenuIcon/>
          </Button>
        ))}
      </ButtonGroup>
      {['top', 'right', 'bottom', 'left'].map((anchor) => (
        <Drawer
          key={anchor}
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      ))}
    </React.Fragment>
  );
}