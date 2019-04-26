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
      if (isNaN(this.value.slice(-1))) this.value = this.value.slice(0, -1)
      this.value = String(eval(this.value))
    },
    initialize: function () {
      if (this.value == '') this.value = 0
    }
  }
})