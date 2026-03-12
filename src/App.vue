<template>
  <div class="wrapper">
    <MyHeader />

    <main class="main">
      <div class="container">
        <div class="main__inner">
          <MyContent />
          <MySidebar v-show="isEmptyBasket" />
        </div>
      </div>
    </main>

    <MyFooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';
import MyContent from '@/components/MyContent.vue';
import MySidebar from '@/components/MySidebar.vue';

export default {
  components: {
    MyHeader,
    MyFooter,
    MyContent,
    MySidebar,
  },
  computed: {
    ...mapGetters(['isEmptyBasket'])
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
</style>