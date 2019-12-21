<template>
  <div class="page">
    <el-row :gutter="18">
      <!--左侧主体内容-->
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <div class="main-left-box">
            <!--分类简介-->
            <ClassifyIntro
              title = "CSS3|Html5"
              intro = "博客网站制作，本栏目主要是分享关于域名选择、空间购买，个人博客网站模板制作，网站后期维护运营，优化等相关文章，以及提供帝国cms建站过程中遇到问题的解决办法。"
              :coverImg = "img3"
            ></ClassifyIntro>

            <NewsCard title="最新博客">
              <NewsList ></NewsList>
            </NewsCard>
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
import {  Row, Col } from 'element-ui';
Vue.use( Row, Col )

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
      img3: require('@/assets/images/lm03.jpg'),
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
