<template>
  <div class="sidebar">
    <MyBasket class="sticky sidebar__basket" />
  </div>
</template>
<script>
import MyBasket from '@/components/MyBasket.vue';

export default {
  components: {
    MyBasket,
  },
}
</script>
<style lang="scss" scoped>
.sidebar {
  padding: 0 var(--padding);

  @media (max-width: 1024px) {
    position: sticky;
    bottom: 0;
    padding-left: 0;
    padding-right: 0;
    background-color: white;
  }

  &__basket {
    width: 320px;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }
}

.sticky {
  position: sticky;
  top: 30px;
}
</style>