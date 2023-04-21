<template>
  <span :class="['badge ' + style]">{{ text }}</span>
</template>

<script>
import {ref, computed} from "vue";
export default {
  props: ['type'],
  setup(props) {
    const style = computed(() => {
      if (props.type === 'cancelled') {
        return 'danger';
      } else if (props.type === 'done' || props.type === 'active') {
        return 'primary';
      } else if (props.type === 'pending') {
        return 'warning';
      }
    });

    const text = computed(() => {
      if (style.value === 'danger') {
        return 'Отменен';
      } else if (style.value === 'primary' && props.type === 'done') {
        return 'Выполнено';
      }  else if (style.value === 'warning') {
        return 'Выполняется'
      } else if (style.value === 'primary' && props.type === 'active'){
        return 'Активен';
      }
    })

    return {
      style,
      text,
    }
  }
}
</script>