<template>
  <div class="content">
    <div class="content__title">
      <h1>{{ heading }}</h1>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.content {
  padding: 0 var(--padding);

  @media (max-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }

  &__title {
    margin-bottom: var(--margin-lg);
  }
}
</style>