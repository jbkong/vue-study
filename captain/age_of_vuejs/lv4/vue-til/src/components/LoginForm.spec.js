import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
    // test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어야 한다.', () => {
    //     // const instance = new Vue(LoginForm).$mount();
    //     // expect(instance.username).toBe('');
    //     const wrapper = shallowMount(LoginForm);
    //     expect(wrapper.vm.username).toBe('');
    // });
    test('ID는 이메일 형식이 아니면 경고 메시지가 출력된다.', () => {
        const wrapper = shallowMount(LoginForm, {
            data() {
                return {
                    username: 'test',
                }
            }
        });
        // 특정 태그, 클래스 find
        // const idInput = wrapper.find('#username');
        // console.log(wrapper.vm.isUsernameValid);
        const warningText = wrapper.find('.warning');
        expect(warningText.exists()).toBeTruthy();
    });
});