<template>
  <div class="dowebok">
    <div class="list"> 
	<ul>
		<li class="reveal-top" data-scroll-reveal="enter top"><img src="../../assets/myPhotos/1.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter right after 0.5s"><img src="../../assets/myPhotos/2.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter bottom over 1s and move 300px after 0.3s"><img src="../../assets/myPhotos/3.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter top over 0.5s and move 200px"><img src="../../assets/myPhotos/4.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter bottom over 1s and move 100px"><img src="../../assets/myPhotos/5.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter bottom over 1s and move 300px after 0.3s"><img src="../../assets/myPhotos/6.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter top over 3s after 0.5s"><img src="../../assets/myPhotos/7.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter left"><img src="../../assets/myPhotos/8.jpg" alt=""></li>
	</ul>
	<ul>	
		<li class="reveal-top" data-scroll-reveal="enter top"><img src="../../assets/myPhotos/9.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter left"><img src="../../assets/myPhotos/10.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter top"><img src="../../assets/myPhotos/11.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter top over 3s after 0.5s"><img src="../../assets/myPhotos/12.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter bottom over 1s and move 100px"><img src="../../assets/myPhotos/13.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter top over 0.5s and move 200px"><img src="../../assets/myPhotos/14.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter top over 3s after 0.5s"><img src="../../assets/myPhotos/15.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter right after 0.5s"><img src="../../assets/myPhotos/16.jpg" alt=""></li>
	</ul>
	<ul>
		<li class="reveal-top" data-scroll-reveal="enter top over 3s after 0.5s"><img src="../../assets/myPhotos/17.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter left"><img src="../../assets/myPhotos/18.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter right after 0.5s"><img src="../../assets/myPhotos/19.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter top"><img src="../../assets/myPhotos/20.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter bottom over 1s and move 100px"><img src="../../assets/myPhotos/21.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter top over 0.5s and move 200px"><img src="../../assets/myPhotos/22.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter bottom over 1s and move 300px after 0.3s"><img src="../../assets/myPhotos/23.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter right after 0.5s"><img src="../../assets/myPhotos/24.jpg" alt=""></li>
	</ul>
	<ul>
		<li class="reveal-top" data-scroll-reveal="enter left"><img src="../../assets/myPhotos/25.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter top over 3s after 0.5s"><img src="../../assets/myPhotos/26.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter bottom over 1s and move 100px"><img src="../../assets/myPhotos/27.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter top over 0.5s and move 200px"><img src="../../assets/myPhotos/28.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter top over 3s after 0.5s"><img src="../../assets/myPhotos/29.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter left"><img src="../../assets/myPhotos/30.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter top over 3s after 0.5s"><img src="../../assets/myPhotos/31.jpg" alt=""></li>
		<li class="reveal-top" data-scroll-reveal="enter bottom over 1s and move 100px"><img src="../../assets/myPhotos/32.jpg" alt=""></li>
	</ul>
</div>
  </div>
</template>


<!-- 页面滚动显示动画效果，IE10 以下无效 -->


<script>
import scrollReveal from 'scrollreveal';

export default {
  name:'about',
  data () {
    return {
      scrollReveal: scrollReveal()
    }
  },
 
  mounted() {
    window.addEventListener('scroll', ()=>{
    
      this.scrollReveal.reveal('.reveal-top', {
      // 动画的时长
      duration: 2000,
      // 延迟时间
      delay: 500,
      // 动画开始的位置，'bottom', 'left', 'top', 'right'
      origin: 'top',
      // 回滚的时候是否再次触发动画
      reset: true,
      // 在移动端是否使用动画
      mobile: true,
      // 滚动的距离，单位可以用%，rem等
      distance: '200px',
      // 其他可用的动画效果
      opacity: 0.001,
      easing: 'linear',
      scale: 0.9,
    });
  
    })
    
  }

}
</script>

<style lang="scss" scoped>
  .dowebok { font-family: "Microsoft Yahei";}
.dowebok h1 { margin: 60px 0 30px; font-size: 60px; font-weight: 500; text-align: center;}
.dowebok-explain { margin-bottom: 80px; font-size: 14px; text-align: center;}
.dowebok .list { width: 1064px; margin: 0 auto; overflow: hidden; zoom: 1;}
.dowebok .list ul { float: left; width: 246px; margin: 0 10px; list-style-type: none;}
.dowebok .list li { margin-bottom: 20px;}
.dowebok .list img { width: 100%; border-radius: 5px; vertical-align: top;}
</style>
