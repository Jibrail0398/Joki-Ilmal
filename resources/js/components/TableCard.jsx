import React, { Children } from 'react';
import { Table } from 'antd';
import {Card} from 'antd';


  const colorHeader= '#22c55e';  

  const columns = [
    {
      title: 'Variable',
      onHeaderCell: () => ({
        style: { backgroundColor: colorHeader, color: 'black' },
      }),
      dataIndex: 'variables',
      key: 'variables',
    },
    {
      title:'MC',
      onHeaderCell: () => ({
        style: { backgroundColor: colorHeader, color: 'black' },
      }),
      children:[
        {
          title:'Line 1',
          dataIndex:'Line1MC',
          key:'Line1MC',
          onHeaderCell: () => ({
            style: { backgroundColor: colorHeader, color: 'black' },
          }),
        },
        {
          title:'Line 2',
          dataIndex:'Line2MC',
          key:'Line2MC',
          onHeaderCell: () => ({
            style: { backgroundColor: colorHeader, color: 'black' },
          }),
        },
        {
          title:'Line 3',
          dataIndex:'Line3MC',
          key:'Line3MC',
          onHeaderCell: () => ({
            style: { backgroundColor: colorHeader, color: 'black' },
          }),
        }
        
      ]
    },
    {
      title:'Caliper',
      onHeaderCell: () => ({
        style: { backgroundColor: colorHeader, color: 'black' },
      }),
      children:[
        {
          title:'Line 1',
          dataIndex:'Line1Caliper',
          key:'Line1Caliper',
          onHeaderCell: () => ({
            style: { backgroundColor: colorHeader, color: 'black' },
          }),
        },
        {
          title:'Line 2',
          dataIndex:'Line2Caliper',
          key:'Line2Caliper',
          onHeaderCell: () => ({
            style: { backgroundColor: colorHeader, color: 'black' },
          }),
        },
        {
          title:'Line 3',
          dataIndex:'Line3Caliper',
          key:'Line3Caliper',
          onHeaderCell: () => ({
            style: { backgroundColor: colorHeader, color: 'black' },
          }),
        }
        
      ]
    }
  ];


  const data = [
    {
      
      variables: 'Line',
      Line1MC: 25,
      Line2MC: 28,
      Line3MC: 30,
      Line1Caliper: 0.5,
      Line2Caliper: 0.6,
      Line3Caliper: 0.7,
    },
    {
      variables: 'Model',
      Line1MC: "K2FP",
      Line2MC: "K58",
      Line3MC: "Tokico",
      Line1Caliper: "K2SA",
      Line2Caliper: "KZLG",
      Line3Caliper: "YWSV",
    },
    {
      variables: 'Target',
      Line1MC: 120,
      Line2MC: 115,
      Line3MC: 110,
      Line1Caliper: 1.0,
      Line2Caliper: 1.1,
      Line3Caliper: 1.2,
    },
    {
      variables: 'Actual',
      Line1MC: 120,
      Line2MC: 115,
      Line3MC: 110,
      Line1Caliper: 1.0,
      Line2Caliper: 1.1,
      Line3Caliper: 1.2,
    },
    {
      variables: 'Material',
      Line1MC: 120,
      Line2MC: 115,
      Line3MC: 110,
      Line1Caliper: 1.0,
      Line2Caliper: 1.1,
      Line3Caliper: 1.2,
    },
    {
      variables: 'In Material',
      Line1MC: "20%",
      Line2MC: "70%",
      Line3MC: "100%",
      Line1Caliper: "85%",
      Line2Caliper: "100%",
      Line3Caliper: "95",
    },
  ];
  



export default function TableCard(){
    
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
                    
                />
            </Card>
        </>
    );
}