<script>

import {store} from '../data/store';
import CharacterCard from './CharacterCard.vue';
import ResultsCounter from './ResultsCounter.vue';

export default {
  name: 'CharacterList',
  components:{
    CharacterCard,
    ResultsCounter
  },
  data(){
    return{
      store
    }
  }
}
</script>


<template>

  <div class="container character-area">

    <div class="row">
      <ResultsCounter/>
    </div>

    <div class="row row-cols-5 character-list">
      <CharacterCard
        v-for="character of store.charactersListData"
        :key="character.id"
        :character="character"/>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  @use '../styles/partials/variables' as *;
  .character-area{
    background-color: white;
    padding: 50px;
  }

</style>