/*
 * @Author: 卢勇其
 * @Date: 2020-05-23 21:47:39
 * @LastEditors: your name
 * @LastEditTime: 2020-06-30 15:21:10
 * @Description: markdown 编辑器
 */ 
import React, {useState, useEffect} from 'react'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import './index.scss'
import ImgCrop from 'antd-img-crop';    //图片裁剪
import { PlusOutlined } from '@ant-design/icons';
import { Row, Col, Input,  TreeSelect, Button, DatePicker,Modal, message, Upload } from 'antd'
import { addArticle, getAllCategory, deleteImg } from '../../../apis/manage.js'
import { baseURL, imgURL } from '../../../configs/config.js'
import Moment from 'moment'

const { TextArea } = Input

function AddArticle(){
    const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [ category, setCategory ] = useState('请选择')       //默认选择的分类
    const [ treeData, setTreeData ] = useState([])        //分类树形结构
    const [articleTitle,setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd,setIntroducemd] = useState('')            //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
    const [showDate,setShowDate] = useState('')   //发布日期 
    const [ fileList, setFileList ] = useState([]);       //图片列表
    const [ previewVisible, setPreviewVisible ] = useState(false)    //预览图片弹框是否隐藏
    const [ previewImage, setPreviewImage ] = useState('')          //预览图片路径
    const [ previewTitle, setPreviewTitle ] = useState('')          //预览图片名称

    marked.setOptions({
        renderer:marked.Renderer(),
        gfm:true,
        pedantic:false,
        sanitize:false,
        tables:true,
        breaks:false,
        smartLists:true,
        smartypants:false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    })
    
    // 选择分类 分类下拉框
    const onChange = value => {      
        setCategory(value)
      };
    // 设置文章内容
    const changeContent = (e)=>{
        setArticleContent(e.target.value)
        let html=marked(e.target.value)
       
        setMarkdownContent(html)
    }
    // 发布时间发生改变时
    const changeDate = (date,dateString)=>{
        setShowDate(dateString)
    }
    // 设置简介内容
    const changeIntroducemd = (e)=>{
        setIntroducemd(e.target.value)
        let html=marked(e.target.value)
        setIntroducehtml(html)
    }
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
    
    const handleCancelPrev = () => setPreviewVisible(false);     //隐藏图片预览弹框

    const handlePreview = async file => {                //预览
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
        if(file.status=='done'){
            setPreviewImage(imgURL + file.response.data.cover)
        }
    };
      
    const handleChange = ({ fileList }) => {     //上传文件改变时的状态
    setFileList(fileList)
    };   
    
    const handleRemove = async ( file ) => {           //移除图片      
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
    // 初始化数据
    const initData = async () => {
        setArticleTitle('')
        setCategory('请选择')
        setArticleContent('')
        setIntroducemd('')
        setMarkdownContent('预览内容')
        setIntroducehtml('等待编辑')
        setFileList([])
    }

    // 保存文章
    const saveArticle = async ()=>{
     
        if(!articleTitle){
            message.error('必须填写文章标题')
            return false
        }else if(category=='请选择'){
            message.error('必须选择文章类型')
            return false
        }else if(!articleContent){
            message.error('必须填写文章内容')
            return false
        }else if(!introducemd){
            message.error('必须填写文章简介')
            return false
        }else if(fileList.length==0){
            message.error('请上传文章封面图')
            return false
        }else if(!showDate){
            message.error('发布日期不能为空')
            return false
        }
        const sendData = {}
        sendData.articleTitle = articleTitle
        sendData.articleContent = articleContent
        sendData.introducemd = introducemd
        sendData.category = category
        let createTime = showDate.replace('-','/')
        sendData.createTime = new Date(createTime).getTime() //精确到秒
        if(fileList[0].status=='done'){
            sendData.coverImg = fileList[0].response.data.cover
        }else{
            message.error('请重新上传图片')
        } 
        const res = await addArticle(sendData)   //发送请求 
        if(res&&res.data.code==200){
            message.success('保存成功')
            initData()         //初始化数据
        }else{
            message.error('保存失败')
        }
    }
    // 生命周期 组件挂载
    useEffect(()=>{
        async function fetchData(){
            const res = await getAllCategory()   //获取分类列表
            if(res&&res.data.code == 200){
              let list = res.data.data;
              let arr = getTree(list,'')
              let arr1 = JSON.stringify(arr).replace(/categoryName/g,'title').replace(/_id/g,'value')
              setTreeData(JSON.parse(arr1)[0].children) 
            }
        }
        setShowDate(Moment(Date.now()).format('YYYY-MM-DD'))
        fetchData();
    },[])
    
    return (
        
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input 
                                value={articleTitle}
                                placeholder="博客标题"
                                size="large"
                                onChange={e=>{setArticleTitle(e.target.value)}}
                            />
                        </Col>
                        <Col span={4}>
                            <TreeSelect
                                style={{ width: '100%' }}
                                value={ category }
                                size="large"
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                treeData={treeData}
                                placeholder="Please select"
                                onChange={onChange}
                            />
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea 
                                className="markdown-content"
                                rows={35}
                                value={articleContent}
                                placeholder="文章内容"
                                onChange={changeContent}
                            />
                        </Col>
                        <Col span={12}>
                            <div className="show-html" 
                                dangerouslySetInnerHTML={{__html:markdownContent}}
                            ></div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <Button size="large">暂存文章</Button>&nbsp;
                            <Button type="primary" size="large" onClick={saveArticle}>保存文章</Button>
                            <br/>
                        </Col>
                        <Col span={24}>
                            <br/>
                            <TextArea
                                rows={4}
                                placeholder="文章简介"
                                value={introducemd}
                                onChange={changeIntroducemd}
                            />
                            <br/><br/>
                            <div className="introduce-html"
                                dangerouslySetInnerHTML={{__html:introducehtml}}
                            ></div>
                        </Col>
                        <Col span={24}>
                            <br/>
                            <ImgCrop rotate  aspect={ 617/260 }>
                            <Upload
                              action={`${baseURL}/tools/savecover`} 
                              listType="picture-card"
                              fileList={fileList}
                              name="cover"
                              onPreview={handlePreview}
                              onChange={handleChange}
                              onRemove={handleRemove}
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
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker
                                    onChange={changeDate}
                                    placeholder="发布日期"
                                    allowClear={false}
                                    value={Moment(showDate, 'YYYY-MM-DD')}
                                    size="large"
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AddArticle