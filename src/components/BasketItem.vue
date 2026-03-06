<template>
  <div class="basket-item">
    <p class="basket-item__title">{{ product.title }}</p>
    <p class="basket-item__price">
      <span class="count">({{ product.counter }} x {{ product.price }} р.)</span>
      <span class="price">{{ product.counter * product.price }} р.</span>
    </p>
    <my-button class="btn-remove" @click="remove(product)">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </div>
    </my-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapMutations({
      remove: 'removeItemFromBasket'
    })
  }
}
</script>

<style lang="scss" scoped>
.basket-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  .icon {
    width: 16px;
    height: 16px;
    color: red;

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .btn-remove {
    height: auto;
    padding: 0;
    border: none;
  }

  &__price {
    display: flex;
    gap: 4px;
    margin-left: auto;

    .count {
      font-size: 0.8rem;
      color: gray;
    }
  }
}
</style>