import {
    mount
} from 'vue-test-utils'
import expect from 'expect'
import CouponCode from '../src/components/CouponCode.vue'

describe('CouponCode', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(CouponCode)
    })

    it('accepts a coupon code', () => {
        expect(wrapper.contains('input.coupon-code')).toBe(true)
    })

    it.only('validates a user-provided coupon code', () => {
        let couponCode = wrapper.find('input.coupon-code')
        couponCode.element.value = '500OFF'
        couponCode.trigger('input');


    })

})