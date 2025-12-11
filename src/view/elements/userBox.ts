import { el } from "redom";
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';

export function userBox(username: string ='username'): HTMLElement {
  return el('sl-button', {
      className: 'head-panel__user user',
      type: 'button',
      textContent: username
    }, [
          el('sl-avatar', {
            className: 'user__avatar',
            slot: 'prefix',
            image: '/public/assets/img/avatar.png',
            label: 'user avatar'
          }),
          el('sl-icon', {
            className: 'user__arrow',
            slot: 'suffix',
            library: 'app-icons',
            name: 'arrow-right'
          })
  ])
}