<script>
  export default {
    name: 'AppHeader',
    
  }
</script>

<template>
  <header>
    <img src="/Breaking_Bad_logo.svg" alt="Breaking Bad logo">
    <h1>Breaking Bad Api</h1>
  </header>
</template>

<style lang="scss" scoped>
  header{
    display: flex;
    align-items: center;
    height: 50px;
    img{
      height: 30px;
    }
  }
</style>