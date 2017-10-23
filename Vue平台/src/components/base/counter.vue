<template>
    <div class="counter-component">
      <div class="counter-btn" @click="minus"> - </div>
      <div class="counter-show">
        <input type="text" v-model="number" @keyup="check">
      </div>
      <div class="counter-btn" @click="add"> + </div>
    </div>
</template>

<script>
export default {
  props:{
    max:{
      type:Number,
    },
    min:{
      type:Number,
    }
  },
  data(){
    return {
      number:this.min,
    }
  },
  methods:{
    add(){
      if(this.number<this.max){
      this.number += 1;
      }
    },
    minus(){
      if(this.number>this.min){ 
        this.number -= 1;
      }
    },
    check(){ 
      let fix;
      if (typeof this.number ==='string'){
        fix=Number(this.number.replace(/[^0-9]/g,''));
      }else{
        fix = this.number;
      }
      if(fix<this.min){
        fix = this.min;
      }else if(fix>this.max){
        fix = this.max;
      }
      this.number = fix;
    },

  },
  watch:{
    number(){
      this.$emit('on-change',this.number);
    }
  }
}
</script>

<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-align: center;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}

</style>
