<template>
  <div class="sidebar">
    <MyBasket class="sticky" @order="order" />
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import MyBasket from '@/components/MyBasket.vue';

export default {
  components: {
    MyBasket,
  },
  methods: {
    ...mapMutations(['toOrdered']),
    order(totalPrice) {
      this.toOrdered(totalPrice);
    },
  }
}
</script>
<style lang="scss" scoped>
.sidebar {
  width: 320px;
  padding: var(--padding-lg) var(--padding);

  @media (max-width: 1024px) {
    position: sticky;
    bottom: 0;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    background-color: white;
  }
}

.sticky {
  position: sticky;
  top: 30px;
}
</style>