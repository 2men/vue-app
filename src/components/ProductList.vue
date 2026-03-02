<template>
  <div class="product-list">
    <ProductItem  v-for="product in products" :key="product.id" :product="product" @add-basket="$emit('addBasket', product)" />
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: {
    ProductItem
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

</style>