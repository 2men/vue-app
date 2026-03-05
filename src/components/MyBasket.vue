<template>
  <div class="basket">
    <div class="basket__title">
      <h2>Корзина</h2>
    </div>
    <div class="basket__content">
      <BasketList class="basket__list" :products="$store.state.basket"/>
      <div class="basket__total">
        <span>Итого:</span> <span>{{ totalPrice }} р.</span>
      </div>
    </div>
    <div class="basket__buttons">
      <my-button @click="$emit('order', totalPrice)">
        Оформить заказ
      </my-button>
    </div>
  </div>
</template>

<script>
import BasketList from './BasketList.vue';

export default {
  components: {
    BasketList
  },
  computed: {
    totalPrice() {
      return this.$store.state.basket.reduce((value, current) => value += current.price * current.counter, 0);
    }
  }
}
</script>

<style lang="scss" scoped>
.basket {
  &__title {
    margin-bottom: 30px;

    @media (max-width: 1024px) {
      display: none;
    }
  }

  &__content {
    margin-bottom: 50px;

    @media (max-width: 1024px) {
      margin-bottom: 20px;
    }
  }

  &__list {
    margin-bottom: 20px;

    @media (max-width: 1024px) {
      margin-bottom: 10px;
    }
  }

  &__total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;
  }
}
</style>