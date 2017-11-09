<template>
  <div class="facts-page">
    <h1 class="brand"><img src="/images/square.png" alt="">Goofies</h1>
    <h4 class="description">Goofies Firebase Vue SSR Template</h4>
    <ul class="true-facts">
      <li class="fact" v-for="fact in trueFacts" :key="fact">
        {{fact}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData ({ store }) {
    return store.dispatch('getTrueFacts')
  },
  computed: {
    trueFacts () {
      return this.$store.state.trueFacts
    }
  }
}
</script>

<style lang="stylus">
  body
    background radial-gradient(ellipse at center, rgba(17,17,17,1) 0%, rgba(33,33,33,1) 100%)
    color #757575
  .brand
    display flex
    align-items center
    justify-content center
    color #111111
    font-size 48px
    img
      margin-right 10px
      height 50px
      width 50px
  .description
    text-align center
    font-style italic
    font-weight 100
    color #616161
  .true-facts
    list-style none
    padding 0 30px
    .fact
      padding 10px 20px
      border-bottom 2px dashed
</style>
