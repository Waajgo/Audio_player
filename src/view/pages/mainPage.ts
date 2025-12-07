import { el, mount } from "redom";
import { headerView } from "@/view/components/headerView";
import { container } from "@/view/elements/container";
import { trackListView } from "@/view/components/trackListView";
import { asideView } from "@/view/components/asideView";
import { playerView } from "@/view/components/playerView";

export function renderMainPage():void {
  const headerEl = headerView();
  const mainEl = el('main', container(
    el('section', {class: 'tracks'}, [
      el('h1', {class: 'tracks__title'}, 'Аудиофайлы и треки'),
      trackListView(),
    ])
  ));
  const asideEl = asideView();
  const footerEl = playerView();

  mount(document.body, headerEl);
  mount(document.body, asideEl);
  mount(document.body, mainEl);
  mount(document.body, footerEl);
}