<template>
    <div class="ranklist">
        <ul>
            <li v-for="(k,i) in 6" :key="i">
                <i>{{i+1}}</i>
                <router-link to="">十条设计原则教你学会如何设计网页布局!</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
import { Card } from 'element-ui';
Vue.use(Card)

export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.ranklist {
    ul{
        padding: 0;
    }
    ul>li {
        height: 30px;
        line-height: 30px;
        margin-bottom: 10px;
        padding-left: 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #555;
        &:hover {
            color: #000;
        }
        &:nth-child(2n) {
            background: #f6f6f6;
        }
        &:first-child i,
        &:nth-child(2) i,
        &:nth-child(3) i {
            background: #FF6600;
        }
        i {
            display: block;
            width: 16px;
            height: 16px;
            background: #B1B1B1;
            float: left;
            margin-top: 7px;
            margin-right: 10px;
            position: relative;
            font-style: normal;
            font-size: 9px;
            color: #fff;
            line-height: 16px;
            text-align: center;
        }
    }
}
</style>


