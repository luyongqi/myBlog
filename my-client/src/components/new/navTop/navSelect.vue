<template>
    <div class="position-list-new">
        <el-cascader
        :options="options"
        :props="{checkStrictly: true}"
        filterable
        clearable
        @change="changeFn"
        class="cascadernew"
        ></el-cascader>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    import {setDataToRoute} from '@/utils/common'
    import lodash from 'lodash'

    export default {
        data(){
            return {

            }
        },
        props:{
            navId:{
                type:String,
                default:'',
            }
        },
        computed:{
            ...mapState([
                'navTop'//navTopList navTopListAll
            ]),
            options(){
                if(this.navTop.navTopListAll.length>0){
                    //任何用到此数据的地方都需要判断 因为此数据是异步获取的
                    let list=this.$api.cloneDeep(this.navTop.navTopListAll)

                    list.forEach(item => {
                        item.value=item.menuId; //适配value值;
                        item.label=item.menuName; //适配label值;
                    });
                    // console.log(list,'适配前的list')
                    list = setDataToRoute(list)
                    // console.log(list,'适配后的list')

                    this.setNavTopListSelect({list})

                    return list
                }
            }
        },
        methods:{
            ...mapMutations([
                'setNavTopListSelect'
            ]),
            changeFn(data){
                let navId = data[data.length-1]
                console.log(navId,'获取到的id')
                this.$emit('update:navId',navId)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .position-list-new{
        width: 100%;
        .cascadernew{
            width: 500px;
        }
    }
</style>