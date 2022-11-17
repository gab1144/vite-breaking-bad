<script>

import axios from 'axios';
import {store} from './data/store';
import CharacterList from './components/CharacterList.vue';
import AppHeader from './components/AppHeader.vue';


export default {
  name: 'App',
  components:{
    CharacterList,
    AppHeader
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getCharacters(){
      store.isLoaded = false;
      axios.get(store.apiUrl)
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

  <div class="container">
    <div class="row">
      <div class="col-2 select-area">
        <select class="form-select">
          <option selected>Select category</option>
          <option value="1">Breaking Bad</option>
          <option value="2">Better Call Saul</option>
        </select>
      </div>
    </div>
  </div>
  <div class="container">
    <CharacterList/>
    
  </div>
</template>


<style lang="scss">
  @use './styles/general' as *;
  .select-area {
    padding: 20px;
  }
</style>