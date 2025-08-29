import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from "@/components/HomePage.vue";
import MemberDetail from "@/components/MemberDetail.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/member/:username",
    name: "MemberDetail",
    component: MemberDetail,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
