import { headerView } from "@/view/components/headerView";
import { el } from "redom";
import { container } from "@/view/elements/container";
import { trackListView } from "@/view/components/trackListView";
import { asideView } from "@/view/components/asideView";
import { playerView } from "@/view/components/playerView";
import { TrackListType } from "@/types/types";

export function mainPageView(data: TrackListType): [HTMLElement, HTMLElement, HTMLElement, HTMLElement] {
  const headerEl = headerView();
  const mainEl = el('main',
    el('section', {className: 'tracks'}, container([
        el('h1', {className: 'tracks__title'}, 'Аудиофайлы и треки'),
        trackListView(data),
      ])
    ));
  const asideEl = asideView();
  const footerEl = playerView();

  return [headerEl, mainEl, asideEl, footerEl];
}