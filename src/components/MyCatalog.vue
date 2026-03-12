<template>
  <ContentLayout heading="Каталог">
    <form class="form">
      <my-input :model-value="searchQuery" placeholder="Поиск..." @update:model-value="newValue => searchQuery = newValue" />
    </form>
    <div class="catalog-list">
      <ProductList v-if="!isEmptyProductList" :products="filtedProducts(searchQuery)" />
      <p v-else class="text-empty">Ничего не найдено</p>
    </div>
  </ContentLayout>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import ProductList from '@/components/ProductList.vue';
import ContentLayout from '@/layouts/ContentLayout.vue';

export default {
  components: {
    ProductList,
    ContentLayout,
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
.form {
  margin-bottom: var(--margin-lg);

  .input {
    padding: var(--padding);
  }
}

.text-empty {
  font-size: 1.5rem;
}
</style>