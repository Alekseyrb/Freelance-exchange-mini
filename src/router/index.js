import {createRouter, createWebHistory} from "vue-router";
import Tasks from "@/views/Tasks.vue";
import Task from "@/views/Task.vue";
import New from "@/views/New.vue";

export const router = createRouter({
        history: createWebHistory(),
        routes: [
            {path: '/', component: Tasks},
            {path: '/create', component: New},
            {path: '/task', component: Task},
        ],
        linkActiveClass: 'active',
        linkExactActiveClass: 'active',
    }
);