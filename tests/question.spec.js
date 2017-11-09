import {
    mount
} from 'vue-test-utils';
import expect from 'expect'

import Question from '../src/components/Question.vue'

describe('Question', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(Question,{
            propsData:{
                question: {
                    title:'The title',
                    body:'The body'
                }
            }
        })
    })

    it.only('presents the title and body', () => {
        expect(wrapper.html()).toContain('The title')
        expect(wrapper.html()).toContain('The body')
        
    })

    it.only('It can be edited', () => {
        wrapper.find('.button').trigger('click')

        expect(wrapper.find('input[name=title]').element.value).toBe('The title')
    })


})