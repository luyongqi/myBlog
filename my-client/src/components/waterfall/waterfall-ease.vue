<template>
    <div class="v-waterfall-content" id="v-waterfall">
        <div v-for="(img,i) in waterfallList"
            :key="i"
             class="v-waterfall-item"
            :style="{top:img.top+'px',left:img.left+'px',width:waterfallImgWidth+'px',height:img.height}">
            <el-image class="pimg" :src="img.src" fit="cover"></el-image>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Image } from 'element-ui';
    Vue.use( Image )
    export default {
        name: "v-waterfall",
        props:{
            imgList:{                         //列表
                type:Array,
                default(){
                    return []
                }
            },
            waterfallImgWidth:{             //每列的宽度
                type:[Number,String],
                default:300
            },
            waterfallImgCol:{             //总共几列
                type:[Number,String],
                default:4
            },
            waterfallImgRight:{             //右边距
                type:[Number,String],
                default:10
            },
            waterfallImgBottom:{             //下边距
                type:[Number,String],
                default:10
            },
        },
        data(){
            return {
                waterfallList:[],
                waterfallDeviationHeight:[], 
            }
        },
        created() {
         
        },
        mounted(){
            this.calculationWidth();
        },
        methods:{
            //计算每个图片的宽度或者是列数
            calculationWidth(){
                let domWidth = document.getElementById("v-waterfall").offsetWidth;
                if (!this.waterfallImgWidth && this.waterfallImgCol){
                    this.waterfallImgWidth = (domWidth-this.waterfallImgRight*this.waterfallImgCol)/this.waterfallImgCol;
                }else if(this.waterfallImgWidth && !this.waterfallImgCol){
                    this.waterfallImgCol = Math.floor(domWidth/(this.waterfallImgWidth+this.waterfallImgRight))
                }
                //初始化偏移高度数组
                this.waterfallDeviationHeight = new Array(this.waterfallImgCol);
                for (let i = 0;i < this.waterfallDeviationHeight.length;i++){
                    this.waterfallDeviationHeight[i] = 0;
                }
                this.imgPreloading()
            },
            //图片预加载
            imgPreloading(){
                for (let i = 0;i < this.imgList.length;i++){
                    let aImg = new Image();
                    aImg.src = this.imgList[i].src;
                    aImg.onload = aImg.onerror = (e)=>{
                        let imgData = {};
                        imgData.height = this.waterfallImgWidth/aImg.width*aImg.height;
                        imgData.src = this.imgList[i].src;
                        this.waterfallList.push(imgData);
                        this.rankImg(imgData);
                    }
                }
            },
            //瀑布流布局
            rankImg(imgData){
                let {waterfallImgWidth,waterfallImgRight,waterfallImgBottom,waterfallDeviationHeight,waterfallImgCol} = this;
                //for (let i = 0;i < this.waterfallList.length;i++){
                let minIndex = this.filterMin();
                imgData.top = waterfallDeviationHeight[minIndex];
                imgData.left = minIndex*(waterfallImgRight+waterfallImgWidth);
                waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom;
                //}
            },
            /**
             * 找到最短的列并返回下标
             * @returns {number} 下标
             */
            filterMin(){
                const min = Math.min.apply(null, this.waterfallDeviationHeight);
                return this.waterfallDeviationHeight.indexOf(min);
            }
        }
    }
</script>

<style scoped>
    .v-waterfall-content{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .v-waterfall-item{
        float: left;
        position: absolute;
    }
    .v-waterfall-item .pimg{
        width: auto;
        height: auto;
    }
</style>