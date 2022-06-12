import { Select } from 'antd';
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const DropList = () => (
  <Select
    mode="multiple"
  >
    <Option value="china">
      
        China (中国)
  
    </Option>
    <Option value="usa" label="USA">
      
        USA (美国)
    
    </Option>
    <Option value="japan" label="Japan">
      
        Japan (日本)
      
    </Option>
  
  </Select>
);

export default DropList;
