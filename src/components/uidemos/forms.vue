<style lang="scss" scoped type="text/scss">
  @import "~variables";

  .btn {
    margin-right: 5px;
    margin-bottom: 5px;
  }
</style>

<template>
  <div>
    <div class="padding align-center">
      <h2>表单</h2>
    </div>

    <div class="padding">输入框</div>
    <div class="form-group">
      <mt-field class="form-field" label="姓名" placeholder="请输入姓名" type="text"></mt-field>
      <mt-field class="form-field" label="身份证" placeholder="请输入身份证" type="text"></mt-field>
      <mt-field class="form-field" label="手机号码" placeholder="请输入手机号码" type="text"></mt-field>
    </div>

    <div class="padding margin-top-m">复选框</div>
    <div class="form-group">
      <mt-checklist class="form-checklist" v-model="checklistVal" :value="checklistVal" :options="checklistOpts"></mt-checklist>
    </div>

    <div class="padding margin-top-m">单选框</div>
    <div class="form-group">
      <mt-radio
        v-model="radiolistVal"
        :options="radiolistOpts">
      </mt-radio>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ui-forms',
    data: function () {
      return {
        checklistVal: [],
        checklistOpts: [
          {
            label: '被禁用',
            value: '值F',
            disabled: true
          },
          {
            label: '选中禁用',
            value: '选中禁用的值',
            disabled: true
          },
          {
            label: '选项A',
            value: '值A'
          },
          {
            label: '选项B',
            value: '值B'
          }
        ],

        radiolistVal: "",
        radiolistOpts: [
          {
            label: '被禁用',
            value: '值F',
            disabled: true
          },
          {
            label: '选项A',
            value: '值A'
          },
          {
            label: '选项B',
            value: '值B'
          }
        ]
      }
    }
  }
</script>
