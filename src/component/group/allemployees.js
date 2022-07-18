import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal, Space, Table } from 'antd';
import React, { useRef, useState } from 'react';
import { JobStatus } from '../../type/JobStatus';

const data = [
  {
    key: '1',
    name: 'Phùng Quân',
    job: "Xây dựng khu A",
    startAt: "18-07-2022",
    status: JobStatus.doing
  },
  {
    key: '2',
    name: 'Đặng Đạt',
    job: 'Đắp nền khu A1',
    startAt: "15-07-2022",
    status: JobStatus.waiting
  },
  {
    key: '3',
    name: 'Hoàng Sơn',
    job: 'Kiểm tra hệ thoát nước',
    startAt: "16-07-2022",
    status: JobStatus.waiting
  },
  {
    key: '4',
    name: 'Ngọc Minh',
    job: 'Vận chuyển vât liệu tới khu B2',
    startAt: "20-07-2022",
    status: JobStatus.new
  },
  {
    key: '5',
    name: 'Hoài Nam',
    job: 'Vận chuyển vât liệu tới khu B2',
    startAt: "15-07-2022",
    status: JobStatus.done
  },
];




const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const AllEmployees = ({ group }) => 
{
  const [emp,setEmp]=useState(data)

  const handleOk = (record) => {
    let emps = emp.map(nv => {
      if (nv.key === record.key) {
        return { ...nv, status: JobStatus.done }
      }
      return nv;
    })
    console.log(emps)
    setEmp(emps)
  }

  const updateJob = (record) =>
  {
    console.log(record);
  }
  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      render:(text,record)=>
      {
        return {
          props: {
            style: {fontSize:18}
          },
          children: <div>{text}</div>
      }
    }
    
    },
    {
      title: 'Công việc',
      dataIndex: 'job',
      render:(text,record)=>
      {
        return {
          props: {
            style: {fontSize:18}
          },
          children: <div>{text}</div>
      }
    }
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: 'startAt',
      render:(text,record)=>
      {
        return {
          props: {
            style: {fontSize:18}
          },
          children: <div>{text}</div>
      }
    }
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render:(text,record)=>
      {
        return {
          props: {
            style: { color: record.status===JobStatus.done  ? "green" : record.status===JobStatus.doing?"blue":record.status===JobStatus.waiting?"red":"black",fontSize:18}
          },
          children: <div>{text}</div>
      }
    }
    },
    {
      title: 'Chức năng',
      dataIndex: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a style={{fontSize:18}} onClick={()=>updateJob(record)}>Cập nhật</a>
          {record.status === JobStatus.waiting && <a style={{color:"red",fontSize:18}} onClick={() => confirm(record)}>Phê duyệt</a>}
        </Space>
      ),
    }
  
  ];

  const confirm = (record) => {
    console.log(record)
    Modal.confirm({
      title: 'Phê duyệt ',
      icon: <ExclamationCircleOutlined />,
      content: 'Phê duyệt công việc',
      okText: 'Đồng ý',
      cancelText: 'Từ chối',
      onOk: ()=> {handleOk(record)}
    });
  };
  return (
    <div>
      <h1 style={{marginLeft:550,fontSize:45}}>Thành viên đơn vị {group}</h1>
      <Table columns={columns} dataSource={emp} onChange={onChange} />
    </div>
  )
}



export default AllEmployees;