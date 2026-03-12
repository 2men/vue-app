<template>
  <PageLayout class="catalog-page">
    <MyCatalog />
    <Transition name="sidebar">
      <MySidebar v-show="isEmptyBasket" />
    </Transition>
  </PageLayout>
</template>

<script>
import { mapGetters } from 'vuex';
import MyCatalog from '@/components/MyCatalog.vue';
import MySidebar from '@/components/MySidebar.vue';
import PageLayout from '@/layouts/PageLayout.vue';

export default {
  components: {
    MyCatalog,
    MySidebar,
    PageLayout
  },
  computed: {
    ...mapGetters(['isEmptyBasket'])
  }
}
</script>

<style lang="scss" scoped>
.catalog-page {
  display: grid;
  grid-template-columns: 1fr auto;

  @media (max-width: 1024px) {
    display: block;
  }
}
</style>