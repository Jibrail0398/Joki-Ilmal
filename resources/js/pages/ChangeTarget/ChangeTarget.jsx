import React from 'react'
import {Card} from 'antd';
import { Form, Input, Select } from "antd";

const { Option } = Select;

const ChangeTarget = () => {
  return (
    <div className='bg-gradient-to-b from-notus-blue from-50% to-notus-grey to-50%'>
      <Card
        title={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Target Shift</span>}
        style={
            { 
                width: '90%',
                margin: '0 auto', 
            }
        }
      >
      
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <p>MC</p>
            <Form
              layout="vertical"
              style={{ maxWidth: 600, margin: "0 auto" }}
            >
            {/* Model Inputs */}
              <Form.Item label="Model1" name="model1" style={{ marginBottom: "2px" }}>
                <Select placeholder="Select Model1">
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                  <Option value="option3">Option 3</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Model2" name="model2" style={{ marginBottom: "2px" }}>
                <Select placeholder="Select Model2">
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                  <Option value="option3">Option 3</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Model3" name="model3" style={{ marginBottom: "2px" }}>
                <Select placeholder="Select Model3">
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                  <Option value="option3">Option 3</Option>
                </Select>
              </Form.Item>

              {/* Target Inputs */}
              <Form.Item label="Target1" name="target1" style={{ marginBottom: "2px" }}>
                <Input type="number" placeholder="Enter Target1" />
              </Form.Item>
              <Form.Item label="Target2" name="target2" style={{ marginBottom: "2px" }}>
                <Input type="number" placeholder="Enter Target2" />
              </Form.Item>
              <Form.Item label="Target3" name="target3" style={{ marginBottom: "2px" }}>
                <Input type="number" placeholder="Enter Target3" />
              </Form.Item>

              {/* Actual Inputs */}
              <Form.Item label="Actual1" name="actual1" style={{ marginBottom: "2px" }}>
                <Input type="number" placeholder="Enter Actual1" />
              </Form.Item>
              <Form.Item label="Actual2" name="actual2" style={{ marginBottom: "2px" }}>
                <Input type="number" placeholder="Enter Actual2" />
              </Form.Item>
              <Form.Item label="Actual3" name="actual3" style={{ marginBottom: "2px" }}>
                <Input type="number" placeholder="Enter Actual3" />
              </Form.Item>

              {/* Material Inputs */}
              <Form.Item label="Material1" name="material1" style={{ marginBottom: "2px" }}>
                <Input type="number" placeholder="Enter Material1" />
              </Form.Item>
              <Form.Item label="Material2" name="material2" style={{ marginBottom: "2px" }}>
                <Input type="number" placeholder="Enter Material2" />
              </Form.Item>
              <Form.Item label="Material3" name="material3" style={{ marginBottom: "2px" }}>
                <Input type="number" placeholder="Enter Material3" />
              </Form.Item>

              {/* In Material Inputs */}
              <Form.Item label="In Material1 (%)" name="inMaterial1" style={{ marginBottom: "2px" }}>
                <Input type="number" placeholder="Enter In Material1 (%)" />
              </Form.Item>
              <Form.Item label="In Material2 (%)" name="inMaterial2" style={{ marginBottom: "2px" }}>
                <Input type="number" placeholder="Enter In Material2 (%)" />
              </Form.Item>
              <Form.Item label="In Material3 (%)" name="inMaterial3" style={{ marginBottom: "2px" }}>
                <Input type="number" placeholder="Enter In Material3 (%)" />
              </Form.Item>
          </Form>
          </div>
          <div style={{ flex: 1 }}>
            <p>Caliper</p>
            <Form
              layout="vertical"
              style={{ maxWidth: 600, margin: "0 auto" }}
            >
              {/* Model Inputs */}
                <Form.Item label="Model1" name="model1" style={{ marginBottom: "2px" }}>
                  <Select placeholder="Select Model1">
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                    <Option value="option3">Option 3</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Model2" name="model2" style={{ marginBottom: "2px" }}>
                  <Select placeholder="Select Model2">
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                    <Option value="option3">Option 3</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Model3" name="model3" style={{ marginBottom: "2px" }}>
                  <Select placeholder="Select Model3">
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                    <Option value="option3">Option 3</Option>
                  </Select>
                </Form.Item>

                {/* Target Inputs */}
                <Form.Item label="Target1" name="target1" style={{ marginBottom: "2px" }}>
                  <Input type="number" placeholder="Enter Target1" />
                </Form.Item>
                <Form.Item label="Target2" name="target2" style={{ marginBottom: "2px" }}>
                  <Input type="number" placeholder="Enter Target2" />
                </Form.Item>
                <Form.Item label="Target3" name="target3" style={{ marginBottom: "2px" }}>
                  <Input type="number" placeholder="Enter Target3" />
                </Form.Item>

                {/* Actual Inputs */}
                <Form.Item label="Actual1" name="actual1" style={{ marginBottom: "2px" }}>
                  <Input type="number" placeholder="Enter Actual1" />
                </Form.Item>
                <Form.Item label="Actual2" name="actual2" style={{ marginBottom: "2px" }}>
                  <Input type="number" placeholder="Enter Actual2" />
                </Form.Item>
                <Form.Item label="Actual3" name="actual3" style={{ marginBottom: "2px" }}>
                  <Input type="number" placeholder="Enter Actual3" />
                </Form.Item>

                {/* Material Inputs */}
                <Form.Item label="Material1" name="material1" style={{ marginBottom: "2px" }}>
                  <Input type="number" placeholder="Enter Material1" />
                </Form.Item>
                <Form.Item label="Material2" name="material2" style={{ marginBottom: "2px" }}>
                  <Input type="number" placeholder="Enter Material2" />
                </Form.Item>
                <Form.Item label="Material3" name="material3" style={{ marginBottom: "2px" }}>
                  <Input type="number" placeholder="Enter Material3" />
                </Form.Item>

                {/* In Material Inputs */}
                <Form.Item label="In Material1 (%)" name="inMaterial1" style={{ marginBottom: "2px" }}>
                  <Input type="number" placeholder="Enter In Material1 (%)" />
                </Form.Item>
                <Form.Item label="In Material2 (%)" name="inMaterial2" style={{ marginBottom: "2px" }}>
                  <Input type="number" placeholder="Enter In Material2 (%)" />
                </Form.Item>
                <Form.Item label="In Material3 (%)" name="inMaterial3" style={{ marginBottom: "2px" }}>
                  <Input type="number" placeholder="Enter In Material3 (%)" />
                </Form.Item>
            </Form>
          </div>
        </div>
      </Card>

    </div>
  )
}

export default ChangeTarget