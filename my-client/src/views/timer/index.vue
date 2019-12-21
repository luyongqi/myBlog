<template>
  <div class="page">
    <NewsCard title="往期文章">
        <!--时间线-->
        <div class="timebox">
            <ul class="list">
              <li>
                <span>2019-06-30</span>
                <i>这里是标题，标题下面有特殊属性，属性有推荐和头条</i>
              </li>
              <li>
                <span>2019-06-30</span>
                <i>这里是标题，标题下面有特殊属性，属性有推荐和头条</i>
              </li>
            </ul>
        </div>
    </NewsCard>
  </div>
</template>

<script>
import NewsCard from '@/components/news/newsCard'

export default {
  name: 'about',
  data() {
    return {
      reverse: true,
      activities: [{
        content: '活动按期开始',
        timestamp: '2018-04-15'
      }, {
        content: '通过审核',
        timestamp: '2018-04-13'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11'
      }]
    };
  },
  components:{
    NewsCard
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: 20px;
  ul{
    padding: 0;
  }
  .timebox{
    & li:nth-child(1) i:before{
      background: #080808;
    }
    li{
      list-style: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      &:hover i:before {
        background: #080808;
      }
      span{
          position: relative;
          line-height: 32px;
          padding-right: 40px;
          color: #999;
          &:after{
            position: absolute;
            content: "";
            width: 2px;
            height: 40px;
            background: #e0dfdf;
            right: 18px;
          }
      }
      i{
        position: relative;
        font-style: normal;
        &::before{
          content: " ";
          height: 14px;
          width: 14px;
          border: 2px solid #cccaca;
          background: #fff;
          position: absolute;
          top: 2px;
          left: -30px;
          border-radius: 50%;
          -webkit-transition: all .5s ease;
          -moz-transition: all .5s ease;
          -ms-transition: all .5s ease;
          -o-transition: all .5s ease;
          transition: all .5s ease;
        }
      }
    }
  }
}
</style>
