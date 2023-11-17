<template>
  <div>
    <p>{{ count }}</p>
    <button @click="AddOne"></button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      count: 0
    }
  },
  methods: {
    AddOne(){
      this.count++;
    }
  }
}
</script>

<style scoped>

</style>
