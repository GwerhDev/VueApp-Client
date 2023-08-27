import { expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Cards from '../app/components/Cards/Cards.component.vue';

it('Should load items', () => {
  const wrapper = mount(Cards);
  expect(wrapper.html()).toContain('Sunt');
});