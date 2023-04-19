<template>
  <h1 class="text-white center" v-if="!tasks">Задач пока нет</h1>
  <div v-else>
    <h3 class="text-white">Всего активных задач: 0</h3>
    <div class="card" v-for="task in tasks">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="'done'"/>
      </h2>
      <p>
        <strong>
          <small>
            {{ task.data }}
          </small>
        </strong>
      </p>
      <router-link to="/task">
        <button class="btn primary">Посмотреть</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus.vue';
import {useStore} from "vuex";
import {ref} from "vue";

export default {
  setup() {
    const store = useStore();

    const tasks = store.state.tasks;

    console.log(tasks);
    console.log(tasks[0].title);
    return {
      tasks: tasks,
    }
  },
  components: {AppStatus}
}
</script>
