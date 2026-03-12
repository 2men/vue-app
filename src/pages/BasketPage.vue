<template>
  <PageLayout>
    <ContentLayout heading="Корзина">
      <ProductList v-if="basket.length" :products="basket" />
      <p v-else class="text">Корзина пуста</p>
    </ContentLayout>
  </PageLayout>
</template>

<script>
import { mapState } from 'vuex';
import ProductList from '@/components/ProductList.vue';
import PageLayout from '@/layouts/PageLayout.vue';
import ContentLayout from '@/layouts/ContentLayout.vue';

export default {
  components: {
    ProductList,
    PageLayout,
    ContentLayout,
  },
  computed: {
    ...mapState(['basket'])
  }
}
</script>

<style lang="scss" scoped>
.text {
  text-align: center;
  font-size: 1.2rem;
}
</style>