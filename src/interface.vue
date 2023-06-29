<template>
  <!-- Derived from label field  -->
  <VInput :model-value="snakeCaseValue" :disabled="true" v-if="relatedField" />
  <p v-else>Please select Related Field</p>

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
      if (this.relatedField) return snakeCase(this.values[this.relatedField]);
      else return "";
    },
  },
  watch: {
    snakeCaseValue(newValue) {
      this.$emit("input", newValue);
    },
  },
  methods: {
    handleChange(input) {
      console.log("inside handle change", input);
      this.$emit("input", input);
    },
  },
  emits: ["input"],
};
</script>
