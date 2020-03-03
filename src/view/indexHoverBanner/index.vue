<template>
  <Row type="flex" justify="center">
    <i-col span="13">
      <div class="banner-title">商业合作</div>
      <div class="banner-list-title">
      </div>
    </i-col>
  </Row>
</template>

<script>
    export default {
        name: "index",
        data(){
          return {
            currentSelect:0,
            eachitem:[
              {
                title:'小学',
                info:'',
                icon:'',
                iconActive:'',
                img:''
              }
            ],
            currentItem:[{
              title:'小学',
              info:'',
              img:''
            }]
          }
        }
    }
</script>

<style scoped>
  .banner-title{
    text-align: center;
    background: salmon;
    padding: 40px 0;
  }
</style>
