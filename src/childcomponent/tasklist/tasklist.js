import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Chip, ListItemButton, Slide, Typography } from '@mui/material';
import { margin } from '@mui/system';
import AssignModal from '../assignModal/assignModal';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';
import { red } from '@mui/material/colors';
import { Link } from "react-router-dom";
import DetailTaskModal from '../detailTaskModal.js/detailTaskModal';
import { DataGrid } from '@mui/x-data-grid'

export default function TaskList() {
  const [dummyData, setdummyData] = useState(localStorage.getItem("taskList") ? JSON.parse((localStorage.getItem("taskList"))) : [])
  const [open, setOpen] = React.useState(false);
  const [clickedRow, setclickedRow] = React.useState({
    title : "",
    state: '',
    start : '',
    end: '',
    assignee: '',
    evaluation : {volumn : '',quality : '', process :'',mark : '',summary : '', date : ''}
  })

  const columns  = [
    { field: 'id', headerName: 'STT', width: 70 },
    { field: 'title', headerName: 'Tên công việc', width: 300 },
    { field: 'start_date', headerName: 'Thời gian bắt đầu', width: 150 },
    { field: 'end_date', headerName: 'Thời gian kết thúc', width: 150 },
    {
      field: 'assignee',
      headerName: 'Người thực hiện',
      width: 450,
    }
  ];

  const handleClickOpen = (data) => {
    setclickedRow(data)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const setStatus = (task, status) => {
    console.log(task);
    const newItems = dummyData.map((item) => {
      if (item.title === task.title)
        item.status = status
    })
    setdummyData(newItems)
  }

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpenModal = (row) => {
    console.log(row);
    setclickedRow(row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  React.useEffect(() => {
    //Runs on every render
    if (localStorage.getItem("taskList")){
      setdummyData(JSON.parse((localStorage.getItem("taskList"))))
      console.log(dummyData)
    }
    else 
      localStorage.setItem("taskList", JSON.stringify(dummyData))
  }, []);

  const handleAssign = (taskItem, assignee) => {
    const newItems = dummyData.map((task) => {
      if (task.title === taskItem.title) {
        console.log(taskItem.title)
        task.assignee = assignee
      }
      return task;
    });
    setdummyData(newItems);
  }
  return (
    // <TableContainer component={Paper} sx = {{marginTop: 12}} >
    <Paper sx = {{paddingTop: 10, paddingBottom: 3, height : 1000, paddingLeft: 3, paddingRight: 3}}  >
    <Link to ="/newJob"> 
        <Button variant = "outlined" sx ={{marginTop: 2, marginBottom: 4}}> Tạo công việc mới</Button>
      </Link>
      <DataGrid
        autoHeight 
        rows={dummyData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        onRowDoubleClick={(item) => {setclickedRow(item.row); setOpenModal(true)}}
        />
        <DetailTaskModal open={openModal} handleClose = {handleCloseModal} data = {clickedRow} setStatus = {setStatus} />
    </Paper>
    
      
      /* <Table sx={{  }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tên công việc </TableCell>
            <TableCell align="right">Thời hạn </TableCell>
            <TableCell align="center">Người thực hiện</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row" align = "left" sx = {{color : red}}>
                  <ListItemButton component = "button" onClick = {() => {handleClickOpenModal(row)}}>
                    <Typography sx = {{marginRight : 2}}>{row.title}</Typography>   {row.state ?<Chip label = {row.state}/> : ' '}</ListItemButton>
                </TableCell>
              <TableCell align="right">{row.start} --  {row.end}</TableCell>
              <TableCell align="center">{row.assignee ? row.assignee : <Button size = "small" variant="outlined" onClick={() => {handleClickOpen(row)}} >Thêm Thành viên </Button>}</TableCell>
              <AssignModal open = {open} handleClose = {handleClose} data = {clickedRow} handleAssign = {handleAssign}/>
              <DetailTaskModal open={openModal} handleClose = {handleCloseModal} data = {clickedRow} setStatus = {setStatus} />
            </TableRow>
          ))}
        </TableBody >
      </Table> */
      
    // </TableContainer>
  );
}
