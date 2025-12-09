import { mount } from "redom";
import { mainPageView } from "@/view/pages/mainPageView";
import { TrackListType } from "@/types/types";

export function renderMainPages(data: TrackListType):void {
  const mainPageEl = mainPageView(data)
  mainPageEl.forEach(el => mount(document.body, el));
}