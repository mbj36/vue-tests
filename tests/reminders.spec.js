import { mount } from 'vue-test-utils'
import expect from 'expect'
import Reminders from '../src/components/Reminders.vue'

describe('Reminders', () => {
   
    it('hides the reminders lists  if there are none', () => {
        let wrapper =  mount(Reminders)

        expect(wrapper.contains('ul')).toBe(false)
    })

    it('can add reminders', () => {
        let wrapper = mount(Reminders)

        let newReminder = wrapper.find('.new-reminder')

        newReminder.element.value = 'Go to the store'
        newReminder.trigger('input')
        wrapper.find('button').trigger('click')
        expect(wrapper.find('ul').text()).toContain('Go to the store')
    })
})