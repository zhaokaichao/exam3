<template>
  <div id="app">
    <header>
      <van-tabbar v-model="active" :fixed='false'>
        <van-tabbar-item to='/like'>关注</van-tabbar-item>
        <van-tabbar-item to='/'>发现</van-tabbar-item>
        <van-tabbar-item to='/city'>同城</van-tabbar-item>
      </van-tabbar>
    </header>
    <main><router-view/></main>
    <footer></footer>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style lang="scss">
#app{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  header{
    height: 50px;
  }
  main{
    flex: 1;
    overflow: auto;
    li{
      text-align: center;
      display: inline-block;
      margin: 20px 0;
      width:50%;
      position: relative;
      .small{
        border-radius: 50%;
        position: absolute;
        left: 30px;
        bottom: -10px;
      }
    }
  }
}
</style>
