<script>

import {store} from '../data/store';
import CharacterCard from './CharacterCard.vue';
import AppLoading from './AppLoading.vue';
import ResultsCounter from './ResultsCounter.vue';

export default {
  name: 'CharacterList',
  components:{
    CharacterCard,
    AppLoading,
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

    <div class="row"  v-if="!store.isLoaded">
      <div class="col">
        <AppLoading/>
      </div>
    </div>


    <div class="row" v-if="store.isLoaded">
      <ResultsCounter/>
    </div>

    <div class="row row-cols-5 character-list" v-if="store.isLoaded">
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