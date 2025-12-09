import { el } from "redom";

export function playerView(): HTMLElement {
  return el('footer', {className: 'player'});
}