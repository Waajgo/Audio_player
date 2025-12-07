import { el } from 'redom';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/relative-time/relative-time.js';
import '@shoelace-style/shoelace/dist/components/format-date/format-date.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { Track } from "@/model/Track";
import { trackCard } from "@/view/elements/trackCard";
import { favorite } from "@/view/elements/favorite";
import { pointsBtn } from "@/view/elements/moreBtn";

export function trackItemView(track: Track): HTMLElement {

  const durationTrack = new Date(Date.UTC(
    1970, 0, 1, 0,
    Math.floor(track.duration),
    Math.round((track.duration - Math.floor(track.duration))*60),
      ));

  return el('tr',  { class: 'track-table__row', id: track.id}, [
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
}



