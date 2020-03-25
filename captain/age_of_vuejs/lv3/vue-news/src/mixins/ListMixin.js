import bus from '../utils/bus.js'

// mixin
export default {
    // 재사용할 컴포넌트 옵션
    created() {
        bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                bus.$emit('end:spinner');
            })
            .catch((error) => {
                console.log(error);
            });
    },
}

// hoc
// export default function create() {

// }