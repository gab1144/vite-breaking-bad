<script>

  import {store} from '../data/store';

export default {
  name: 'AppSelectCategory',
  data(){
    return{
      selection: "Select Category",
      store
    }
  },
  methods:{
    changeCategory(){
      store.categorySelected = store.categories[this.selection];
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
          <option selected>Select category</option>
          <option value="0">Breaking Bad</option>
          <option value="1">Better Call Saul</option>
        </select>
      </div>
</template>


<style lang="scss" scoped>
  @use '../styles/partials/variables' as *;
  .select-area {
    padding: 20px;
  }
</style>