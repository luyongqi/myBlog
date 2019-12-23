<template>
  <div>
    <h1>留言</h1>
    <tinymce :width="595" :height="300" ></tinymce>
    <!--<tinymce :width="595" :height="300" v-model="value.detailHtml"></tinymce>-->
  </div>
</template>

<script>
 import Tinymce from '@/components/Tinymce'
export default {
  name:'about',
  components: {Tinymce},
   props: {
      value: Object,
    },
}
</script>

<style lang="scss" scoped>

</style>
