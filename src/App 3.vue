<template>
    <h1>
      {{ name }}
    </h1>
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status == 'inactive'">User is not active</p>
    <p v-else>User is pending</p>
  
    <button @click="changeState">change status</button>
    <a :href="url">Google</a>
    <!-- The column says, this is a variable -->
    <div>
      <ul>
        <li v-for="task in tasks" key="task">
          {{ task }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  // using composition Api> Using the setup function together with the step up function
  
  import { ref } from 'vue';
  
  
  
  // export default
  export default {
    setup() {
      const tasks = ref(["Task One", "Task Two", "Task Three"]);
      const name = ref("Vue Jobs");
      const status = ref("active");
  
      // Reactive data refers to data that is automatically tracked by a system so that any changes to it automatically update the user interface (UI) or trigger certain behaviors in your code
  
      const changeState = () => {
        if(status.value === "active") {
          status.value = "inactive"
        } else if(status.value === "inactive") {
          status.value = "pending"
        } else {
          status.value = "active"
        }
      }
  
      return {
        status, tasks,
        name,
        changeState
      }
    },
  };
  
  const person = {
    namer: function () {
      console.log("My name is this");
    },
    caller() {
      console.log("Call my name");
    },
  };
  
  // person.caller();
  
  // Directives make the template dynamic, that is active with changes
  
  // v-bind: bind a piece of data to an attribute
  </script>
  
  <style scoped></style>
  