import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccordionTransition from '../mui/accordion'
import Question from '../mui/question';
import { Gmail, Item1, Mail, Name, Quest, Questbutton } from '../../styles/premiumstyle';
import Map from '../mui/map';
import emailjs from '@emailjs/browser';
import PremiumCaravan from './premium';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabsCaravan() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iabj6pq', 'template_c8oxzpc', form.current, {
        publicKey: 'MU8LXzN1vOGR_JFXZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item reviews" {...a11yProps(0)} />
          <Tab label="Q&A" {...a11yProps(1)} />
          <Tab label="FAQ" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PremiumCaravan />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Item1>
          <AccordionTransition />
          <Question />
        </Item1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Item1>
          <AccordionTransition />
          <Question />
        </Item1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Item1>
          <Map />
          <Mail>
          <form ref={form} onSubmit={sendEmail}>
            <Name>
              <input type="text" name="user_name" placeholder='Name'/>
            </Name>
            <Gmail>
              <input type="email" name="user_email" className="" placeholder='Email' />
            </Gmail>
            <Quest>
              <textarea name="message" placeholder='Message' />
            </Quest>
            <Questbutton>
              <input type="submit" value="Send" />
            </Questbutton>
          </form>
          </Mail>
        </Item1>
      </CustomTabPanel>
    </Box>
  );
}
