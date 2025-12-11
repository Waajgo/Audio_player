import { el } from "redom";

export function favoriteBtnEl(): HTMLElement {
  return el('button', { className: 'btn btn--favorite' }, [
    el('sl-icon', { className: 'btn__icon', library: 'app-icons', name: 'heart' })
  ]);
}

export function moreBtnEl(): HTMLElement {
  return el('button', { className: 'btn btn--more' }, [
    el('sl-icon', { className: 'btn__icon', library: 'app-icons', name: 'points' })
  ]);
}

export function logoBtnEl(): HTMLElement {
  return el('button', { className: 'btn btn--logo' }, [
    el('sl-icon', { className: 'btn__icon', library: 'app-icons', name: 'logo' })
  ]);
}
