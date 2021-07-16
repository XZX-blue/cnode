<template>
  <div class="PostList">
    <!--在数据未返回时，显示正在加载的图片 -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" >
    </div>
    <!--代表帖子列表-->
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  data(){
    return {
      isLoading:false
    }
  }
}
</script>

<style scoped>

</style>