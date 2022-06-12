import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Slide } from '@mui/material';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };


function AssignModal({ open, handleClose, data, handleAssign}) {
  console.log(data)
  const [assignee, setassignee] = React.useState('')
  const [staff, setstaff] = React.useState(['Dang Khac Dat', 'Vo Hoang Nam', 'Phung Xuan Quan', 'Vu Ngoc Minh', 'Nguyen Hoang Son'])
  const handleChange = (event) => {
    setassignee(event.target.value)
  };

  const saveChange = () => {
    handleAssign(data, assignee)
    handleClose()
    console.log(data)
  }

  
  return (
    <BootstrapDialog
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
  >
    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Add assignee
    </BootstrapDialogTitle>
    <DialogContent dividers>
    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 240 }}>
              <InputLabel id="demo-dialog-select-label">Assignee</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={assignee}
                onChange={handleChange}
                input={<OutlinedInput label="Assignee" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  staff.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Box>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={saveChange}>
        Save changes
      </Button>
    </DialogActions>
  </BootstrapDialog>
  )
}

export default AssignModal