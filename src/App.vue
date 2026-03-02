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
            <ProductList :products="filtedProducts" @add-basket="addBasket" />
          </div>
          <div class="sidebar" v-show="basket.length">
            <BasketList class="sticky" :products="basket" @order="order" @remove="removeProduct" />
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
import ProductList from '@/components/ProductList.vue';
import BasketList from '@/components/BasketList.vue';

export default {
  components: {
    ProductList,
    BasketList,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Хлеб',
          price: 50
        },
        {
          id: 2,
          title: 'Молоко',
          price: 125
        },
        {
          id: 3,
          title: 'Сахар',
          price: 70
        },
        {
          id: 4,
          title: 'Картошка',
          price: 250
        },
        {
          id: 5,
          title: 'Лук',
          price: 10
        },
        {
          id: 6,
          title: 'Лапша',
          price: 100
        },
        {
          id: 7,
          title: 'Бананы',
          price: 350
        },
        {
          id: 8,
          title: 'Яблоки',
          price: 200
        },
        {
          id: 9,
          title: 'Груши',
          price: 150
        },
        {
          id: 10,
          title: 'Мандарины',
          price: 100
        },
      ],
      basket: [],
      searchQuery: ''
    }
  },
  computed: {
    filtedProducts() {
      return this.products.filter(product => product.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1);
    }
  },
  methods: {
    addBasket(product) {
      const has = this.basket.find(item => item.id === product.id);
      if (has) {
        has.counter += 1;
      } else {
        this.basket.push({ ...product, counter: 1 })
      }
    },
    order(totalPrice) {
      alert("Заказ оформлен! Сумма платежа: " + totalPrice + " рублей.");
      this.basket = [];
    },
    removeProduct(product) {
      const productIndex = this.basket.findIndex(item => item.id === product.id);
      this.basket.splice(productIndex, 1);
    }
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
</style>