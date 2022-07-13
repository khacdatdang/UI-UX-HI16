import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './kpiManage.scss';
import { textTransform } from '@mui/system';
import { Form, Input, InputNumber, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
function KPIBoard() {
  return (
    <Box>
      <Typography variant='h5' sx = {{paddingTop: 10, paddingLeft: 36, paddingBottom: 3} } gutterBottom> KPI</Typography>
      <Paper sx = {{paddingTop: 2, paddingLeft: 36, paddingBottom: 3, height : 600}}  >  
        <Button variant="outlined" sx = {{marginRight: 2 }} style={{textTransform: 'none'}}>Khởi tạo KPI mới</Button>
      </Paper>
    </Box>
  )
}

export default KPIBoard