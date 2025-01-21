import React, { Children } from 'react';
import { Table } from 'antd';
import {Card} from 'antd';


  const colorHeader= '#22c55e';  

  const columns = [
    {
      title: 'Variable',
      onHeaderCell: () => ({
        style: { backgroundColor: colorHeader, color: 'black',fontSize: '20px' },
      }),
      dataIndex: 'variables',
      key: 'variables',
      onCell: () => ({
        style: { fontWeight:800 },
      })
    },
    {
      title:'MC',
      onHeaderCell: () => ({
        style: { backgroundColor: colorHeader, color: 'black', fontSize: '20px' },
      }),
      children:[
        {
          title:'Line 1',
          dataIndex:'Line1MC',
          key:'Line1MC',
          onHeaderCell: () => ({
            style: { backgroundColor: colorHeader, color: 'black',fontSize: '17px' },
          }),
        },
        {
          title:'Line 2',
          dataIndex:'Line2MC',
          key:'Line2MC',
          onHeaderCell: () => ({
            style: { backgroundColor: colorHeader, color: 'black',fontSize: '17px' },
          }),
        },
        {
          title:'Line 3',
          dataIndex:'Line3MC',
          key:'Line3MC',
          onHeaderCell: () => ({
            style: { backgroundColor: colorHeader, color: 'black',fontSize: '17px' },
          }),
        }
        
      ]
    },
    {
      title:'Caliper',
      onHeaderCell: () => ({
        style: { backgroundColor: colorHeader, color: 'black',fontSize: '20px' },
      }),
      children:[
        {
          title:'Line 1',
          dataIndex:'Line1Caliper',
          key:'Line1Caliper',
          onHeaderCell: () => ({
            style: { backgroundColor: colorHeader, color: 'black',fontSize: '17px' },
          }),
        },
        {
          title:'Line 2',
          dataIndex:'Line2Caliper',
          key:'Line2Caliper',
          onHeaderCell: () => ({
            style: { backgroundColor: colorHeader, color: 'black',fontSize: '17px' },
          }),
        },
        {
          title:'Line 3',
          dataIndex:'Line3Caliper',
          key:'Line3Caliper',
          onHeaderCell: () => ({
            style: { backgroundColor: colorHeader, color: 'black',fontSize: '17px' },
          }),
        }
        
      ]
    }
  ];


  const data = [
    {
      
      variables: 'Line',
      Line1MC:0,
      Line2MC:0,
      Line3MC:0,
      Line1Caliper: 0,
      Line2Caliper: 0,
      Line3Caliper: 0,
    },
    {
      variables: 'Model',
      Line1MC: "",
      Line2MC: "",
      Line3MC: "",
      Line1Caliper: "",
      Line2Caliper: "",
      Line3Caliper: "",
    },
    {
      variables: 'Target',
      Line1MC: 0,
      Line2MC: 0,
      Line3MC: 0,
      Line1Caliper: 0,
      Line2Caliper: 0,
      Line3Caliper: 0,
    },
    {
      variables: 'Actual',
      Line1MC: 0,
      Line2MC: 0,
      Line3MC: 0,
      Line1Caliper: 0,
      Line2Caliper: 0,
      Line3Caliper: 0,
    },
    {
      variables: 'Material',
      Line1MC: 0,
      Line2MC: 0,
      Line3MC: 0,
      Line1Caliper: 0,
      Line2Caliper: 0,
      Line3Caliper: 0,
    },
    {
      variables: 'In Material',
      Line1MC: "%",
      Line2MC: "%",
      Line3MC: "%",
      Line1Caliper: "%",
      Line2Caliper: "%",
      Line3Caliper: "%",
    },
  ];
  

  


export default function TableCard({shift_target}) {

  console.log(shift_target)

    shift_target.forEach(element => {

      //Komponen MC
      if(element.line.line_number === "Line 1" && element.component === "MC"){
        data[0].Line1MC = element.line_value;
        data[1].Line1MC = element.tools_model.name;
        data[2].Line1MC = element.target;
        data[3].Line1MC = element.actual;
        data[4].Line1MC = element.material;
        data[5].Line1MC = String(element.in_material * 100);
      }else if(element.line.line_number === "Line 2" && element.component === "MC"){
        data[0].Line2MC = element.line_value;
        data[1].Line2MC = element.tools_model.name;
        data[2].Line2MC = element.target;
        data[3].Line2MC = element.actual;
        data[4].Line2MC = element.material;
        data[5].Line2MC = String(element.in_material * 100);
      }else if(element.line.line_number === "Line 3" && element.component === "MC"){
        data[0].Line3MC = element.line_value;
        data[1].Line3MC = element.tools_model.name;
        data[2].Line3MC = element.target;
        data[3].Line3MC = element.actual;
        data[4].Line3MC = element.material;
        data[5].Line3MC = String(element.in_material * 100);
      }
      //Komponen Caliper
      else if(element.line.line_number === "Line 1" && element.component === "Caliper"){
        data[0].Line1Caliper = element.line_value;
        data[1].Line1Caliper = element.tools_model.name;
        data[2].Line1Caliper = element.target;
        data[3].Line1Caliper = element.actual;
        data[4].Line1Caliper = element.material;
        data[5].Line1Caliper = String(element.in_material * 100);
      }else if(element.line.line_number === "Line 2" && element.component === "Caliper"){
        data[0].Line2Caliper = element.line_value;
        data[1].Line2Caliper = element.tools_model.name;
        data[2].Line2Caliper = element.target;
        data[3].Line2Caliper = element.actual;
        data[4].Line2Caliper = element.material;
        data[5].Line2Caliper = String(element.in_material * 100);
      }else if(element.line.line_number === "Line 3" && element.component === "Caliper"){
        data[0].Line3Caliper = element.line_value;
        data[1].Line3Caliper = element.tools_model.name;
        data[2].Line3Caliper = element.target;
        data[3].Line3Caliper = element.actual;
        data[4].Line3Caliper = element.material;
        data[5].Line3Caliper = String(element.in_material * 100);
      }
      
    });


    
    
    
    return(
        <>
            <Card
                title={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>Target Shift</span>}
                style={
                    { 
                        width: '90%',
                        margin: '0 auto', 
                        marginTop: '20px',
                        
                    }
                }
                
            >

                <Table
                    style={{
                      width: '100%',
                      marginBottom: '20px',
                  
                    }}
                    bordered:false
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    scroll={{ x: 1000 }}
                />
            </Card>
        </>
    );
}