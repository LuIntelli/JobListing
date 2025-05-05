<script setup>
    import Card from './Card.vue';
    import { RouterLink } from 'vue-router';
</script>
<!-- 
    Container Component : A container component is a concept from component-based architecture (like in React or Vue) where components are separated into two types:

    1. Container Component (Smart Component)
Focuses on logic, data, and state management

Handles API calls, state updates, event handling

Does not care how things look

Often passes data as props to child components

✅ Example Tasks:

Fetch data from Firebase

Handle user input

Pass props to children


2. Presentational Component (Dumb Component)
Focuses only on UI and styling

Receives props from the container component

Has little to no logic

✅ Example Tasks:

Display a list of phones

Render buttons or headings
-->
<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-2xl font-bold">For Developers</h2>
          <p class="mt-2 mb-4">
            Browse our Vue jobs and start your career today
          </p>
          <RouterLink
            to="/jobs"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Jobs
          </RouterLink>
        </Card>
        <Card bg="bg-green-100">
          <h2 class="text-2xl font-bold">For Employers</h2>
          <p class="mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>
          <RouterLink
            to="/add"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Add Job
          </RouterLink>
        </Card>
      </div>
    </div> 
  </section>
</template>
