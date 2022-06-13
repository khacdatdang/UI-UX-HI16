import React, { useState } from 'react';
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
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

const NewJob = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);

  const children = [];
  for (let i = 1; i < 4; i++) {
    children.push(<Option key={i.toString(36) + i}>{"Giám đốc " + i}</Option>);
  }

  const reviewer = [];
  reviewer.push(<Option>Người giao</Option>)
  reviewer.push(<Option>Người quản lý</Option>)


  const mode = [];
  mode.push(<Option>Nội bộ</Option>)
  mode.push(<Option>Công khai</Option>)
  mode.push(<Option>Riêng tư</Option>)


  const reminder = [];
  reminder.push(<Option key={1}>Nhắc nhở trước một ngày</Option>)
  reminder.push(<Option key={2}>Nhắc nhở trước 2 ngày</Option>)
  reminder.push(<Option key={3}>Nhắc nhở trước 1 tuần</Option>)

  const completeReminder = [];
  completeReminder.push(<Option key={1}>Nhắc nhở tự động</Option>)
  completeReminder.push(<Option key={2}>Nhắc nhở thủ công</Option>)




  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <h3>Tạo công việc mới</h3>
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
        disabled={componentDisabled}
      >
        <Form.Item label="Công việc mẫu">
          <Select>
            <Option>Liên hệ</Option>
            <Option>Quản lý</Option>
          </Select>
        </Form.Item>
        <Form.Item required={true} label="Tiêu đề">
          <Input />
        </Form.Item>
        <Form.Item label="Điểm">
          <Input />
        </Form.Item>
        <Form.Item label="Ngày bắt đầu">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Ngày hết hạn">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Mô tả">
          <TextArea />
        </Form.Item>
        <Form.Item label="Người thực hiện">
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {children}
          </Select>

          <Checkbox>Mỗi người tạo công việc</Checkbox>
        </Form.Item>

        <Form.Item label="Người theo dõi">
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {reviewer}
          </Select>
        </Form.Item>
        <Form.Item label="Dự án/Quy trình">
          <Select style={{
            width: '100%',
          }}>
            <Option key={"du-an"}>Dư án</Option>
            <Option key={"cong-trình"}>Công trình</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Khách hàng">
          <Input />
        </Form.Item>

        <Form.Item label="Công việc hiện trường">
          <Checkbox />
        </Form.Item>
        <Form.Item label="Biểu mẫu ghi thông tin">
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
        </Form.Item>
        <Form.Item label="Đính kèm">
          <Upload>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Nhắc nhở thực hiện">
          <Select
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {reminder}
          </Select>
          <Form.Item label="Lúc">
            <TimePicker />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Nhắc nhở hạn hoàn thành">
          <Select
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {completeReminder}
          </Select>
        </Form.Item>
        <Form.Item label="Người nhắc nhở">
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {children}
          </Select>
        </Form.Item>
        <Form.Item label="Cần đánh giá">
          <Checkbox />
        </Form.Item>

        <Form.Item label="Người đánh giá">
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {reviewer}
          </Select>
        </Form.Item>
        <Form.Item label="Chế độ">
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleChange}
          >
            {mode}
          </Select>
        </Form.Item>
        <Form.Item label="Quan trọng">
          <Checkbox />
        </Form.Item>

        <div>
          <Form.Item style={{ float: 'right', marginRight: '5px' }}>
            <Button type='primary'>Lưu và đóng</Button>


          </Form.Item>
          <Form.Item style={{ float: 'right', marginRight: '5px' }}>
            <Button type='primary'>Lưu và mở chi tiết</Button>

          </Form.Item>
          <Form.Item style={{ float: 'right', marginRight: '5px' }}>
            <Button type='primary'>Lưu và chuyển tiếp</Button>

          </Form.Item>
        </div>


      </Form>
    </div>
  );
};

export default NewJob;