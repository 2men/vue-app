<template>
  <div class="content">
    <div class="content__title">
      <h1>Каталог</h1>
    </div>
    <div class="content__form">
      <form class="form">
        <my-input :model-value="searchQuery" placeholder="Поиск..." @update:model-value="newValue => searchQuery = newValue" />
      </form>
    </div>
    <div>
      <ProductList v-if="!isEmptyProductList" :products="filtedProducts(searchQuery)" />
      <p v-else class="text-empty">Ничего не найдено</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductList,
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    ...mapState(['products', 'basket']),
    ...mapGetters(['filtedProducts']),
    isEmptyProductList() {
      return !this.filtedProducts(this.searchQuery).length
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: var(--padding-lg) var(--padding);

  @media (max-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }

  &__title {
    margin-bottom: var(--margin-lg);
  }

  &__form {
    margin-bottom: var(--margin-lg);

    .form {
      .input {
        padding: var(--padding);
      }
    }
  }
}

.text-empty {
  font-size: 1.5rem;
}
</style>