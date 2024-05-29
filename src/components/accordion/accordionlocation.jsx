import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import {Location, Inputwrapper, Line } from '../../styles/motorstyle';



export default function AccordionItemLocation() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
      style={{border:'none',boxShadow:'none'}}
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{background:'#FAFAFA'}}
          
        >
          <Typography >Location</Typography>
        </AccordionSummary>
        <AccordionDetails style={{background:'#FAFAFA'}}>
          <Typography>
          <Location>
          <Line></Line>
          <Inputwrapper>
              <input type="checkbox" /><label>Seoul</label>
          </Inputwrapper>
          <Inputwrapper>
              <input type="checkbox" /><label>Incheon</label>
          </Inputwrapper>
          <Inputwrapper>
              <input type="checkbox" /><label>Busan</label>
          </Inputwrapper>
        </Location>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
