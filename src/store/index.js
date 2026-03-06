import { createStore } from "vuex";

const store = createStore({
  state: {
    products: [
      {
        id: 1,
        title: "Хлеб",
        price: 50,
      },
      {
        id: 2,
        title: "Молоко",
        price: 125,
      },
      {
        id: 3,
        title: "Сахар",
        price: 70,
      },
      {
        id: 4,
        title: "Картошка",
        price: 250,
      },
      {
        id: 5,
        title: "Лук",
        price: 10,
      },
      {
        id: 6,
        title: "Лапша",
        price: 100,
      },
      {
        id: 7,
        title: "Бананы",
        price: 350,
      },
      {
        id: 8,
        title: "Яблоки",
        price: 200,
      },
      {
        id: 9,
        title: "Груши",
        price: 150,
      },
      {
        id: 10,
        title: "Мандарины",
        price: 100,
      },
    ],
    basket: [],
  },
  getters: {
    filtedProducts(state) {
      return (searchQuery) => state.products.filter(product => product.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);
    },
    inBasketByProduct(state) {
      return (product) => state.basket.find(item => item.id === product.id)
    },
    isEmptyBasket(state) {
      return state.basket.length
    },
  },
  mutations: {
    addItemToBasket(state, product) {
      state.basket.push({ ...product, counter: 1 })
    },
    removeItemFromBasket(state, product) {
      state.basket = state.basket.filter(item => item.id !== product.id)
    },
    cleanBasket(state) {
      state.basket = [];
    },
    setCounterBasketItem(state, { product, counter }) {
      const findedItem = state.basket.find(item => item.id === product.id);
      findedItem.counter = counter;
    },
    toOrdered(state, totalPrice) {
      alert("Заказ оформлен! Сумма платежа: " + totalPrice + " рублей.");
      state.basket = [];
    }
  },
  actions: {},
  modules: {},
});

export default store;
