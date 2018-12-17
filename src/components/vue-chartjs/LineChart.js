import { Line } from 'vue-chartjs'
var axios = require('axios');

export default {
  extends: Line,
  data: function() {
    return {
      passedData: {}
    }
  },
  props: ['data', 'options'],
  // created () {
  //   this.passedData = this.data;
  // },
  mounted () {
    setTimeout(function() {
      this.renderChart(this.data, this.options)
    }.bind(this), 1000);
  },
  // updated () {
  //   console.log('in the updated attribute');
  //   console.log(this.passedData);
  //   this.renderChart(this.passedData, this.options)
  // },
  // watch: {
  //   data: function(newData) {
  //     this.passedData = newData;
  //   }
  // }
}