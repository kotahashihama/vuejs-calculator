var cal = new Vue({
  el: '#cal',
  data: {
    value: 0
  },
  methods: {
    addValue: function (value) {
      if (this.value == 0 && typeof value != 'string') {
        this.value = ''
      }
      this.value += value + ''
    },
    execute: function () {
      this.value = eval(this.value)
    },
    initialize: function () {
      if (this.value == '') this.value = 0
    }
  }
})