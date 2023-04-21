<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="statusTask"/>
    </p>
    <!--    <p><strong>Дэдлайн</strong>: {{ new Date().toLocaleDateString() }}</p>-->
    <p><strong>Дэдлайн</strong>: {{ task.data }}</p>
    <p><strong>Описание</strong>: {{ task.text }}</p>
    <div>
      <button class="btn" @click="changeStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="changeStatus('done')">Завершить</button>
      <button class="btn danger" @click="changeStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ $route.params.taskId }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus.vue'
import {ref, computed} from "vue";
import {useStore} from "vuex";
import {useRouter, useRoute} from "vue-router";


export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const tasks = store.getters.allTask;

    const task = computed(() => tasks.find(e => e.id === parseInt(route.params.taskId)));
    const statusTask = ref(task.value.status);

    function changeStatus(status) {
      statusTask.value = status;
      store.commit('changeStatus', {
        id: task.value.id,
        status,
      });
      router.push('/tasks');
    }


    return {
      task,
      changeStatus,
      statusTask,
    }
  },
  components: {AppStatus}
}
</script>

<style scoped>

</style>