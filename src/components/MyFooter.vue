<template>
  <footer class="footer">
    <div class="container">
      &#169; Улан-Удэ, {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: teal;
  color: white;
}
</style>