<template>
  <div class="about">
    <div class="ab_box">
      <i class="avatar_pic">
        <img class="img" src="@/../static/images/avatar.jpg" alt="">
      </i>
      <h3>即步非烟</h3>
      <p>一个80后草根女站长！Web前端设计师、网页设计师。</p>
      <p>欢迎您，来到我的个人博客，你，我生命中一个重要的过客，我们之所以是过客，因为你未曾会为我停留。</p>
    </div>
    <h2 class="gd_title">内心独白</h2>
    <p class="ab_dubai">
        09年入行。我一直潜心研究网页前端技术，一边工作一边积累经验，分享一些个人博客模板，以及网站优化等心得。我入行早，大家也亲切的叫我“青姐”。我的个人博客搜索“个人博客”、“博客”，一直都靠前。最有意思的是，我有三年的时间没有去更新它，依然排在前面。虽然期间有很多的不容易，但是我都没有放弃过。选了这一行 ，就深深的喜欢上它。我喜欢一句话“冥冥中该来则来，无处可逃”。我喜欢上了前端设计，喜欢坐在电脑前敲代码，喜欢跟一堆程序员聊天。这辈子，我也逃不出去了，深深的陷了进来。
    </p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data(){
    return{
      
      
    }
  }

}
</script>

<style lang="scss" scoped>
.about {
  overflow: hidden;
  background: url(../../../static/images/abbg.png) no-repeat right top #fff;
  padding: 20px 40px;
  border-radius: 3px;
  margin-bottom: 20px;
  margin: 20px;
  .ab_box {
    overflow: hidden;
    margin: 20px 0;
    .avatar_pic {
      position: relative;
      float: left;
      margin-right: 10px;
      background: -webkit-linear-gradient(bottom left, rgba(0, 153, 255, .9), rgba(42, 228, 197, .7));
      background: -o-linear-gradient(bottom left, rgba(0, 153, 255, .9), rgba(42, 228, 197, .7));
      background: linear-gradient(to top right, rgba(0, 153, 255, .9), rgba(42, 228, 197, .7));
      display: block;
      padding: 2px;
      width: 100px;
      border-radius: 50%;
      &:before {
        position: absolute;
        content: "";
        bottom: 0px;
        right: 10px;
        height: 24px;
        width: 24px;
        background-size: 24px;
      }
      .img {
        display: block;
        width: 100%;
        border-radius: 50%;
      }
    }
    h3 {
      margin: 10px 0 10px;
      font-size: 18px;
    }
    p {
      color: #666;
      margin-bottom: 5px;
      margin-top: 0;
    }
  }

  .gd_title {
    margin: 20px 0;
    font-size: 18px;
    background: url(../../../static/images/hline.png) no-repeat bottom right;
    width: 120px;
    clear: both;
    background-size: 40px;
    border-bottom: #000 1px dashed;
    padding-left: 10px;
    padding-bottom: 5px;
    display: inline-block;
  }
  .ab_dubai {
    margin-bottom: 15px;
    display: inline-block;
    margin-top: 0;
  }
}
</style>
