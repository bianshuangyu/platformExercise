<template>
  <div class="footer">
    <img class="foot-img" src="../assets/bg2.jpg">
    <Row type="flex" justify="center"  class="row">
      <i-col span="18">
        <Row type="flex" justify="start" align="middle" class="inner-row" >
          <i-col span="20">
            <div>
              <p class="foot-p">全国客服热线：95347</p>
              <p class="foot-p">开发者协议 | 关于我们</p>
              <p class="foot-p">@1998 - 2009 personal exercise</p>
            </div>
          </i-col>
          <i-col span="4" >
            <div>
              <span>添加微信</span><br>
              <img src="../assets/wx.png">
            </div>
          </i-col>
        </Row>
      </i-col>
    </Row>
  </div>
</template>

<script>
    export default {
        name: "Foot"
    }
</script>

<style scoped>
  .footer{
    position: relative;
    margin-top:100px;
    width: 100%;
    height: 120px;
    overflow: hidden;
    font-size: 12px;
  }
  .foot-img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .row{
    position: absolute;
    top:10px;
    width: 100%;
  }
  .inner-row{
    color:#fff;
  }
  .foot-p{
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
</style>
