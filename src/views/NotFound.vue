<template>
  <div class="card">
    <h1>Страница не найдена</h1>
    <p>
      Такого пути не существует {{ $route.fullPath }}
    </p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
}
</script>
