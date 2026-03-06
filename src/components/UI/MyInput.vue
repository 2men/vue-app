<template>
  <input class="input" type="text" :placeholder="placeholder" :value="modelValue" @input="$emit('update:model-value', $event.target.value)">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: {
      type: [String, Number]
    },
    placeholder: {
      type: String
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>