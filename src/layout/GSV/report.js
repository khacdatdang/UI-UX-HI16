import { CheckOutlined, InboxOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Checkbox,
    Col,
    DatePicker,
    Divider,
    Form,
    Input,
    InputNumber,
    notification,
    Progress,
    Radio,
    Rate,
    Row,
    Select,
    Slider,
    Space,
    Switch,
    Typography,
    Upload,
} from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};
let index = 0;
const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e?.fileList;
};
const problems = [
    'Thiếu nhân công', 'Không đủ nguyên, vật liêu', 'Ảnh hưởng thời tiết xấu', 'Phương tiện vận chuyển khó khăn'
]
const Report = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState(problems);
    const [name, setName] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const openNotification = () => {
        notification.open({
          message: 'Gửi báo cáo thành công',
          description:
            'Bạn đã gửi báo cáo tiến độ thành công',
          icon: (
            <CheckOutlined
              style={{
                color: 'green',
              }}
            />
          ),
        });
      };
      
    const addItem = (e) => {
        e.preventDefault();
        setItems([...items, name || `New item ${index++}`]);
        setName('');
    };

    const [percent, setPercent] = useState(50);
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <h1 style={{ marginLeft: 700, paddingBottom: 50, fontSize: 45 }}>Báo cáo dự án</h1>
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    'input-number': 3,
                    'checkbox-group': ['A', 'B'],
                    rate: 3.5,
                }}
            >
                <Form.Item
                    name="duan"
                    label="Dự án"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Chọn dự án',
                        },
                    ]}
                >
                    <Select placeholder="Dự án">
                        <Option value="a1">Dự án A1</Option>
                        <Option value="b2">Dự án B2</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="select-multiple"
                    label="Đơn vị thực hiện"
                    rules={[
                        {
                            required: true,
                            message: 'Đơn vị thực hiện',
                            type: 'array',
                        },
                    ]}
                >
                    <Select mode="multiple" placeholder="Đơn vị thực hiện">
                        <Option value="A1">Đơn vị A1</Option>
                        <Option value="A2">Đơn vị A2</Option>
                        <Option value="A3">Đơn vị A3</Option>
                        <Option value="A4">Đơn vị A4</Option>
                        <Option value="A5">Đơn vị A5</Option>
                    </Select>
                </Form.Item>
                
                <Form.Item
                    name="quanly"
                    label="Người quản lý"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Người quản lý',
                        },
                    ]}
                >
                    <Select placeholder="Người quản lý">
                        <Option value="quan">Phùng Quân</Option>
                        <Option value="dat">Khắc Đạt</Option>
                        <Option value="minh">Ngọc Minh</Option>
                        <Option value="Sơn">Hoàng Sơn</Option>
                        <Option value="nam">Hoài Nam</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="start_date" label="Ngày bắt đầu">
                    <DatePicker />
                </Form.Item>
                <Form.Item name="end_date" label="Ngày hết hạn">
                    <DatePicker />
                </Form.Item>

                <Form.Item label="Tiến độ">
                    <Radio.Group>
                        <Radio.Button value="a" onClick={() => setPercent(10)}>10%</Radio.Button>
                        <Radio.Button value="b" onClick={() => setPercent(30)}>30%</Radio.Button>
                        <Radio.Button value="c" onClick={() => setPercent(50)}>50%</Radio.Button>
                        <Radio.Button value="d" onClick={() => setPercent(70)}>70%</Radio.Button>
                        <Radio.Button value="e" onClick={() => setPercent(100)}>100%</Radio.Button>
                    </Radio.Group>
                    <Progress id="progressBar"
                        strokeColor={{ from: '#108ee9', to: '#87d068' }}
                        percent={percent}
                        status="active" />
                </Form.Item>


                <Form.Item label="Vấn đề gặp phải">
                    <Select
                        placeholder="vấn đề gặp phải"
                        mode='multiple'
                        dropdownRender={(menu) => (
                            <>
                                {menu}
                                <Divider
                                    style={{
                                        margin: '8px 0',
                                    }}
                                />
                                <Space
                                    align="center"
                                    style={{
                                        padding: '0 8px 4px',
                                    }}
                                >
                                    <Input placeholder="Please enter item" value={name} onChange={onNameChange} />
                                    <Typography.Link
                                        onClick={addItem}
                                        style={{
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        <PlusOutlined /> Add item
                                    </Typography.Link>
                                </Space>
                            </>
                        )}
                    >
                        {items.map((item) => (
                            <Option key={item}>{item}</Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item  label="Ý kiến">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        span: 12,
                        offset: 6,
                    }}
                >
                    <Button type="ghost" htmlType="submit" onClick={()=>{
                        openNotification()
                        navigate("/gsv")
                    }}>
                        Gửi
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default Report;