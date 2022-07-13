import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './kpiManage.scss';
import { textTransform } from '@mui/system';
import { Form, Input, InputNumber, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
function KPICreation() {
  const columns  = [
    { field: 'id', headerName: 'STT', width: 70 },
    { field: 'title', headerName: 'Tên mục tiêu', width: 300 },
    { field: 'measurement', headerName: 'Tiêu chí đánh giá', width: 400 },
    {
      field: 'weight',
      headerName: 'Trọng số đánh giá',
      type: 'number',
      width: 150,
    }
  ];

  const [target, setTarget] = useState([
    {
      id : '1',
      title: "Hoàn thành sửa đường Trần Đại Nghĩa",
      measurement: "Trong phạm vi 2km từ số 1 đến sô 350, khắc phục những chỗ còn ổ gà / voi trên mặt đường, lát gạch cho vỉa hè ",
      weight: 20
    }
  ]
  )

  const [newTarget, setNewTarget] = useState({id : target.length + 1})

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = e => { 
    e.persist()
    setNewTarget({...newTarget, [e.target.name] : e.target.value})
    console.log(newTarget)
  }
  const handleChangeWeight = value => { 
    setNewTarget({...newTarget, weight :value})
    console.log(newTarget)

  }
  const handleSubmit = (e) => {

    // setNewTarget({...newTarget, "id" : target.length + 1})
    setTarget([...target,newTarget])
    setIsModalVisible(false)
    console.log(target);
    setNewTarget({id : target.length + 1})
  }
  return (
    <Box>
      <Typography variant='h5' sx = {{paddingTop: 10, paddingLeft: 36, paddingBottom: 3} } gutterBottom> Khởi tạo KPI</Typography>
      <Paper sx = {{paddingTop: 2, paddingLeft: 36, paddingBottom: 3, height : 600}}  >
        <Button variant="outlined" sx = {{marginRight: 2 }} style={{textTransform: 'none'}}>Chỉnh sửa</Button>
        <Button variant="outlined" sx = {{marginRight: 2}} style={{textTransform: 'none'}}>Xoá</Button>
        <Button variant="outlined" sx = {{marginRight: 5}} style={{textTransform: 'none'}} onClick={showModal}>Thêm mục tiêu</Button>
        <Button variant="contained" color="success" > Lưu </Button>
        <Typography variant='subtitle1' gutterBottom sx = {{marginTop: 3}}> KPI HI 16 _ 07_2022</Typography>
        <Typography variant='subtitle2' gutterBottom sx = {{marginTop: 2, marginBottom: 4}}> {target.length} mục tiêu - Tổng trọng số 30/100 </Typography>

        <DataGrid
        autoHeight 
        rows={target}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Paper>

    <Modal title="Thêm mục tiêu" visible={isModalVisible}onOk={form.submit} onCancel={handleCancel} >
      <Form  form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          label="Tên mục tiêu"
          name="title"
          rules={[{ required: true, message: 'Nhập tên mục tiêu' }]}
        >
          <Input name = "title" onChange={handleChange}/>
        </Form.Item>
        <Form.Item
          label="Tiêu chí đánh giá"
          name="measurement"
          rules={[{ required: true, message: 'Nhập tiêu chí đánh giá' }]}
        >
          <TextArea name = "measurement" rows={4} onChange={handleChange}/>
        </Form.Item>
        <Form.Item
          label="Trọng số"
          name="weight"
          rules={[{ required: true, message: 'Nhập trọng số' }]}
        >
          <InputNumber min={1} max={100} name = "weight" onChange={handleChangeWeight}/>
        </Form.Item>
      </Form>
      
      </Modal>
    </Box>
    
    
  )
}

export default KPICreation