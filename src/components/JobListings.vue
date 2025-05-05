<script setup>
// import JobData from "@/Jobs.json";
import { ref, defineProps, onMounted, reactive } from "vue";
import JobListing from "@/components/JobListing.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { RouterLink } from "vue-router";
import axios from "axios";

// const jobs = ref([]);
// Ref is similar to reactive. While reactive accepts only object, ref accepts both objects and primitive data type. So you kind of look at reactive as a collection of refs, as reactive uses ref under the hood. It's like putting a “middleman” between you and the real object, who watches or changes how things work, not just for a single data, but as many data as you want, I think.

const state = reactive({
  jobs: [],
  isLoading: true,
});

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

// Make http request
onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/jobs");
    state.jobs = response.data;
  } catch (error) {
    console.log("Error fetching data", error);
  } finally {
    // Runs whatever is inside whether the try or catch block ran
    state.isLoading = false;
  }
});
// console.log(jobs.value);
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- Show Loading Spinner while loading is true -->
       <div v-if="state.isLoading" class=" text-center text-gray-500 py-6">
        <PulseLoader />
       </div>

       <!-- Show job listings when done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>
  <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
    <RouterLink
      :to="'/jobs'"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
