/*
 * @Author: 卢勇其
 * @Date: 2020-05-23 21:47:39
 * @LastEditors: your name
 * @LastEditTime: 2020-05-30 18:00:50
 * @Description: markdown 编辑器
 */ 
import React, {useState, useEffect} from 'react'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import './AddArticle.css'
import { Row, Col, Input, Select, Button, DatePicker, message } from 'antd'
import { addArticle } from '../../../apis/manage.js'

const { Option } = Select
const { TextArea } = Input

function AddArticle(){
    const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle,setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd,setIntroducemd] = useState('')            //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
    const [showDate,setShowDate] = useState()   //发布日期
    const [typeInfo ,setTypeInfo] = useState(
        [        
            {id:1,typeName:'视频教程'},
            {id:2,typeName:'快乐生活'},
        ]
    )    // 文章类别信息
    const [selectedType,setSelectType] = useState('请选择类型') //选择的文章类别 

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
    // 选择分类
    const selectTypeHandler = (value) => {
        setSelectType(value)
    }
    // 设置文章内容
    const changeContent = (e)=>{
        setArticleContent(e.target.value)
        let html=marked(e.target.value)
        setMarkdownContent(html)
    }
    // 设置简介内容
    const changeIntroducemd = (e)=>{
        setIntroducemd(e.target.value)
        let html=marked(e.target.value)
        setIntroducehtml(html)
    }
    // 保存文章
    const saveArticle = async ()=>{
        if(!selectedType){
            message.error('必须选择文章类型')
            return false
        }else if(!articleTitle){
            message.error('必须填写文章标题')
            return false
        }else if(!articleContent){
            message.error('必须填写文章内容')
            return false
        }else if(!introducemd){
            message.error('必须填写文章简介')
            return false
        }else if(!showDate){
            message.error('发布日期不能为空')
            return false
        }
        const sendData = {}
        sendData.articleTitle = articleTitle
        sendData.articleContent = articleContent
        sendData.introducemd = introducemd
        let createTime = showDate.replace('-','/')
        sendData.createTime = (new Date(createTime).getTime())/1000  //精确到秒 

        const res = await addArticle(sendData)   //发送请求 
    }
    // 生命周期 组件挂载
    useEffect(()=>{

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
                            &nbsp;
                            <Select defaultValue={selectedType} size="large" onChange={selectTypeHandler}> 
                                {
                                    typeInfo.map((item,index)=>{
                                        return (<Option key={index} value={item.id}>{item.typeName}</Option>)
                                    })
                                }
                            </Select>
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea 
                                className="markdown-content"
                                rows={35}
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
                                onChange={changeIntroducemd}
                            />
                            <br/><br/>
                            <div className="introduce-html"
                                dangerouslySetInnerHTML={{__html:introducehtml}}
                            ></div>
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker
                                    onChange={(date,dateString)=>{setShowDate(dateString)}}
                                    placeholder="发布日期"
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