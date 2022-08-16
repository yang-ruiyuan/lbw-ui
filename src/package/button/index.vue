<template>
  <a-button type="primary">{{ text }}</a-button>
</template>

<script>

export default {
  name: 'YButton',
  props: {
    text: {
      type: String,
      default: "default"
    }

  },
}
</script>

<style lang="less" scoped></style>
