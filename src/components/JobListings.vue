<script setup>
import JobData from "@/Jobs.json";
import { ref } from "vue";
import JobListing from "@/components/JobListing.vue"

const jobs = ref(JobData);

console.log(jobs.value);
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-col-3 gap-6">
        <JobListing v-for="job in jobs" key="job.id" :job="job" />
      </div>
    </div>
  </section>
</template>
