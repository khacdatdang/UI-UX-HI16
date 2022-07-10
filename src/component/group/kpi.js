import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TransferList from './checklist';
import FormDialog from './handleAdd';
import './kpi.scss';
export default function KPI() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Dự án xây cầu đường A1
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Dealine: 9/2022</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='set-kpi'>
                <TransferList />
                <FormDialog />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Dự án bảo trì đường ống A1
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Dealine: 9/2022</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='set-kpi'>
                <TransferList />
                <FormDialog />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}