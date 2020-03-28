// PLUGIN : 모든 컴포넌트에 적용하고 싶은 것
import Chart from 'chart.js';

export default {
    install(Vue) {
        Vue.prototype.$_Chart = Chart;

        // Usage:
        // this.$_Chart
    }
}