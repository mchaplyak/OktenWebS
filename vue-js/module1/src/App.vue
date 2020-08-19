<template>
 <div>
   <input
       type="text"
       v-model="listName"
   >
   <button @click="addToDo(listName)">Add</button>

   <ul>
     <li v-for="(item, index) in list" :key="index">
       {{item}}
       <button @click="">Delete</button>
     </li>
   </ul>
 </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      list: [],
    }
  },

  methods: {
    addToDo(listName) {
      this.list.push(listName);
      console.log(this.list);
    },

  }

}
</script>

<style>

</style>
