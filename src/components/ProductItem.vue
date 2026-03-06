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
      <div v-if="!inBasket" class="product-item__buttons">
        <my-button @click="onClickAddItem">Добавить в корзину</my-button>
      </div>
      <div v-else class="product-item__counter">
        <my-button class="btn-square" @click="counter > 1 && (counter-- && onClickButtonCounter())">-</my-button>
        <my-input type="number" :model-value="counter" @update:model-value="newValue => counter = newValue" />
        <my-button class="btn-square" @click="counter++ && onClickButtonCounter()">+</my-button>
      </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      counter: 1,
      // inBasket: false
    }
  },
  watch: {
    isEmptyBasket(value) {
      if (value === 0) {
        this.counter = 1;
      }
    },
    inBasket(value) {
      if (!value) {
        this.counter = 1;
      }
    }
  },
  computed: {
    ...mapGetters(['inBasketByProduct', 'isEmptyBasket']),
    inBasket() {
      return this.inBasketByProduct(this.product);
    }
  },
  methods: {
    ...mapMutations({
      addItem: 'addItemToBasket',
      setCounter: 'setCounterBasketItem',
    }),
    onClickButtonCounter() {
      this.setCounter({
        product: this.product,
        counter: this.counter
      })
    },
    onClickAddItem() {
      this.addItem(this.product);
    }
  }
}
</script>
<style lang="scss" scoped>
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

  &__buttons {
    .btn {
      width: 100%;
    }
  }

  &__counter {
    display: flex;

    .btn {
      flex-shrink: 0;
    }

    .input {
      text-align: center;
      border-right: none;
      border-left: none;
    }
  }
}
</style>