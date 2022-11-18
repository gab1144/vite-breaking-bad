<script>
export default {
  name: 'CharacterCard',
  props:{
    character: Object
  }
}
</script>


<template>
  <div class="col">
    <div class="custom-card">
      <div class="img-area">
        <img :src="character.img" :alt="character.name">
      </div>
      <h5 class="name">{{character.name}}</h5>
      <h5 class="tv-serie">{{character.category}}</h5>
      <span class="status">{{character.status}}</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  @use '../styles/partials/variables' as *;
  .custom-card{
    padding: 15px;
    margin-bottom: 30px;
    height: 430px;
    background-color: $primary-color;
    img{
      width: 100%;
    }
    span {
      display: block;
    }
    .name{
      font-weight: 700;
      margin-top: 20px;
    }
    .tv-serie, .status{
      color: $text-card-color;
    }
    .tv-serie{
      border-top: 30px;
      border-bottom: 10px;
    }
  }
</style>