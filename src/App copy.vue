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
    <form action="#" @submit.prevent="submitForm">
      <label for="newTask"> New Task </label>
      <input type="text" id="newTask" name="newTask" v-model="newTask" />
      <br />
      <button type="submit">Add Task</button>
    </form>
    <ul>
      <li v-for="task in tasks" key="task" @click="deleteTask(task)">
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<script setup>
// using composition Api Using the setup inside the script tag

import { ref, onMounted } from "vue";

const tasks = ref(["Task One", "Task Two", "Task Three"]);
const name = ref("Vue Jobs");
const status = ref("active");
const newTask = ref("");

const deleteTask = (tag) => {
  tasks.value = tasks.value.filter((task) => task !== tag);
};

// tasks.value.splice(1, )

const submitForm = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  } else {
  }
};

// Reactive data refers to data that is automatically tracked by a system so that any changes to it automatically update the user interface (UI) or trigger certain behaviors in your code

const changeState = () => {
  if (status.value === "active") {
    status.value = "inactive";
  } else if (status.value === "inactive") {
    status.value = "pending";
  } else {
    status.value = "active";
  }
};

const person = {
  namer: function () {
    console.log("My name is this");
  },
  caller() {
    console.log("Call my name");
  },
};

onMounted(async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    const newData = data.map((val) => val.title);
    tasks.value = [...tasks.value, ...newData];
    // console.log(tasks.value);
  } catch (error) {
    console.log(error);
  }
});

// person.caller();

// Directives make the template dynamic, that is active with changes

// v-bind: bind a piece of data to an attribute
</script>

<style scoped></style>
