import Cards from './Cards.component.vue';
import { mount } from '@vue/test-utils';

it('Should load items', () => {
  const cards = mount(Cards);
  console.log(cards)
  expect(true).toBe(true)
});