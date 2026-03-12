<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <a href="#">Shop</a>

        <a href="#" class="btn btn-cart">
          <i class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </i>
          <span class="count" v-if="$store.state.basket.length">{{ $store.state.basket.length }}</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  background-color: teal;
  color: white;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 var(--padding);
    
    .btn-cart {
      position: relative;
      width: 24px;
      height: 24px;

      .count {
        position: absolute;
        top: -5px;
        right: -5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        background-color: white;
        color: black;
        border-radius: 50%;
        font-size: 11px;
      }
    }
  }
}
</style>