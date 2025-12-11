import { el } from "redom";
import { container } from "@/view/elements/container";
import { headPanelView } from "@/view/components/headPanelView";
import { trackListView } from "@/view/components/trackListView";
import { asideView } from "@/view/components/asideView";
import { TrackListType } from "@/types/types";

export function mainPageView(data: TrackListType): HTMLElement {
  return el('main',
    el('section', {className: 'tracks'}, container([
      asideView(),
      el('div', { class: 'tracks__wrap' }, [
        headPanelView(),
        el('h1', {className: 'tracks__title'}, 'Аудиофайлы и треки'),
        trackListView(data),
      ])
    ])
  ));
}