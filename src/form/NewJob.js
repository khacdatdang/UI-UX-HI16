import { Button, Checkbox, Form, Input, Select } from "antd";
import React, { useState } from "react";
import DropList from "./DropList";

const { Option } = Select;
const NewJob = () => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}

            autoComplete="off"
        >
            <Form.Item
                label="Công việc mẫu"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Tiêu đề"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Điểm"
            >
                <Input type="number" />
            </Form.Item>

            <Form.Item
                label="Ngày bắt đầu"
            >
                <Input type="datetime-local" />
            </Form.Item>

            <Form.Item
                label="Ngày bắt kết thúc"
            >
                <Input type="datetime-local" />
            </Form.Item>

            <Form.Item
                label="Mô tả"
            >
                <Input type="text" />
            </Form.Item>

            <Form.Item
                label="Người thực hiện"
            >
                <Input type="text" />
            </Form.Item>

            <Form.Item
                label="Người theo dõi"
            >
                <Input type="text" />
            </Form.Item>

            <Form.Item
                label="Dự án/ Quy trình"
            >
                <Input type="text" />
            </Form.Item>

            <Form.Item
                label="Khách hàng"
            >
           <Input/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
export default NewJob;  