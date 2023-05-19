<template>
  <div>
    Value is {{ value }} Snakevcase value {{ snakeCaseValue }} Related Field
    {{ relatedField }}
  </div>
  <VInput :model-value="value" @update:model-value="handleChange($event)" />
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
  watch: {
    // values :  {
    //   handler( newValue ){
    //     if( this.relatedField &&  this.values[relatedField])
    //   },
    //   immediate : false,
    //   console.log("🚀 ~ file: interface.vue:29 ~ newValue:", newValue);
    // },
  },
  computed: {
    snakeCaseValue() {
      if (this.relatedField) {
        return snakeCase(this.values[this.relatedField]);
      } else return snakeCase(this.value);
    },
  },
  methods: {
    // handleInput(input) {
    //   console.log("🚀 ~ file: interface.vue:29 ~ handleInput ~ input:", input);
    //   this.value = input;
    // },
    handleChange(input) {
      this.$emit("input", this.snakeCaseValue);
    },
  },
  emits: ["input"],
  // setup(props, { emit }) {
  // },
};
</script>
