<template>
  <div>
    <app-header v-on:renew="renewStr" :propsdata="str"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data : function() {
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = 'renew!'
    }
  },
}
</script>

<style>

</style>