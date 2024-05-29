import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import {Travelers, Inputwrapper, Line } from '../../styles/motorstyle';



export default function AccordionItemTravelers() {
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
          style={{background:'#FAFAFA'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Travelers</Typography>
        </AccordionSummary >
        <AccordionDetails style={{background:'#FAFAFA'}}>
          <Typography>
          <Travelers>
          <Line></Line>
          <Inputwrapper>
              <input type="checkbox" /><label>2</label>
          </Inputwrapper>
          <Inputwrapper>
              <input type="checkbox" /><label>3-4</label>
          </Inputwrapper>
          <Inputwrapper>
                <input type="checkbox" /><label>5+</label>
          </Inputwrapper>
        </Travelers>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
