import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './kpiManage.scss';
import { textTransform } from '@mui/system';
import { Form, Input, InputNumber, Modal, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import {  useNavigate } from 'react-router-dom';
const { Option } = Select;
function KPICreation() {
  const newKPIDate = localStorage.getItem("newKPIDate")
  const [totalWeight, settotalWeight] = useState(0)

  let navigate = useNavigate()
  
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
    // {
    //   id : '1',
    //   title: "Hoàn thành sửa đường Trần Đại Nghĩa",
    //   measurement: "Trong phạm vi 2km từ số 1 đến sô 350, khắc phục những chỗ còn ổ gà / voi trên mặt đường, lát gạch cho vỉa hè ",
    //   weight: 20
    // }
  ]
  )

  const [newTarget, setNewTarget] = useState({})

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

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editForm] = Form.useForm();
  const showEditModal = () => {
    setIsEditModalVisible(true);
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  const handleEdit = e => { 
    e.persist()
    setcurrentRow({...currentRow, [e.target.name] : e.target.value})
    console.log(currentRow)
  }
  const handleEditWeight = value => { 
    setcurrentRow({...currentRow, weight :value})
    console.log(currentRow)

  }

  const handleSubmitEdit = (e) => {
    const updateTarget = target.map((item) => item.id === currentRow.id ? currentRow : item)
    setTarget(updateTarget)
    setIsEditModalVisible(false)
  }

  const handleSubmit = (e) => {
    const newTar = newTarget
    newTar["id"] = target.length + 1
    console.log(target.length);
    setTarget([...target, newTar])
    setIsModalVisible(false)
    console.log(target);
    console.log(newTarget);
  }

  const error = () => {
    Modal.error({
      title: 'Lỗi ',
      content: 'Tổng trọng số phải bằng 100',
    });
  };
  const handleSave = e => {
    e.preventDefault()
      localStorage.setItem('newKPIDate', null)
      localStorage.setItem("KPIItem_"+newKPIDate, JSON.stringify(target))
      navigate('/kpi')
   
  }

  const [currentRow, setcurrentRow] = useState({id: "", title: ""})
  
  useEffect(() => {
    var tw = 0
    for (var i = 0; i < target.length; i++) {
      tw = tw + target[i].weight
      console.log(i);
    }
    settotalWeight(tw)
    console.log(tw);
  }, [target])
  

  useEffect(() => {
    editForm.setFieldsValue(currentRow)
   }, [form, currentRow])

  const KPIsamples = []
  const [sample, setsample] = useState("")
  for (var key in localStorage){
    if (key.startsWith("KPI")){
      let value = key.split("_")[1]
      KPIsamples.push(<Option value = {value}>{value}</Option>);
      console.log(key.split("_")[1]);
    }
      
  }
  const handleSelectSample = value => {
    console.log(value);
    setsample("KPIItem_"+ value)
    console.log(sample);
  }
  const createSample  = () => {
    setTarget(JSON.parse(localStorage.getItem(sample)))
  }
  return (
    <Box>
      <Typography variant='h5' sx = {{paddingTop: 10, paddingLeft: 36, paddingBottom: 3} } gutterBottom> Khởi tạo KPI</Typography>
      <Paper sx = {{paddingTop: 2, paddingLeft: 36, paddingBottom: 3, height : 600}}  >
        {/* <Button variant="outlined" sx = {{marginRight: 2 }} style={{textTransform: 'none'}}>Chỉnh sửa</Button>
        <Button variant="outlined" sx = {{marginRight: 2}} style={{textTransform: 'none'}}>Xoá</Button> */}
        <Button variant="outlined" sx = {{marginRight: 5}} style={{textTransform: 'none'}} onClick={showModal}>Thêm mục tiêu</Button>
        <Button variant="contained" color="success" onClick = {totalWeight != 100 ? error : handleSave} > Lưu </Button>
        <br/>
        <Select
        defaultValue="Lựa chọn bản sao"
        onChange={handleSelectSample}
        style={{
          width: 200,
          paddingTop: 1
        }}
      >
        {KPIsamples}
      </Select>
        <Button variant="outlined" sx = {{marginRight: 5, marginTop: 3, marginLeft: 2}} style={{textTransform: 'none'}} onClick={createSample}> Tạo bản sao</Button>
        <Typography variant='subtitle1' gutterBottom sx = {{marginTop: 3}}> KPI HI 16 _ {newKPIDate}</Typography>
        <Typography variant='subtitle2' gutterBottom sx = {{marginTop: 2, marginBottom: 4}}> {target.length} mục tiêu - Tổng trọng số {totalWeight}/100 </Typography>

        <DataGrid
        autoHeight 
        rows={target}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onRowDoubleClick={(item) => {setcurrentRow(item.row); showEditModal(); console.log(currentRow);}}
      />
    </Paper>


    <Modal title="Thêm mục tiêu" visible={isModalVisible} onOk={form.submit} onCancel={handleCancel} >
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

    <Modal title="Sửa mục tiêu" visible={isEditModalVisible} onOk={editForm.submit} onCancel={handleEditCancel} >
      <Form  form={editForm} onFinish={handleSubmitEdit} layout="vertical" 
      initialValues={currentRow}>
        <Form.Item 
          label="Tên mục tiêu"
          name="title"
          rules={[{ required: true, message: 'Nhập tên mục tiêu' }]}
        >
          <Input name = "title"  onChange={handleEdit}/>
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
          <InputNumber min={1} max={100} name = "weight" onChange={handleEditWeight}/>
        </Form.Item>
      </Form>
      
      </Modal>
    </Box>
    
    
  )
}

export default KPICreation