<template>
    <div>
      <head-component>
        <img v-if="$router.name==='StartIndex'" slot="headBgImage" alt="首页背景" src="../assets/bg1.jpg">
      </head-component>
      <router-view>
      </router-view>
      <foot-component></foot-component>
    </div>
</template>

<script>
   import HeadComponent from "../components/Head"
   import FootComponent from "../components/Foot"
    export default {
      name: "StartIndex",
      components:{
        HeadComponent,
        FootComponent
      }
    }
</script>

<style scoped>

</style>
