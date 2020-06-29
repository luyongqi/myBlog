/*
 * @Author: 卢勇其
 * @Date: 2020-06-13 10:23:33
 * @LastEditors: your name
 * @LastEditTime: 2020-06-29 18:25:21
 */ 

import React, { useState, useEffect } from 'react';
import './index.scss'
import { message, Card, Table, Empty, Button, Modal, Form, Input, TreeSelect, Upload, InputNumber } from 'antd'
import Moment from 'moment'

import { getArticleList } from '../../../apis/manage.js'
import { baseURL, imgURL } from '../../../configs/config.js'

function ArticleList(props){
    const [ articleList, setArticleList ] = useState([])       //分类列表
    const columns = [
        {
        title: 'ID',
        dataIndex: '_id',
        key: '_id',
        },
       
        {
        title: '标题',
        dataIndex: 'articleTitle',
        width: '10%',
        key: 'articleTitle',
        },
        {
          title: '封面图',
          dataIndex: 'coverImg',
          width: '10%',
          key: 'coverImg',
          render:(coverImg)=><img src={`${imgURL}${coverImg}`} width="90px"/>
        },
        {
          title: '文章简介',
          dataIndex: 'introducemd',
          width: '20%',
          key: 'introducemd',
        },
        {
          title: '所属分类',
          dataIndex: 'category',
          width: '6%',
          key: 'category',
        }, 
        {
          title: '置顶级别',
          dataIndex: 'stickRank',
          key: 'stickRank',
          width: '6%',
        },
        {
            title: '是否轮播',
            dataIndex: 'isCarousel',
            key: 'isCarousel',
            width: '6%',
        },
        {
            title: '推荐类型',
            dataIndex: 'recommendType',
            key: 'recommendType',
            width: '6%',
        },
        {
            title: '浏览量',
            dataIndex: 'lookCount',
            key: 'lookCount',
            width: '5%',
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          key: 'createTime',
          width: '7%',
        },
        {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
              <Button size="small" type="primary" onClick={( )=> editCategory(record) }>Edit</Button>
            ),
        },
    ]
    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
    };
    const tailLayout = {
      wrapperCol: { offset: 20, span: 4 },
    };
    const handleAdd = () => {
       props.history.push('/admin/article/add') 
    }

    const editCategory = (record) => {             //修改分类
      
      props.history.push('/admin/article/edit')
    };
    const refreshList = async () => {
        const res =  await getArticleList()         //获取分类列表
        if(res.data.code == 200){
          let list = res.data.data
          for (let i = 0; i < list.length; i++) {
            list[i].createTime = Moment(list[i].createTime).format('YYYY-MM-DD')
        }
          setArticleList(list)
        }
      }
    //生命周期
    useEffect(()=>{
        refreshList()
    },[])
    
    return (
        <div>
            <Card title="文章列表"  extra={<Button type="primary" onClick={ handleAdd }>新增文章</Button>}>
                <Table columns={columns} bordered  dataSource={articleList} />
            </Card>
        </div>
   )
}


export default ArticleList