<script>

import {store} from '../data/store';

export default {
  name: 'ResultsCounter',
  data(){
    store
  },
  computed:{
    characterNumber(){
      return `Found ${store.charactersListData.length} characters`;
    }
  }
}
</script>


<template>
    <div class="col character-number">
      <span>{{characterNumber}}</span>
    </div>
</template>


<style lang="scss" scoped>
  @use '../styles/partials/variables' as *;
  .character-number{
    background-color: $counter-color;
    color: white;
    height: 55px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    font-weight: 800;
  }
</style>