<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Meta from 'mixins/meta'

  export default {
    mixins: [Meta],

    data () {
      return {
        
      }
    }
  }
</script>

<style lang="stylus">
  @import '~normalize.css'
</style>
