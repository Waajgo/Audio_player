import { el } from "redom";
import '@shoelace-style/shoelace/dist/components/input/input.js';

export function searchEl(): HTMLElement {
  return el('sl-input', {
      className: 'head-panel__search search',
      type: 'search',
      placeholder: 'Что будем искать?',
      clearable: true,
    }, el('sl-icon', {
      className: 'search__icon',
      slot: 'prefix',
      library: 'app-icons',
      name: 'search'
    })
  )
}