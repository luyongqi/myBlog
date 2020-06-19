/*
 * @Author: 卢勇其
 * @Date: 2020-06-11 19:26:22
 * @LastEditors: your name
 * @LastEditTime: 2020-06-19 18:30:26
 * @Description: 工作台
 */ 

import React, { useState } from 'react';

function EditArticle(props){
   const [data,setData] = useState('')
    console.log(props)
   return (
       <div>这是文章编辑页面</div>
   )
}


export default EditArticle