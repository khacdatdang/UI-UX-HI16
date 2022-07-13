import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './kpiManage.scss';
import { textTransform } from '@mui/system';
import { DatePicker, Form, Input, InputNumber, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import {  useNavigate } from 'react-router-dom';
import KPIDisplay from './kpiDisplay';
function KPIBoard() {
  let history = useNavigate()
  const [kpiItem, setkpiItem] = useState({})
 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (date, dateString) => { 
    setkpiItem({...kpiItem, date : dateString})
    console.log(kpiItem);
  }
  var currentKPIName = "KPIItem" + "_" + year + "-" + month
  const [currentKPIItem, setCurrentKPIITem] = useState(JSON.parse(localStorage.getItem(currentKPIName)))
  const handleSubmit = (e) => {
    const currentDate = year + "-" + month
    if (currentDate > kpiItem.date){
      alert("Không thể tạo KPI thời điểm trong quá khứ ");
    }
    // else if ()
    // {

    // } 
    else 
    {
      localStorage.setItem('newKPIDate', kpiItem.date)
      setkpiItem({})
      history("/create_kpi")
    }
   
  }

  return (
    <Box>
      <Typography variant='h5' sx = {{paddingTop: 10, paddingLeft: 36, paddingBottom: 3} } gutterBottom> KPI</Typography>
      <Paper sx = {{paddingTop: 2, paddingLeft: 36, paddingBottom: 3, height : 600}}  >  
        <Button variant="outlined" onClick={showModal} sx = {{marginRight: 2, marginBottom: 3 }} style={{textTransform: 'none'}}>Khởi tạo KPI mới</Button>
        <Typography variant = "h6" gutterBottom> KPI tháng {month} - {year} </Typography>
        {
          !currentKPIItem ? <Typography variant = "subtitle1"> Chưa có KPI cho tháng này </Typography> :
          <KPIDisplay target = {currentKPIItem}/>
        }
      </Paper>
      <Modal title="Khởi tạo KPI" visible={isModalVisible} onOk={form.submit} onCancel={handleCancel} >
      <Typography variant='subtitle1'>Đơn vị A1</Typography>
      <Form  form={form} onFinish={handleSubmit} >
        <Form.Item
          label="Tháng"
          name="title"
          rules={[{ required: true, message: 'Nhập thời gian' }]}
        >
          <DatePicker onChange={onChange} picker="month" />
        </Form.Item>
      </Form>
      
      </Modal>
    </Box>
  )
}

export default KPIBoard