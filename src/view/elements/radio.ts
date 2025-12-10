import '@shoelace-style/shoelace/dist/components/radio/radio.js';
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import { el } from "redom";

export const radioBtnEl = (): HTMLElement => {
  return el('sl-radio-group', {
      className: 'radio-nav',
      name: 'navigation',
      value: 'main'
    }, [
      el('sl-radio-button', {
        className: 'radio-nav__btn',
        value: 'favorite',
      }, [
        el('sl-icon', {
          className: 'radio-nav__icon',
          slot: 'prefix',
          library: 'app-icons',
          name: 'note'
        }),
        el('span', 'Избранное')
      ]),
      el('sl-radio-button', {
        className: 'radio-nav__btn',
        value: 'main'
      }, [
        el('sl-icon', {
          className: 'radio-nav__icon',
          slot: 'prefix',
          library: 'app-icons',
          name: 'note'
        }),
        el('span', 'Аудиокомпозиции')
      ])
    ]);
  }
