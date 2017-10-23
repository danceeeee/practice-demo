<!-- 弹窗组件   用slot来实现具体的弹窗内容-->  
<template>   
  <div>
    <div class="dialog-wrap" >
      <div class="dialog-cover" @click="closeMyself" v-if="isShow"></div>
      <!-- 点击黑色背景和x的 时候 都会关闭弹窗 -->
       <transition name="drop">
        <div class="dialog-content" v-if="isShow">
          <div class="dialog-close" @click="closeMyself">x</div>
          <slot>empty</slot> 
        </div>
       </transition> 
      
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      isShow:{
        type:Boolean,
        default:false,
      }
    },
    methods:{
      closeMyself(){
        this.$emit('on-close');
      }
    }
  }
</script>

<style>
.drop-enter{
  transform: translateY(-500px);
}
.drop-enter-active {
  transition: all 0.2s ease;
}
.drop-leave-to{
  transform: translateY(-500px)
}
.drop-leave-active{
  transition: all 0.4s ease;
}
.dialog-wrap{
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
background: #000;
opacity: .3;
position: fixed;
z-index: 5;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}
.dialog-close{
  position: absolute;
  top: 0px;
  right: 7px;
  width: 10px;
  height: 10px;
  text-align: center;
  cursor: pointer;
}
</style>