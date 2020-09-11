<template>
  <div class="like">
      <ul>
          <li v-for="item in list" :key='item.id'>
              <img :src='item.bigImg' alt="">
              <img :src='item.img' alt="" class="small">
          </li>
      </ul>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
 name:'Like',
 data(){
     return {
         list:[]
     }
 },
 created() {
     Axios.get('/api/list').then(result=>{
         console.log(result.data.data)
         this.list=result.data.data
     })
 },
}
</script>

<style>

</style>