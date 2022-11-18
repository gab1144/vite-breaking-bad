<script>

import {store} from '../data/store';

export default {
  name: 'ResultsCounter',
  data(){
    store
  },
  computed:{
    characterNumber(){
      return store.charactersListData.length;
    }
  }
}
</script>


<template>
    <div class="col character-number">
      <span>Found {{characterNumber}} characters </span>
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