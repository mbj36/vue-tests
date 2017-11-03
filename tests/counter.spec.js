import { mount } from 'vue-test-utils'
import Counter from '../src/components/Counter'
import expect from 'expect'

describe('Counter', () => {
    let wrapper = mount(Counter)

    it('defaults to a count of 0', () => {  
        expect(wrapper.vm.count).toBe(0) 
    })

    it('increments the count when the button is clicked', () => {
        wrapper.find('button').trigger('click')
        expect(wrapper.vm.count).toBe(1)
    })

    it('presents the current count', () => {
        expect(wrapper.find('.count').html()).toContain(1)
    })
})