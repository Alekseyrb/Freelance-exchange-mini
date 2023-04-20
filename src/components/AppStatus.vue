<template>
  <span :class="['badge ' + style]">Название статуса {{ props }}</span>
</template>

<script>
import {ref, computed} from "vue";
export default {
  props: ['type'],
  setup(props) {
    console.log(props.type);

    const style = computed(() => {
      if (props.type === 'cancelled') {
        return 'danger';
      } else if (props.type === 'done') {
        return 'primary';
      } else if (props.type === 'pending') {
        return 'warning';
      }
    })

    return {
      props: props.type,
      style,
    }
  }
}
</script>