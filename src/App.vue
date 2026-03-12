<template>
  <div class="wrapper">
    <MyHeader />

    <main class="main">
      <div class="container">
        <RouterView />
      </div>
    </main>

    <MyFooter />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';

export default {
  components: {
    MyHeader,
    MyFooter,
  }
}
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
  overflow: clip;
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
  padding-top: var(--padding-lg);
  padding-bottom: var(--padding-lg);
}

@media (min-width: 1025px) {
  .sidebar-enter-active {
    animation: sidebar .5s;
  }

  .sidebar-leave-active {
    animation: sidebar .5s reverse;
  }

  @keyframes sidebar {
    0% {
      width: 0;
      opacity: 0;
    }
    100% {
      width: 320px;
      opacity: 1;
    }
  }
}
</style>