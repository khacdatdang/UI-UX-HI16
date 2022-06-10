

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Chip } from '@mui/material';
import { margin } from '@mui/system';
import AssignModal from '../assignModal/assignModal';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';


export default function TaskList() {
  const [dummyData, setdummyData] = useState([
    {
      title: 'Báo cáo doanh thu ',
      state: '',
      start : '',
      end: '',
      assignee: ''
    },
    {
      title: 'Kiểm tra hợp đồng ',
      state: '',
      start : '20/12',
      end: '21/12 ',
      assignee: 'Võ Hoàng Nam '
    },
    {
      title: 'Đối soát ',
      state: 'Quá hạn 4 ngày',
      start : '14/12',
      end: '15/12',
      assignee: 'Đăng Khắc Đạt'
    },
  ])
  const [open, setOpen] = React.useState(false);
  const [clickedRow, setclickedRow] = React.useState()
  const handleClickOpen = (data) => {
    setclickedRow(data)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    //Runs on every render
    console.log(dummyData)
  }, [dummyData]);

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
    <TableContainer component={Paper}  >
      <Table sx={{  marginTop: 10}} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {dummyData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row" align = "left">
                            {row.title} 
                            {row.state ?<Chip label = {row.state}/> : ' '}
                        </TableCell>
              <TableCell align="right">{row.start} --  {row.end}</TableCell>
              <TableCell align="center">{row.assignee ? row.assignee : <Button size = "small" variant="outlined" onClick={() => {handleClickOpen(row)}} >Thêm Thành viên </Button>}</TableCell>
              <AssignModal open = {open} handleClose = {handleClose} data = {clickedRow} handleAssign = {handleAssign}/>
            </TableRow>
          ))}
        </TableBody >
      </Table>
      
    </TableContainer>
  );
}
