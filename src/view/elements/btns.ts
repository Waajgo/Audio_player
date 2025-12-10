import { el } from "redom";

export const favoriteBtnEl = (): HTMLElement => {
  return el('button', { className: 'btn btn--favorite' }, [
    el('sl-icon', { className: 'btn__icon', library: 'app-icons', name: 'heart' })
  ]);
}

export const moreBtnEl = (): HTMLElement => {
  return el('button', { className: 'btn btn--more' }, [
    el('sl-icon', { className: 'btn__icon', library: 'app-icons', name: 'points' })
  ]);
}

export const logoBtnEl = (): HTMLElement => {
  return el('button', { className: 'btn btn--logo' }, [
    el('sl-icon', { className: 'btn__icon', library: 'app-icons', name: 'logo' })
  ]);
}
