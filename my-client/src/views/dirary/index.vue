<template>
  <div class="page">
    <el-row :gutter="18">
      <!--左侧主体内容-->
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <div class="main-left-box">
            <!--分类简介-->
            <ClassifyIntro
              title = "个人博客日记"
              intro = "个人博客用来做什么？我的个人博客网站它不仅仅是我个人兴趣和爱好，还是我创业的起点。我爱网页设计，我爱写前端代码。它充实了我的生活，实现了我的目标和梦想。"
              :coverImg = "img1"
            ></ClassifyIntro>

            <NewsCard title="最新博客">
              <NewsList ></NewsList>
            </NewsCard>

            <!--分页-->
            <div>
              <el-pagination
                background
                layout="prev, pager, next"
                prev-text="上一页"
                next-text="下一页" 
                page-size="10"
                :total="20">
              </el-pagination>
            </div>
            
        </div>
      </el-col>

      <!--右侧内容-->
      <el-col class="hidden-sm-and-down" :md="6" :lg="6" :xl="6">
        <div class="main-right-box">
          <!--点击排行-->
          <NewsCard title="点击排行">
            <div>
              <GraphicHover></GraphicHover>
              <RankList></RankList>
            </div>
          </NewsCard>
          <!--本栏推荐-->
          <NewsCard title="本栏推荐">
            <div>
              <GraphicHover></GraphicHover>
              <GraphicItem v-for="(o,i) in 4" :key="i"></GraphicItem>
            </div>
          </NewsCard>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import {  Row, Col, Pagination } from 'element-ui';
Vue.use( Row, Col, Pagination )

import NewsCard from '@/components/news/newsCard'
import NewsList from '@/components/news/newsList'
import RankList from '@/components/news/rankList'
import GraphicHover from '@/components/news/graphicHover'
import GraphicItem from '@/components/news/graphicItem'
import ClassifyIntro from '@/components/classifyIntro/classifyIntro'

export default {
  name:'about',
  data(){
    return {
       img1: require('@/assets/images/lm01.jpg'),
    }
  },
  components:{
    NewsCard,NewsList,RankList,GraphicHover,GraphicItem,ClassifyIntro
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
  
  .page{
    padding: 20px;
    // 左侧
    .main-left-box{
      max-width: 900px; 
    }
    // 右侧
    .main-right-box{

    }
  }
</style>
