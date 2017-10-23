<template>
    <div class="chooser-component">
        <ul class="chooser-list">
          <li v-for="(item,index) in selections" :class="{'active':isActive(index)}" @click="toggle(index)">{{item.label}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    selections:{
      default:Array,
    }
  },
  data(){
    return {
      choose:[0],
    }
  },
  methods:{
    isActive(index){
      for(let i of this.choose){
        if(i === index){
          return true
        }
      };
      return false
    },
    toggle(index){
      let ind = this.choose.indexOf(index);
      if(ind === -1){
        this.choose.push(index);
      }else{
        this.choose.splice(ind,1);
      }

      this.$emit('on-change',this.choose.map((item)=>this.selections[item]))
       // console.log(this.choose.map((item)=>this.selections[item]))
    }
  },
  
  
}

</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
