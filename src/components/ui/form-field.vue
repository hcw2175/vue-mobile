<style scoped lang="scss" type="text/scss">
  @import "~variables";
</style>

<template>
  <div>
    <mt-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :disalbed="disalbed"
      :readonly="readonly"
      :rows="rows"
      :state="computedState"
      :attr="computedAttrs"
      v-model="inputVal"
    >
      <slot></slot>
    </mt-field>

    <div class="color-danger padding-s align-right font-s" v-show="computedError" >{{ errorMsg }}</div>
  </div>
</template>

<script>
  import _ from 'lodash';

  export default{
    name: "form-field",
    props: ["label", "value", "type", "placeholder", "attr", "disalbed", "readonly", "rows", "name", "attr", "errorMsg"],
    data: function () {
      return {
          inputVal: this.value
      }
    },
    computed: {
      computedAttrs: function () {
        const attrs = this.attr || {};
        return _.assign(attrs, {
          'name': this.name
        })
      },

      computedState: function () {
        return this.computedError ? "error" : "";
      },

      computedError: function () {
        return !(!(this.errorMsg !== null && this.errorMsg !== ""));
      }
    },
    watch: {
      inputVal(value) {
        this.$emit('input', value);
      }
    }
  }
</script>
