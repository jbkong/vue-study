<template>
  <div>
    <p v-for="item in fetchedAsk" v-bind:key="item.title">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by 
        <router-link v-bind:to="`/item/${item.id}`">{{ item.id }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ]),
    // ...mapState({
    //   ask: state => state.ask
    // })
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  },
}
</script>

<style>

</style>