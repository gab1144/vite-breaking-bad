<script>
export default {
  name: 'CharacterCard',
  props:{
    character: Object
  }
}
</script>


<template>
  <div class="col-3">
    <div class="custom-card">
      <div class="img-area">
        <img :src="character.img" :alt="character.name">
      </div>
      <span>{{character.name}}</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  @use '../styles/partials/variables' as *;
  .custom-card{
    padding: 20px;
    margin-bottom: 30px;
    height: 430px;
    background-color: $primary-color;
    img{
      width: 100%;
    }
  }
</style>