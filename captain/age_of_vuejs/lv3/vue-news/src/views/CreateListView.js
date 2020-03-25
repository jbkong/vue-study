import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name: name,
        mounted() {
            bus.$emit('end:spinner');
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}