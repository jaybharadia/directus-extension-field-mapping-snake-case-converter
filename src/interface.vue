<template>
  <!-- Derived from label field  -->
  <VInput :model-value="snakeCaseValue" :disabled="true" />

  <!-- Editable  -->
  <!-- <VInput
    :model-value="value"
    @update:model-value="handleChange($event)"
    v-if="isEditable"
  /> -->
</template>

<script>
import { snakeCase } from "lodash-es";
export default {
  inject: ["values"],
  props: {
    relatedField: String,
    value: String,
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    snakeCaseValue() {
      return snakeCase(this.values[this.relatedField]);
    },
  },
  methods: {
    handleChange(input) {
      this.$emit("input", snakeCase(input));
    },
  },
  emits: ["input"],
};
</script>
