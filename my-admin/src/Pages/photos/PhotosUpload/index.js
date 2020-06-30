/*
 * @Author: 卢勇其
 * @Date: 2020-06-13 10:52:19
 * @LastEditors: your name
 * @LastEditTime: 2020-06-30 17:16:35
 */ 
import React, { useState, useEffect } from 'react';
import { Modal, message, Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons';
import { baseURL, imgURL } from '../../../configs/config.js'
import { deleteImg, getAlbumDir } from '../../../apis/manage.js'
import './index.scss'

const { Dragger } = Upload;

function PhotosUpload(){
    const [ previewVisible, setPreviewVisible ] = useState(false)    //预览图片弹框是否隐藏
    const [ previewImage, setPreviewImage ] = useState('')          //预览图片路径
    const [ previewTitle, setPreviewTitle ] = useState('')          //预览图片名称
    
    useEffect(()=>{
        getAlbumDir()
    },[])
    
    // 图片上传
   const handleChange = async (info) => {
        const { status } = info.file;
        if (status !== 'uploading') {
         
        }
        if (status === 'done') {
            message.success(`${info.file.name} 上传成功`);
        } else if (status === 'error') {
            message.error(`${info.file.name} 上传失败`);
        }
    }
     //移除图片
    const handleRemove = async ( file ) => {              
        let imgSrc;  
        if(file.response){
          imgSrc = file.response.data.cover
        }else{
          imgSrc = file.coverImg
        }
        let arr=[]
        arr.push(imgSrc)
        //调用图片删除方法
        const res =  await deleteImg(arr)
        if(res&&res.data.code==200){
            message.error('删除成功')
        }
      }
      const handleCancelPrev = () => setPreviewVisible(false);     //隐藏图片预览弹框
      //图片预览
      const handlePreview = async file => {           
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
        if(file&&file.response){
            setPreviewImage(imgURL + file.response.data.cover)
        }
      };
   return (
     <div>
        <Dragger 
            action={`${baseURL}/tools/savecover`} 
            listType="picture-card"
            multiple={true}
            name="cover"
            onChange={handleChange}
            onRemove={handleRemove}
            onPreview={handlePreview}
        >
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">单击或拖动文件到此区域上传</p>
            <p className="ant-upload-hint">
                支持单个或批量上传。严禁上传公司资料或其他资料带文件
            </p>
        </Dragger>
        {/* 图片预览弹框*/}
        <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={handleCancelPrev}
        >
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
       </div>
   )
}


export default PhotosUpload