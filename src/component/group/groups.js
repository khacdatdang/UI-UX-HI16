import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

export default function ListGroup() {
  return (
    <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding onClick={() => window.location.href = "/a1/kpi"}>
            <ListItemButton>
              <ListItemIcon>
                <GroupsRoundedIcon sx={{ fontSize: "35px", marginRight: "100px" }} />
              </ListItemIcon>
              <ListItemText primary="Đơn vị A1" />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ margin: "8px 0px" }} />
          <ListItem disablePadding onClick={() => window.location.href = "/a2/kpi"}>
            <ListItemButton>
              <ListItemIcon>
                <GroupsRoundedIcon sx={{ fontSize: "35px", marginRight: "100px" }} />
              </ListItemIcon>
              <ListItemText primary="Đơn vị A2" />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ margin: "8px 0px" }} />
          <ListItem disablePadding onClick={() => window.location.href = "/a3/kpi"}>
            <ListItemButton>
              <ListItemIcon>
                <GroupsRoundedIcon sx={{ fontSize: "35px", marginRight: "100px" }} />
              </ListItemIcon>
              <ListItemText primary="Đơn vị A3" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}