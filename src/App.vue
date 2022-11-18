<script>

import axios from 'axios';
import {store} from './data/store';
import CharacterList from './components/CharacterList.vue';
import AppHeader from './components/AppHeader.vue';
import AppSelectCategory from './components/AppSelectCategory.vue';
import AppLoading from './components/AppLoading.vue';


export default {
  name: 'App',
  components:{
    CharacterList,
    AppHeader,
    AppSelectCategory,
    AppLoading
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getCharacters(){
      store.isLoaded = false;
      axios.get(store.apiUrl, {
        params: {
          category: store.categorySelected
        }
      })
        .then(result=> {
          store.charactersListData=result.data;
          store.isLoaded = true;
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  mounted(){
    this.getCharacters();
  }
}
</script>

<template>

  <AppHeader/>

  <div class="container" v-if="store.isLoaded">
    <div class="row">
      <AppSelectCategory @startSearch="getCharacters()"/>
    </div>
  </div>

  <div class="container">
    <CharacterList v-if="store.isLoaded"/>
    
    <div class="row"  v-if="!store.isLoaded">
      <div class="col">
        <AppLoading/>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
  @use './styles/general' as *;
  
</style>