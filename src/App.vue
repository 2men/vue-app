<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        Header
      </div>
    </header>
    <main class="main">
      <div class="container">
        <div class="main__inner">
          <div class="content">
            <div class="content__title">
              <h1>Каталог</h1>
            </div>
            <div class="content__form">
              <form class="form">
                <input v-model="searchQuery" class="input" type="text" placeholder="Поиск...">
              </form>
            </div>
            <ProductList v-if="!isEmpty" :products="filtedProducts(searchQuery)" />
            <p v-else class="text-empty">Ничего не найдено</p>
          </div>
          <div class="sidebar" v-show="basket.length">
            <MyBasket class="sticky" @order="order" />
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        &#169; Улан-Удэ, {{ new Date().getFullYear() }}
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
import ProductList from '@/components/ProductList.vue';
import MyBasket from '@/components/MyBasket.vue';

export default {
  components: {
    ProductList,
    MyBasket,
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    ...mapState(['products', 'basket']),
    ...mapGetters(['filtedProducts']),
    isEmpty() {
      return !this.filtedProducts(this.searchQuery).length
    }
  },
  methods: {
    ...mapMutations(['cleanBasket']),
    order(totalPrice) {
      alert("Заказ оформлен! Сумма платежа: " + totalPrice + " рублей.");
      this.cleanBasket();
    },
  }
}
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
}

.container {
  max-width: 1440px;
  padding: 0 30px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 0 15px;
  }
}

.header,
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: teal;
  color: white;
}

.header {}

.main {
  flex-grow: 1;

  &__inner {
    display: grid;
    grid-template-columns: 1fr auto;

    @media (max-width: 1024px) {
      display: block;
    }
  }
}

.content,
.sidebar {
  padding: 30px 15px;

  @media (max-width: 1024px) {
    padding: 30px 0;
  }
}

.content {
  &__title {
    margin-bottom: 30px;
  }

  &__form {
    margin-bottom: 30px;

    .form {
      .input {
        width: 100%;
        padding: 10px 20px;
        border: 1px solid teal;
      }
    }
  }
}

.sidebar {
  width: 320px;

  @media (max-width: 1024px) {
    position: sticky;
    bottom: 0;
    width: 100%;
    background-color: white;
  }
}

.sticky {
  position: sticky;
  top: 30px;
}

.text-empty {
  font-size: 1.5rem;
}
</style>