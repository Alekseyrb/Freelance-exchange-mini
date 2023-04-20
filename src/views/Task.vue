<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="'done'"/>
    </p>
<!--    <p><strong>Дэдлайн</strong>: {{ new Date().toLocaleDateString() }}</p>-->
    <p><strong>Дэдлайн</strong>: {{ task.data }}</p>
    <p><strong>Описание</strong>: {{ task.text }}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ $route.params.taskId }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus.vue'
import {computed} from "vue";
import {useStore} from "vuex";
import {useRouter, useRoute} from "vue-router";


export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const tasks = store.getters.allTask;

    const task = computed(() => tasks.find(e => e.id === parseInt(route.params.taskId)));
    console.log(task);
    return {
      task,
    }
  },
  components: {AppStatus}
}
</script>

<style scoped>

</style>