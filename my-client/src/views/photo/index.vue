<template>
	<div class="dowebok">
		<el-row :gutter="10" class="list">
			<el-col v-for="(item,i) in revealList" :key="i" :span="6">
				<div class="reveal-top card-box" v-for="(p,k) in item" :key="k">
					<div class="img-box">
						<el-image class="img" :src="p.src" fit="cover"></el-image>
					</div>
					<div class="picinfo">
						<h3>个人博客模板《繁花》</h3>
						<span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span>
					</div>
				</div>
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
			revealList:[]
		}
	},
	components: {

	},
	created(){
		this.revealList = this.initList()
	},
	mounted() {
		this.scrollReveal.reveal('.reveal-top', {
			// 动画的时长
			duration: 1000,
			// 延迟时间
			delay: 500,
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
				this.imgList.map((item,i)=>{
					if(i%4==0){
						arr0.push(item)
					}
					if(i%4==1){
						arr1.push(item)
					}
					if(i%4==2){
						arr2.push(item)
					}	
					if(i%4==3){
						arr3.push(item)
					}
				});
				arr[0] = arr0;
				arr[1] = arr1;
				arr[2] = arr2;
				arr[3] = arr3;
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
		.reveal-top{
			margin-bottom: 20px;
		}
		.card-box{
			width: 100%;
			height: 100%;
			background:#fff;
			.img-box{
				padding: 10upx;
				margin-bottom: 10upx;
				.img{
					display: block;
					padding: 10px;
				}
			}
			.picinfo{
				h3{
					border-bottom: #ccc 1px solid;
					padding: 20px 0;
					margin: 0 20px;
				}
				span{
					padding: 20px;
					display: block;
					color: #666;
				}
			}
		}
	}
}
</style>
