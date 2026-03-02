<template>
  <div class="product-item">
      <div class="product-item__image">
        <img src="/images/default.png" alt="">
      </div>
      <div class="product-item__content">
        <div class="product-item__title">{{ product.title }}</div>
        <div class="product-item__price">
          <p>Цена: {{ product.price }} р.</p>
        </div>
      </div>
      <div class="product-item__buttons">
        <my-button @click="$emit('addBasket', product)">Добавить в корзину</my-button>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.product-item {
  padding: 15px; 
  border: 1px solid teal;

  &__title {
    margin-bottom: 10px;
    font-weight: bold;
  }

  &__content {
    margin-bottom: 15px;
  }
}
</style>