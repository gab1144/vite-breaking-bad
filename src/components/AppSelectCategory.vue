<script>

  import {store} from '../data/store';

export default {
  name: 'AppSelectCategory',
  data(){
    return{
      store
    }
  },
  methods:{
    changeSelection(){
      this.$emit("startSearch")
    }
  },
  computed:{
    firstOption(){
      if(store.categorySelected !== ""){
        return "All categories";
      } else {
        return "Select category";
      }
    }
  }
}
</script>


<template>
  <div class="col-2 select-area">
        <select class="form-select" @change="changeSelection()" v-model="store.categorySelected">
          <option selected value="">{{firstOption}}</option>
          <option v-for="(category, index) of store.categories" :key="index" :value="category">{{category}}</option>
        </select>
      </div>
</template>


<style lang="scss" scoped>
  @use '../styles/partials/variables' as *;
  .select-area {
    padding: 20px;
  }
</style>