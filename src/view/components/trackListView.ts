import { el, List } from 'redom';
import { TrackListType } from "@/types/types";
import { TrackItemView } from "@/view/components/trackItemView";

export function trackListView(data: TrackListType): HTMLTableElement {
  const tableHeaderEl: HTMLTableSectionElement = el('thead', { className: 'track-table__header'}, [
    el('th', '№'),
    el('th', 'Название'),
    el('th', 'Альбом'),
    el('th', el('sl-icon', { className: 'track-table__icon', library: 'app-icons', name: 'calendar' })),
    el('th', el('sl-icon', { className: 'track-table__icon', library: 'app-icons', name: 'clock' })),
  ]);

  const tableBodyEl: HTMLTableSectionElement = el('tbody',  { className: 'track-table__body'});

  const list = new List(tableBodyEl, TrackItemView);

  const tableEl: HTMLTableElement = el('table', { className: 'tracks__list track-table'}, [
    tableHeaderEl,
    list.el,
  ]);

  list.update(data);

  return tableEl;
}
