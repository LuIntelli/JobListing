<template>
  <h1>
    {{ name }}
  </h1>
  <p v-if="status === 'active'">
    User is active
  </p>
  <p v-else-if="status == 'inactive'">
    User is not active
  </p>
  <p v-else>
    User is pending
  </p>

  <button @click="changeState">
    change status
  </button>
<a :href="url">Google</a>
<!-- The column says, this is a variable -->
  <div>
    <ul>
      <li v-for="task in tasks" key="task">
        {{  task }}
      </li>
    </ul>
  </div>
</template>

<script>

// export default
export default {
  data() {
    return {
      name: "Vue Jobs",
      status: "active",
      tasks: [
        "Task One","Task Two", "Task Three"
      ],
      url:'http://google.com'
    }
  },
  methods: {
    changeState() {
      if(this.status === "active") {
        this.status = "inactive"
      } else if(this.status === "inactive") {
        this.status = "pending"
      } else {
        this.status = "active"
      }
    }
  }
}

const person = {
  namer: function() {
    console.log("My name is this")
  },
  caller() {
    console.log("Call my name");
  }
}

// person.caller();

// Directives make the template dynamic, that is active with changes

// v-bind: bind a piece of data to an attribute


</script>

<style scoped>

</style>