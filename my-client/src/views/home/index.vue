<template>
  <div class="app-container">

    <el-row :gutter="18">
      <!--左侧主体内容-->
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <div class="main-left-box">
          <!--顶部-->
          <div class="headbox">
            <el-row :gutter="12">
              <!--轮播-->
              <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
                <el-carousel class="carousel" trigger="click" height="260px" :interval="5000">
                  <el-carousel-item class="carousel-item" v-for="(item,index) in carouselData" :key="index">
                    <el-image class="img" :src="item.url" fit="cover"></el-image>
                  </el-carousel-item>
                </el-carousel>
              </el-col>
              <!-- 中间两张图片 -->
              <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="headline">
                  <router-link to="" title="为什么说10月24日是程序员的节日">
                    <el-image class="img1" :src="img1" fit="cover"></el-image>
                    <span>为什么说10月24日是程序员的节日</span>
                  </router-link>
                </div>
              </el-col>

              <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="headline">
                  <router-link to="" title="个人网站做好了，百度不收录怎么办？">
                    <el-image class="img1" :src="img2" fit="cover"></el-image>
                    <span>个人网站做好了，百度不收录怎么办？</span>
                  </router-link>
                </div>
              </el-col>
            </el-row>
          </div>
          <!--tab 选项卡-->
          <div class="whitebg tabbox">
            <el-tabs v-model="activeName">
              <el-tab-pane :label="item.title" :name="index+''" v-for="(item,index) in tabList" :key="index">
                <el-row>
                  <!--图文-->
                  <el-col :span="6">
                    <div class="c-left-box" v-for="(p,i) in item.recommendList" :key="i">
                      <router-link to="" :title="p.title">
                        <el-image class="c-img" :src="p.src" fit="cover"></el-image>
                        <span>{{p.title}}</span>
                      </router-link>
                    </div>
                  </el-col>
                  <!--手风琴-->
                  <el-col :span="18">
                    <ul class="newslist">
                      <li v-for="(m,k) in item.newsList" :key="k">
                        <i></i>
                        <router-link class="ltitle" to="" :title="m.title">{{m.title}}</router-link>
                        <p>{{m.content}}</p>
                      </li>
                    </ul>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </div>
          <!--特别推荐-->
          <div class="recommend-box whitebg">
            <el-card class="box-card" :body-style="{ padding: '0px' }">
              <!--标题-->
              <div slot="header" class="rtitle">
                <span>特别推荐</span>
              </div>

              <!--卡片列表-->
              <el-row class="list-box">
                <el-col v-for="o in 6" :key="o" class="item" :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
                  <el-card class="box-card" shadow="hover">
                      <div class="img-box">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" fit="cover" class="image">
                      </div>
                      <div >
                        <b>【个人博客空间申请】金牛云服，免费领空间啦</b>
                        <span>创立“程序员节”最早是来自俄文《计算机世界》（《Компьютерра》）出版社的主编德米特里·门德列留科（Дмитрий Мендрелюк）在1996年7月15日的想法，当时计划将节日命名为“计算机用户节”，定在每年9月份的第一个星期五，称之为“纯净的星期五</span>
                        <el-button type="text" class="button">+文章阅读</el-button>
                      </div>
                 </el-card>
                </el-col>
              </el-row>
             </el-card>
          </div>

          <!--分隔图片-->
          <div class="ad-box whitebg">
            <el-image class="ad-img" :src="adImg" fit="cover"></el-image>
          </div>

          <!--最新博文-->
          <div class="new-list-box whitebg">
            <el-card class="box-card" :body-style="{ padding: '0px' }">
              <div slot="header" class="rtitle">
                <span>最新博文</span>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
          </div>

        </div>
      </el-col>

      <!--右侧内容-->
      <el-col class="hidden-sm-and-down" :md="6" :lg="6" :xl="6">
        <div class="main-right-box">
          <!--我的名片-->
          <div class="card">
            <h2 class="title">我的名片</h2>
            <p>网名：DanceSmile | 即步非烟</p>
            <p>职业：Web前端设计师、网页设计</p>
            <p>现居：湖北省-武汉市</p>
            <p>Email：dancesmiling@qq.com</p>
            <ul class="linkmore">
              <li>
                <router-link class="linkto iconfont iconshouye" title="网站地址" to="/"></router-link>
              </li>
              <li>
                <router-link class="linkto iconfont iconyouxiang-" title="我的邮箱" to="/"></router-link>
              </li>
              <li>
                <router-link class="linkto iconfont iconicon" title="QQ联系我" to="/"></router-link>
              </li>
              <li>
                <router-link class="linkto iconfont iconweixin" title="网站地址" to="/"></router-link>
              </li>
            </ul>
          </div>
          <div class="whitebg notice"></div>
          <div class="whitebg recommend"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { Carousel, Image, Row, Col, Tabs, Collapse, Card } from 'element-ui';
