<script>

import axios from 'axios';
import {store} from './data/store';
import CharacterList from './components/CharacterList.vue';


export default {
  name: 'App',
  components:{
    CharacterList
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getCharacters(){
      axios.get(store.apiUrl)
        .then(result=> {
          store.charactersListData=result.data;
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
  <div class="container">
    <CharacterList/>
  </div>
</template>


<style lang="scss">
  @use './styles/general' as *;
</style>