<template>
  <div class="head-box">
    <slot name="headBgImage">
      <img src="../assets/bg2.jpg">
    </slot>
    <Row type="flex" justify="center" class="row">
      <i-col span="18">
        <Row type="flex" justify="start" >
          <i-col span="4">
<!--            <div>-->
<!--              <img src="../assets/logo.png">-->
<!--            </div>-->
          </i-col>
          <i-col span="14">
            <ul class="head-item">
              <li>
                <router-link :to="{name:'StartIndex'}">首页</router-link>
              </li>
              <li>文档中心</li>
              <li>个人中心</li>
              <li>应用管理</li>
              <li>帮助与支持</li>
            </ul>
          </i-col>
          <i-col span="6">
            <ul class="head-item head-right">
              <li>登录</li>
              <li>注册</li>
            </ul>
          </i-col>
        </Row>
      </i-col>
    </Row>
    <slot name="titleDesc">
      <div class="title-desc-box">
        文档中心
      </div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'Head',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head-box{
    position: relative;
    width:100%;
    /*height: 200px;*/
  }
  .head-box img{
    display: block;
    width: 100%;
    opacity: 0.7;
  }
  .row{
    position: absolute;
    top:0;
    width: 100%;
    height:60px;
    line-height: 60px;
    border-bottom:1px solid rgba(255,255,255,0.4) ;
  }
  .head-item{
    display: flex;
    color: #fff;
  }
  .head-item li{
    padding:0 10px;
    font-size: 16px;
  }
  .head-right li:first-child{
    position: relative;
  }
  .head-right li:first-child:after{
    content: "|";
    position: absolute;
    right: -1px;
  }
  .title-desc-box{
    position: absolute;
    top:60px;
    height: calc(100% - 60px);
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 42px;
  }
</style>
