<template>
  <div class="page">
    <h1>我的日记</h1>
    <NewsCard title="最新博客">
      <NewsItem></NewsItem>
    </NewsCard>

  </div>
</template>

<script>
import NewsCard from '@/components/news/newsCard'
import NewsItem from '@/components/news/newsItem'

export default {
  name:'about',
  data(){
    return {

    }
  },
  components:{
    NewsCard,NewsItem
  }
}
</script>

<style lang="scss" scoped>
  .page{
    padding: 20px;
  }
</style>
