var cal = new Vue({
  el: '#cal',
  data: {
    value: '0'
  },
  methods: {
    addNumber: function (number) {
      if (this.value == 0 && typeof number != 'string') this.value = ''
      this.value += number + ''
    },
    addOperator: function (operator) {
      if (!isNaN(this.value.slice(-1))) this.value += operator
    },
    execute: function () {
      if (isNaN(this.value.slice(-1))) this.value = this.value.slice(0, -1)
      this.value = String(eval(this.value))
    },
    initialize: function () {
      this.value = '0'
    },
    validate: function () {
      if (this.value == '') this.value = '0'
    }
  }
})