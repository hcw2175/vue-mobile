<template>
  <div>
    <div class="padding align-center">
      <h2>Cell</h2>
    </div>

    <div class="padding">基本信息</div>
    <div class="cell-group">
      <mt-cell class="cell-item" title="头像">
        <img src="~img/avatar.png" width="64" class="img-circle"/>
      </mt-cell>
      <mt-cell class="cell-item" title="姓名" value="诸葛亮"></mt-cell>
      <mt-cell class="cell-item" title="昵称" value="诸葛亮" label="副标题：诸葛亮"></mt-cell>
    </div>

    <div class="padding margin-top-m">带图标的</div>
    <div class="cell-group">
      <mt-cell class="cell-item" title="手机号码" value="158****2175">
        <i class="fa fa-mobile fa-lg margin-right-s font-lighter" slot="icon"></i>
      </mt-cell>
      <mt-cell class="cell-item" title="Email" value="hcw****5@163.com" is-link to="/home"></mt-cell>
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
