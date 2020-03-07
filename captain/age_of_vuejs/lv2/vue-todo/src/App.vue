<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

/* 테두리가 창(canvas)에서 조각(파진)된 것처럼 보임 */
input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>