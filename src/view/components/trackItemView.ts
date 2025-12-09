import { el, setChildren } from 'redom';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/relative-time/relative-time.js';
import { trackCard } from "@/view/elements/trackCard";
import { favoriteBtnEl, moreBtnEl } from "@/view/elements/btns";
import { convertApiDuration } from "@/utils/helpers";
import { TrackType } from "@/types/types";

export class TrackItemView {
  el: HTMLTableRowElement;

  constructor() {
    this.el = el('tr', { className: 'track-table__item' });
  }

  update(track: TrackType, index: number) {
    setChildren(this.el, [
      el('td', index + 1),
      el('td', trackCard(track.title, track.artist)),
      el('td', 'album'),
      el('td', el('sl-relative-time', {date: "2025-12-09T00:00:00-00:00", lang: "ru"})),
      el('td', el('div', {className: 'track-table__btn'}, [
        favoriteBtnEl(),
        el('span', convertApiDuration(track.duration)),
        moreBtnEl(),
      ])),
    ])
  }
}
