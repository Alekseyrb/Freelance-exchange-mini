<template>
  <form class="card" @submit.prevent="addNewTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дедлайна</label>
      <input type="date" id="date" v-model="data">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="text"></textarea>
    </div>

    <button class="btn primary" :disabled="dis">Создать</button>
  </form>
</template>


<script>
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {ref, computed} from "vue";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const title = ref('');
    const data = ref('');
    const text = ref('');

    function addNewTask() {
      store.commit('addNewTask', {
        title: title.value,
        data: data.value,
        text: text.value,
        status: 'active',
      });
      console.log(store.state.tasks);
      title.value = '';
      data.value = '';
      text.value = '';
      router.push('/tasks');
    }

    const dis = computed(() => {
      return title.value === '' || data.value === '' || text.value === '';
    });

    return {
      title,
      data,
      text,
      addNewTask,
      dis,
    }
  }
}
</script>