Vue.use(Carousel, Image, Row, Col, Tabs, Collapse, Card)

export default {
  name: 'home',
  data() {
    return {
      img1: require('@/assets/images/h1.jpg'),
      img2: require('@/assets/images/h2.jpg'),
      adImg: require('@/assets/images/longad.jpg'),    //广告图片
      carouselData: [
        { url: require('@/assets/images/1.jpg'), title: '你看我叼吗1', id: 1 },
        { url: require('@/assets/images/2.jpg'), title: '你看我叼吗2', id: 2 },
        { url: require('@/assets/images/3.jpg'), title: '你看我叼吗3', id: 3 },
        { url: require('@/assets/images/4.jpg'), title: '你看我叼吗3', id: 3 }
      ],
      activeName: '0',   //当前绑定的选项卡
      collapseName: ['0'],  //手风琴绑定的name
      tabList: [
        {
          title: '个人博客',
          recommendList: [ //2条 图文
            {
              id: 5,
              title: '个人网站做好了，百度不收录怎么办？来，看看他们怎么做的',
              src: require('@/assets/images/4.jpg')
            },
            {
              id: 6,
              title: '个人博客，属于我的小世界！',
              src: require('@/assets/images/2.jpg')
            },
          ],
          newsList: [  //5条
            {
              id: 1,
              title: '安静地做一个爱设计的女子',
              content: '自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当看到自己喜欢的配色图片'
            },
            {
              id: 2,
              title: '电话以外的宁静',
              content: '电话很久没有响过了，我的QQ也很久没有在线了，消失了很多天，刚刚结识的朋友因为我身上又起了红疹，每天都发来消息询问我的情况，我做到了这么多天来的沉默，我相信，没有网络，我还是可以继续我自己的生活'
            },
            {
              id: 3,
              title: '遇见一个未知的你',
              content: '听着那熟悉的歌曲看着那一张张可爱的图片.-读着我们共同欣赏的诗……也许我们曾经相遇,看着你远去的背影 ,沿着你来的方向 ,回忆时间穿梭于幸福的点点滴滴....'
            },
            {
              id: 4,
              title: '个人网站做好了，百度不收录怎么办？来，看看他们怎么做的...',
              content: '不管你是学前端的还是后端的，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了'
            },
            {
              id: 5,
              title: '个人博客，属于我的小世界！',
              content: '个人博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。'
            },
          ]
        },
        {
          title: 'css3|html5',
          recommendList: [],
          newsList: []
        },
        {
          title: '推荐工具',
          recommendList: [],
          newsList: []
        },
        {
          title: '设计心得',
          recommendList: [],
          newsList: []
        }

      ]
    }
  },
  computed: {

  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.app-container {
  // 白色背景盒子
  .whitebg {
    background: #fff;
    border-radius: 3px;
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;
  } // 左侧
  .main-left-box {
    max-width: 900px; // 顶部盒子内容
    .headbox {
      // 轮播
      .carousel {
        width: 100%;
        margin-bottom: 20px;
        .carousel-item {
          .img {
            width: 100%;
            height: 100%;
            border-radius: 3px;
          }
        }
      }
      .headline {
        width: 100%;
        background: #000;
        overflow: hidden;
        height: 125px;
        margin-bottom: 10px;
        border-radius: 3px;
        position: relative;
        .img1 {
          width: 100%;
          height: 100%;
          opacity: 0.7;
          transition: all 0.5s ease;
        }
        span {
          bottom: 0;
          position: absolute;
          height: 48px;
          top: 30%;
          left: 0;
          right: 0;
          color: #FFF;
          text-align: center;
          font-size: 15px;
          margin-top: 5px;
          padding: 0 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-height: 24px;
        }
      }
      .headline:hover .img1 {
        opacity: 0.9;
        transform: scale(1.1);
      }
    } //tab
    .tabbox {
      width: 100%;
      .c-left-box {
        position: relative;
        height: 100px;
        margin-bottom: 10px;
        background: rgba(0, 0, 0, 1);
        overflow: hidden;
        border-radius: 3px;
        .c-img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 3px;
          opacity: 0.7;
          transition: all 0.5s ease;
        }
        span {
          position: absolute;
          bottom: 30%;
          left: 0;
          right: 0;
          color: #FFF;
          text-align: center;
          font-size: 15px;
          padding: 0 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-height: 22px;
        }
      }
      .c-left-box:hover .c-img {
        opacity: 0.9;
        transform: scale(1.1);
      }
      .newslist {
        margin: 0;
        padding-left: 20px;
        text-align: left;

        & li {
          list-style: none;
          height: 32px;
          overflow: hidden;
          padding: 0 20px 6px 20px;
          i {
            display: block;
            width: 20px;
            height: 20px;
            float: left;
            margin-top: 6px;
            margin-right: 20px;
            position: relative;
            font-style: normal;
            background: #9a9a9a;
            &:before {
              position: absolute;
              left: 0;
              top: 0;
              font-size: 9px;
              color: #fff;
              line-height: 20px;
              width: 20px;
              text-align: center;
            }
          }
        }

        & li:nth-child(1) {
          height: 100%;
          background: #f7f7f7;
          i {
            background: #222;
          }
          .ltitle {
            font-weight: bold;
          }
        }
        &:hover {
          & li {
            height: 32px;
            background: #fff;
            i {
              background: #9a9a9a;
            }
            .ltitle {
              font-weight: normal;
            }
          }
        }
        & li:hover {
          height: 100%;
          background: #f7f7f7;
          i {
            background: #222;
          }
          .ltitle {
            font-weight: bold;
          }
        }

        & li:nth-child(1) i::before {
          content: "1";
        }
        & li:nth-child(2) i::before {
          content: "2";
        }
        & li:nth-child(3) i::before {
          content: "3";
        }
        & li:nth-child(4) i::before {
          content: "4";
        }
        & li:nth-child(5) i::before {
          content: "5";
        }
        & .ltitle {
          display: inline-block;
          width: 70%;
          height: 32px;
          line-height: 32px;
          color: #333;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        & p {
          height: 48px;
          line-height: 24px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          margin: 0;
        }
      }
    } 
    
    // 特别推荐
    .recommend-box,.new-list-box {
      .el-card.is-always-shadow {
        box-shadow: none;
        border: none;
         .rtitle {
          height: 100%;
          position: relative;          
          span::after {
            position: absolute;
            width: 60px;
            height: 2px;
            content: "";
            background: #1296DB;
            left: 0;
            bottom: -18px;
            transition: all .5s ease;
          }
          span {
            padding: 18px 0;
            font-size: 16px;
            color: #484848;
          } 
        }
        .rtitle:hover span:after {
          width: 80px;
        }
      }
    }
     // 特别推荐
      .recommend-box{
        .list-box{
          margin-top: 20px;
          .el-card{
            border-radius:0;
            border: none;
            border-bottom: #eee 1px solid;
            border-left: #eee 1px solid;
          }
          .el-card.is-hover-shadow:hover{
              box-shadow:  1px 1px 8px #ccc;
          }
          .el-card:hover .image{
              transform: scale(1.1)
            }
          .box-card{
            .img-box{
              width: 100%;
              height: 100px;
              overflow: hidden;
              border-radius: 3px;
              background: #CCC;
              .image{
                 display: block;
                  width: 100%;
                  height: 100%;
                  border-radius: 3px;
                  transition: all 0.5s ease;
                }
            }
            
            
            b{
                  display: block;
                width: 100%;
                overflow: hidden;
                height: 30px;
                line-height: 30px;
                margin: 10px 0;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            span{
                color: #999;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                height: 62px;
                font-size: 14px;
                line-height: 21px;
                display: block;
            }
            
            .button{
                  font-size: 15px;
                  color: #096;
                  display: block;
                  padding-bottom: 0;
            }
            .button:hover{
              color: #333;
            }
          }
        }
      }
     // 广告图片
    .ad-box {
      .ad-img {
        width: 100%;
        height: 130px;
      }
    } 

    // 最新博文
    .new-list-box {
      
    }

  } 
  
  // 右侧
  .main-right-box {
    .card {
      box-shadow: 0px 1px 0px rgba(255, 255, 255, .1), inset 0px 1px 1px rgba(0, 0, 0, .7);
      border-radius: 3px;
      background: #2A2A2A;
      height: 260px;
      overflow: hidden;
      margin-bottom: 20px;
      text-align: left;
      & h2 {
        font-size: 22px;
        margin: 10px;
        color: #89919a;
        font-weight: normal;
        padding-bottom: 10px;
      }
      & p {
        font-size: 12px;
        padding: 0 0 0 20px;
        line-height: 28px;
        text-shadow: 0px 1px 2px rgba(0, 0, 0, .5);
        color: #d0d2d4;
        margin: 0;
      }
      .linkmore {
        width: 100%;
        padding: 0 20px;
        margin: 20px 0 15px;
        &:after {
          display: table;
          content: '';
          clear: both;
          overflow: hidden;
        }
        & li {
          width: 25%;
          list-style: none;
          float: left;
          .linkto {
            width: 53px;
            height: 53px;
            line-height: 53px;
            display: block;
            overflow: hidden;
            box-shadow: 0px 1px 0px rgba(255, 255, 255, .1), inset 0px 1px 1px rgba(0, 0, 0, .7);
            border-radius: 50%;
            margin: 0 5px;
          }
          .iconshouye {
            color: #ef5509;
            font-size: 32px;
          }
          .iconyouxiang- {
            color: #FF991A;
            font-size: 28px;
          }
          .iconicon {
            color: #1296DB;
            font-size: 30px;
          }
          .iconweixin {
            color: #07AF12;
            font-size: 32px;
          }
        }
      }
    }
  }
}
</style>
