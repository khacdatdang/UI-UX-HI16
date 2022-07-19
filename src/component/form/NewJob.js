import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  TimePicker,
  Tag,
  Upload,
  notification
} from 'antd';
import { CheckOutlined, InboxOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;



const NewJob = () => {
  
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [taskList, settaskList] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    settaskList(JSON.parse(localStorage.getItem("taskList")))
    console.log(JSON.parse(localStorage.getItem("taskList")).length);
  }, [])

  const [newTask, setnewTask] = useState(
      {id : JSON.parse(localStorage.getItem("taskList")).length + 1, 
      evaluation : {volumn : '',
      quality : '',
      process : '',
      mark : '',
      summary : '',
      date : ''}})  
  const children = [];
  children.push(<Option value = "Đặng Khắc Đạt">Đặng Khắc Đạt</Option>)
  children.push(<Option value = "Võ Hoàng Nam">Võ Hoàng Nam</Option>)
  children.push(<Option value = "Vũ Ngọc Minh">Vũ Ngọc Minh</Option>)
  children.push(<Option value = "Nguyễn Hoàng Sơn">Nguyễn Hoàng Sơn</Option>)
  children.push(<Option value = "Phùng Xuân Quân">Phùng Xuân Quân</Option>)


  const reviewer = [];
  reviewer.push(<Option value = "Nguyễn Văn A">Nguyễn Văn A</Option>)
  reviewer.push(<Option value = "Lê Văn B">Lê Văn B</Option>)


  const mode = [];
  mode.push(<Option value = "Nội bộ">Nội bộ</Option>)
  mode.push(<Option value = "Công khai">Công khai</Option>)
  mode.push(<Option value = "Riêng tư">Riêng tư</Option>)

  const reminder = [];
  reminder.push(<Option key={1} value = "Nhắc nhở trước một ngày">Nhắc nhở trước một ngày</Option>)
  reminder.push(<Option key={2} value = "Nhắc nhở trước 2 ngày">Nhắc nhở trước 2 ngày</Option>)
  reminder.push(<Option key={3} value = "Nhắc nhở trước 1 tuần"></Option>)

  // const completeReminder = [];
  // completeReminder.push(<Option key={1}>Nhắc nhở tự động</Option>)
  // completeReminder.push(<Option key={2}>Nhắc nhở thủ công</Option>)

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const handleInput = e => {
    e.persist()
    setnewTask({...newTask, [e.target.name] : e.target.value})
    console.log(newTask)
  }
  const handleChange = (name, value) => {
    setnewTask({...newTask, [name] : value})
    console.log(newTask)
  };

  const handleChangeDate = (type, dateString) => {
    setnewTask({...newTask, [type] : dateString})
    console.log(newTask);
  }

  const changeTime = (time, timeString) => {
    setnewTask({...newTask, reminder_time: timeString})
    console.log(newTask);
  }
  const handleCheckBox = (e, name) => {
    setnewTask({...newTask, [name]: e.target.checked})
  }

  const openNotification = () => {
        notification.open({
          message: 'Tạo công việc mới thành công',
          description:
            'Đã thêm công việc mới',
          icon: (
            <CheckOutlined
              style={{
                color: 'green',
              }}
            />
          ),
        });
      };
  const handleSubmitTask = e => {
    // e.preve-ntDeault()
    const task_list = taskList
    task_list.push(newTask)
    console.log(task_list);
    localStorage.setItem("taskList", JSON.stringify(taskList))
    setnewTask({id : newTask.id + 1, 
      evaluation : {volumn : '',
      quality : '',
      process :'',
      mark : '',
      summary : '',
      date : ''}})
    openNotification()
    navigate("/alltask")
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Typography variant = "h4"  style = {{marginTop: 5, marginLeft: 300, marginBottom: 20}} gutterBottm> Tạo công việc mới</Typography>
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          disabled: componentDisabled,
        }}
        onValuesChange={onFormLayoutChange}
        onFinish = {handleSubmitTask}
        onFinishFailed={onFinishFailed}
        disabled={componentDisabled}
      >
        <Form.Item label="Công việc mẫu" name = "sample_task">
          <Select onChange = {handleChange}>
            <Option>Liên hệ</Option>
            <Option>Quản lý</Option>
          </Select>
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Cần nhập tiêu đề công việc' }]} label="Tiêu đề" name = "title">
          <Input name ="title" onChange = {handleInput}/>
        </Form.Item>
        {/* <Form.Item label="Điểm" name = "mark">
          <InputNumber onChange={(value) => {handleChange("mark", value)}}/>
        </Form.Item> */}
        <Form.Item rules={[{ required: true, message: 'Cần nhập thời gian bắt đầu' }]} name = "start_date" label="Ngày bắt đầu">
          <DatePicker onChange = {(date, dateString) => {handleChangeDate("start_date", dateString)}}/>
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Cần nhập thời gian kết thúc' }]} required={true} name = "end_date" label="Ngày hết hạn">
          <DatePicker onChange = {(date, dateString) => {handleChangeDate("end_date", dateString)}}/>
        </Form.Item>
        <Form.Item name = "description" label="Mô tả">
          <TextArea name = "description" onChange = {handleInput} />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Cần chọn người thực hiện' }]} name = "assignee" label="Người thực hiện">
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={(value) => {handleChange("assignee", value)}}
          >
            {children}
          </Select>
          {/* <Checkbox>Mỗi người tạo công việc</Checkbox> */}
        </Form.Item>

        <Form.Item rules={[{ required: true, message: 'Cần chọn người giám sát' }]} name = "observer" label="Người theo dõi">
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={(value) => {handleChange("observer", value)}}
          >
            {reviewer}
          </Select>
        </Form.Item>
        <Form.Item name = "project" label="Dự án/Quy trình">
          <Select style={{
            width: '100%',
          }}
          onChange={(value) => {handleChange("project", value)}}>
            <Option key={"du-an"} value = {"Dự án"}>Dư án</Option>
            <Option key={"cong-trình"} value = {"Công trình"}>Công trình</Option>
          </Select>
        </Form.Item>
        <Form.Item name = "customer" label="Khách hàng">
          <Input name = "customer" onChange = {handleInput}/>
        </Form.Item>

        <Form.Item label="Công việc hiện trường">
          <Checkbox onChange={(e) => {handleCheckBox(e, "isLocaleTask")}} />
        </Form.Item>
        {/* <Form.Item label="Biểu mẫu ghi thông tin">
          <Select
            mode="multiple"
            showArrow
            style={{
              width: '100%',
            }}
          >
            <Tag color={"green"}>
              Phiếu đánh giá thông tin
            </Tag>
            <Tag color={"yellow"}>
              Phiếu đánh giá thông tin
            </Tag>
          </Select>
        </Form.Item> */}
        <Form.Item label="Đính kèm">
          <Upload>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item name = "submit_reminder_choice" label="Nhắc nhở hạn hoàn thành">
          <Select
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={(value) => {handleChange("submit_reminder_choice", value)}}
          >
            {reminder}
          </Select>
          <Form.Item name = "submit_reminder_time" label="Lúc">
            <TimePicker onChange = {changeTime} />
          </Form.Item>
        </Form.Item>
        {/* <Form.Item name = "submit_reminder_choice" label="Nhắc nhở hạn hoàn thành">
          <Select
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {completeReminder}
          </Select>
        </Form.Item> */}
        {/* <Form.Item label="Người nhắc nhở">
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {children}
          </Select>
        </Form.Item> */}
        {/* <Form.Item label="Cần đánh giá">
          <Checkbox />
        </Form.Item> */}

        {/* <Form.Item label="Người đánh giá">
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {reviewer}
          </Select>
        </Form.Item> */}
        <Form.Item name = "mode" label="Chế độ">
          <Select
            
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={(value) => {handleChange("mode", value)}}
          >
            {mode}
          </Select>
        </Form.Item>
        <Form.Item label="Quan trọng">
          <Checkbox  onChange={(e) => {handleCheckBox(e, "isImportant")}}  />
        </Form.Item>

        {/* <div> */}
          <Form.Item style={{ float: 'right', paddingBottom: '20px', paddingRight : '30px', fontSize: '20px' }}>
            <Button type="link" htmlType="submit" size = 'large'>Lưu và đóng</Button>
          </Form.Item>
          {/* <Form.Item style={{ float: 'right', marginRight: '5px' }}>
            <Button type='primary'>Lưu và mở chi tiết</Button>

          </Form.Item> */}
          <Form.Item style={{ float: 'right' }}>
            <Link to = "/alltask">
              <Button type='link' size = 'large'>Hủy </Button>
            </Link>
          </Form.Item>
          <br></br>
        {/* </div> */}


      </Form>
    </div>
  );
};

export default NewJob;