<template>
	<div class="dowebok">
		<el-row :gutter="10" class="list">
			<el-col v-for="o in 4" :key="o" :span="6">
				<el-image class="reveal-top" v-for="(item,i) in imgList" :key="i" :src="item.src" fit="cover"></el-image>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import scrollReveal from 'scrollreveal';           //页面滚动效果
import Vue from 'vue'
import { Image, Row, Col } from 'element-ui';
Vue.use(Image, Row, Col, )

export default {
	name: 'about',
	data() {
		return {
			scrollReveal: scrollReveal(),
			imgList: [
				{
					src: require('../../assets/myPhotos/1.jpg')
				},
				{
					src: require('../../assets/myPhotos/2.jpg')
				},
				{
					src: require('../../assets/myPhotos/3.jpg'),
				},
				{
					src: require('../../assets/myPhotos/4.jpg'),
				},
				{
					src: require('../../assets/myPhotos/5.jpg'),
				},
				{
					src: require('../../assets/myPhotos/6.jpg'),
				},
				{
					src: require('../../assets/myPhotos/7.jpg'),
				},
				{
					src: require('../../assets/myPhotos/8.jpg'),
				},
				{
					src: require('../../assets/myPhotos/9.jpg'),
				},
				{
					src: require('../../assets/myPhotos/10.jpg'),
				},
				{
					src: require('../../assets/myPhotos/11.jpg'),
				},
				{
					src: require('../../assets/myPhotos/12.jpg'),
				},
				{
					src: require('../../assets/myPhotos/13.jpg'),
				},
				{
					src: require('../../assets/myPhotos/14.jpg'),
				},
				{
					src: require('../../assets/myPhotos/15.jpg'),
				},
				{
					src: require('../../assets/myPhotos/16.jpg'),
				},
				{
					src: require('../../assets/myPhotos/17.jpg'),
				},
				{
					src: require('../../assets/myPhotos/18.jpg'),
				},
				{
					src: require('../../assets/myPhotos/19.jpg'),
				},
				{
					src: require('../../assets/myPhotos/20.jpg'),
				},
				
			],
		}
	},
	components: {

	},
	created(){
		console.log(this.initList(),6666)
	
	},
	mounted() {
		this.scrollReveal.reveal('.reveal-top', {
			// 动画的时长
			duration: 1000,
			// 延迟时间
			delay: 0,
			// 动画开始的位置，'bottom', 'left', 'top', 'right'
			origin: 'bottom',
			// 回滚的时候是否再次触发动画
			reset: true,
			// 在移动端是否使用动画
			mobile: false,
			// 滚动的距离，单位可以用%，rem等
			distance: '30px',
			// 其他可用的动画效果
			opacity: 0,
			easing: 'ease-in-out',
			scale: 1,
		});
	},
	methods: {
		 //初始化数组 
			initList(){
				let arr = []
				let arr0 = [],arr1 = [],arr2 = [],arr3 = [];
				this.imgList.forEach((item,i)=>{
					for(let k=0;k<4;k++){
						if(i%k==k){
							console.log(i,k)
							// arr[k].push(item)
						}
					}	
				});
				console.log(arr0)
				return arr
		},
	}

}
</script>

<style lang="scss" scoped>
.dowebok {
	font-family: "Microsoft Yahei";
	padding: 20px;
	.list{
		width: 100%;
	}
}
</style>
