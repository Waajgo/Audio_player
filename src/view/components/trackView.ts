import { el, mount } from 'redom';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/relative-time/relative-time.js';
import '@shoelace-style/shoelace/dist/components/format-date/format-date.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { Track } from "@/model/Track";
import { trackCard } from "@/view/elements/trackCard";
import calendar from '@/assets/calendar.svg';
import clock from '@/assets/clock.svg';
import { favorite } from "@/view/elements/favorite";
import { pointsBtn } from "@/view/elements/moreBtn";

export function renderTrackItem(track: Track): HTMLTableElement {

  const tableBodyEl = el('tbody',  { class: 'track-table__body'});

  const tableHeaderEl = el('thead', { class: 'track-table__header'}, [
    el('th', '№'),
    el('th', 'Название'),
    el('th', 'Альбом'),
    el('th', el('sl-icon', { class: 'track-table__icon', src: calendar })),
    el('th', el('sl-icon', { class: 'track-table__icon', src: clock })),
  ]);

  const tableEl = el('table', { class: 'track-table'}, [
    tableHeaderEl,
    tableBodyEl,
  ]);

  const durationTrack = new Date(Date.UTC(
    1970, 0, 1, 0,
    Math.floor(track.duration),
    Math.round((track.duration - Math.floor(track.duration))*60),
      ));

  const tableRowEl = el('tr',  { class: 'track-table__row', id: track.id}, [
    el('td', '1'),
    el('td', trackCard(track.title, track.artist)),
    el('td', 'album'),
    el('td', el('sl-relative-time', {date: "2020-07-15T09:17:00-04:00", lang: "ru"})),
    el('td', el('div', {class: 'track-table__btn'}, [
      favorite(),
      el('sl-format-date', {
        date: durationTrack,
        minute: "2-digit",
        second: "2-digit",
      }),
      pointsBtn(),
    ])),

  ]);

  mount(tableBodyEl, tableRowEl);
  return tableEl;
}



