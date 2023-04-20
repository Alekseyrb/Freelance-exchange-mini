import {createRouter, createWebHistory} from "vue-router";
import Tasks from "@/views/Tasks.vue";
import Task from "@/views/Task.vue";
import New from "@/views/New.vue";
import notFound from "@/views/NotFound.vue";

export const router = createRouter({
        history: createWebHistory(),
        routes: [
            {path: '/tasks', component: Tasks, alias: '/'},
            {path: '/create', component: New},
            {path: '/task/:taskId?', component: Task},
            {path: '/:notFound(.*)', component: notFound},
        ],
        linkActiveClass: 'active',
        linkExactActiveClass: 'active',
    }
);