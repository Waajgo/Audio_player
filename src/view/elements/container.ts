import { el, RedomQueryArgument } from "redom";

export function container(...children: RedomQueryArgument[]): HTMLElement {
  return el('div', {class: 'container'}, [...children]);
}