import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccordionTransition from './accordion';
import Premium from './premium';
import Question from './question';
import { Inform, Item1, Mapwrapper, Signbutton,
   Signbuttonwrapper, Signtab} from '../../styles/premiumstyle';
import Map from './map';
import emailjs from '@emailjs/browser';




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

export default function BasicTabs() {
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
      <Box sx={{ borderBottom: 1, borderColor: 'divider', background:'lightblue',padding:'5px 5%'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item reviews" {...a11yProps(0)} />
          <Tab label="Q&A" {...a11yProps(1)} />
          <Tab label="FAQ" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Premium />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} >
        <Item1 >
          <AccordionTransition  />
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
        <Mapwrapper>
          <Map />
          <form ref={form} onSubmit={sendEmail}>
          <Signtab>
            <p>Have you got a question</p>
            <Inform>
                <input type="text" placeholder='Name' />
            </Inform>
            <Inform>
              <input type="email" placeholder='Email' />
            </Inform>
            <Inform $quest>
              <textarea type="text" placeholder='Your question' />
            </Inform>
            <Signbuttonwrapper>   
              <Signbutton>Send question</Signbutton>    
            </Signbuttonwrapper>
        
          </Signtab>
          </form>
          
        </Mapwrapper>
      </CustomTabPanel>
    </Box>
  );
}
