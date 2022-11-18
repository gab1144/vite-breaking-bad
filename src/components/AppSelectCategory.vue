<script>

  import {store} from '../data/store';

export default {
  name: 'AppSelectCategory',
  data(){
    return{
      selection: "",
      store
    }
  },
  methods:{
    changeCategory(){
      store.categorySelected = this.selection;
    },
    changeSelection(){
      this.changeCategory();
      this.$emit("startSearch")
    }
  }
}
</script>


<template>
  <div class="col-2 select-area">
        <select class="form-select" @change="changeSelection()" v-model="selection">
          <option selected value="">Select category</option>
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