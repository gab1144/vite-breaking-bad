<script>

import {store} from '../data/store';
import CharacterCard from './CharacterCard.vue';
import AppLoading from './AppLoading.vue';

export default {
  name: 'CharacterList',
  components:{
    CharacterCard,
    AppLoading
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
      <div class="col character-number">
        <span>Found {{store.charactersListData.length}} characters </span>
      </div>
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

    .character-number{
      background-color: $counter-color;
      color: white;
      height: 55px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      font-weight: 800;
    }
  }

</style>