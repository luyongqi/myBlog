/*
 * @Author: 卢勇其
 * @Date: 2020-06-13 10:18:39
 * @LastEditors: 卢勇其
 * @LastEditTime: 2020-06-18 23:23:15
 */ 

import React, { useState, useEffect } from 'react';
import './index.scss'
import { message, Card, Table, Empty, Button, Modal, Form, Input, TreeSelect, Upload, InputNumber } from 'antd'
import ImgCrop from 'antd-img-crop';    //图片裁剪
import { PlusOutlined } from '@ant-design/icons';
import { getAllCategory, addCategory } from '../../../apis/manage.js'

function ArticleCategory(){
    const [ visible, setVisible ] = useState(false)
    const [ category, setCategory ] = useState('')       //默认选择的分类
    const [ categoryList, setCategoryList ] = useState([])       //分类列表
    const [ treeData, setTreeData ] = useState([])        //分类树形结构
    const [fileList, setFileList] = useState([          //图片列表
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ]);
    
    const [ previewVisible, setPreviewVisible ] = useState(false)    //预览图片弹框是否隐藏
    const [ previewImage, setPreviewImage ] = useState('')          //预览图片路径
    const [ previewTitle, setPreviewTitle ] = useState('')          //预览图片名称

    const columns = [
        {
        title: 'ID',
        dataIndex: '_id',
        key: '_id',
        },
       
        {
        title: '名称',
        dataIndex: 'categoryName',
        width: '10%',
        key: 'categoryName',
        },
        {
          title: '分类简介',
          dataIndex: 'categoryIntro',
          width: '25%',
          key: 'categoryIntro',
          },
        {
          title: '链接地址',
          dataIndex: 'linkSrc',
          width: '14%',
          key: 'linkSrc',
          },
        {
          title: '文章数量',
          dataIndex: 'articleCount',
          width: '7%',
          key: 'count',
        }, 
        {
          title: '排序',
          dataIndex: 'rank',
          key: 'rank',
          width: '5%',
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          key: 'createTime',
          width: '12%',
        },
        {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: () => <a>Delete</a>,
        },
    ]
    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
      };
      const tailLayout = {
        wrapperCol: { offset: 20, span: 4 },
      };
    const rowSelection = {                //配置选项
        onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
        },
    }   
    const showModal = () => {            //显示弹框
        setVisible(true)
      };
    
     const handleOk = () => {              //点击确定按钮
        setVisible(false)
      };
    
     const handleCancel = () => {             //隐藏弹框
        setVisible(false)
      };

      const onFinish = async (values) => {             //表单填写完成                 
        const res = await addCategory(values)      //添加文章分类
        if(res.data.code==200){
          message.success(res.data.msg);
          const res1 =  await getAllCategory()   //获取分类列表
          if(res1.data.code == 200){
            let list = res1.data.data
            let arr = getTree(list,'')
            let arr1 = JSON.stringify(arr).replace(/categoryName/g,'title').replace(/_id/g,'value')
            setCategoryList(arr[0].children) 
            setTreeData(JSON.parse(arr1))
          }
          setVisible(false)
        }
       
      };
    
      const onFinishFailed = errorInfo => {  //失败
        console.log('Failed:', errorInfo);
      };

      const onChange = value => {       //分类下拉框
        console.log(value);
        setCategory(value)
      };
      const handleCancelPrev = () => setPreviewVisible(false);     //隐藏图片预览弹框

      const handlePreview = async file => {                //预览
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
        setPreviewImage(file.url)
      };

      const handleChange = ({ file, fileList }) => {     //上传文件改变时的状态
        console.log(file,'66666')
        setFileList(fileList)
      };      
      //转成树
      const getTree = (data, Pid) => {
        let result = []
        let temp
        for (let i = 0; i < data.length; i++) {
            if (data[i].supCategory == Pid) {
                temp = getTree(data, data[i]._id)
               
                if (temp.length > 0) {
                    data[i].children = temp
                }
                result.push(data[i])
            }
        }
        return result
    }
   
      //生命周期
      useEffect(()=>{
        async function fetchData(){
          const res = await getAllCategory()   //获取分类列表
          if(res&&res.data.code == 200){
            let list = res.data.data;
            let arr = getTree(list,'')
            let arr1 = JSON.stringify(arr).replace(/categoryName/g,'title').replace(/_id/g,'value')
            setCategoryList(arr[0].children) 
            setTreeData(JSON.parse(arr1)) 
          }
        }
        fetchData();
        
      },[])
   return (
        <div>
            <Card title="文章分类"  extra={<Button type="primary" onClick={showModal}>新增分类</Button>}>
                <Table columns={columns} bordered rowSelection={rowSelection} dataSource={categoryList} />
                <Modal
                    visible={visible}
                    title="添加分类"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <Form
                        {...layout}
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        >
                        <Form.Item
                        label="分类名称"
                        name="categoryName"
                        rules={[{ required: true, message: '请填写分类名称!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                        label="排序"  
                        name="rank"
                        >
                          <InputNumber  />
                        </Form.Item>
                        <Form.Item
                        label="上级分类"
                        name="supCategory"
                        >
                            <TreeSelect
                                style={{ width: '100%' }}
                                value={ category }
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                treeData={treeData}
                                placeholder="Please select"
                                onChange={onChange}
                            />
                        </Form.Item>

                        <Form.Item
                        label="链接地址"  
                        name="linkSrc"
                        rules={[{ required: true, message: '请填写链接地址!' }]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item 
                        label="分类简介"
                        name= 'categoryIntro' 
                        rules={[{ required: true, message: '请填写分类简介!' }]}
                        >
                          <Input.TextArea />
                        </Form.Item>

                        <Form.Item
                        label="封面图"
                        name="coverImg"
                        >
                          <ImgCrop rotate>
                            <Upload
                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              listType="picture-card"
                              fileList={fileList}
                              name="file"
                              onPreview={handlePreview}
                              onChange={handleChange}
                            >
                              {
                                fileList.length >= 1 ? null : (
                                  <div>
                                    <PlusOutlined />
                                    <div className="ant-upload-text">Upload</div>
                                  </div>
                                )
                              }
                            </Upload>
                          </ImgCrop>

                          {/* 图片预览弹框*/}
                          <Modal
                            visible={previewVisible}
                            title={previewTitle}
                            footer={null}
                            onCancel={handleCancelPrev}
                          >
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                          </Modal>

                        </Form.Item>
                              
                        <Form.Item {...tailLayout} style={{marginBottom:0}}>
                            <Button type="primary" htmlType="submit" >
                                确定
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </Card>
        </div>
   )
}


export default ArticleCategory