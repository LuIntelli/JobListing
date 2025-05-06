import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Jobs from "@/views/Jobs.vue";
import Add from "@/views/Add.vue";
import NotFound from "@/views/NotFound.vue";
import Job from "@/views/Job.vue";
import Edit from "@/views/Edit.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: Jobs,
    },

    {
      path: "/add",
      name: "add-jobs",
      component: Add,
    },
    {
      path: "/:catchAll(.*)",
      name: "Not-found",
      component: NotFound,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: Job,
    },
    {
      path: "/jobs/edit/:id",
      name: "edit-job",
      component: Edit,
    },
  ],
});

export default router;
