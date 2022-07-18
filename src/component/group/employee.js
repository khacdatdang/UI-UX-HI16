import React from 'react'
import './employee.scss';
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import KPI from './kpi';
import { Link } from 'react-router-dom';

function Employee(props){

    return (
        <div className="employee">
            <div className='employee--menu'>
            <Box sx={{ width: '200px', maxWidth: '200px', bgcolor: 'rgb(19, 179, 128)', 
            color: "white", display: "flex", justifyContent: "space-between" }}>
                <ListItem disablePadding onClick={() => window.location.href = "/group"}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ArrowBackIosIcon sx={{ fontSize: "35px", marginRight: "10px", color: "white" }} />
                        </ListItemIcon>
                        {
                            (props.group === "A1")?(
                                <ListItemText primary="Đơn vị A1"/>
                            ):null
                        }
                        {
                            (props.group === "A2")?(
                                <ListItemText primary="Đơn vị A2"/>
                            ):null
                        }
                        {
                            (props.group === "A3")?(
                                <ListItemText primary="Đơn vị A3"/>
                            ):null
                        }
                    </ListItemButton>
                </ListItem>
            </Box>
            <Box sx={{ width: '50px', maxWidth: '50px', bgcolor: 'rgb(19, 179, 128)', 
            color: "white", display: "flex", justifyContent: "space-between" }}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <Link to={"../"+props.group+"/employee"}>  <PeopleAltIcon /></Link>
                    </ListItemButton>
                </ListItem>
            </Box>
            </div>
            <div className='employee--main'>
                <KPI />
            </div>
        </div>
    );
}

export default Employee;