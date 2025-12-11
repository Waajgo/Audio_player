import { el } from "redom";
import { userBox } from "@/view/elements/userBox";
import { searchEl } from "@/view/elements/search";

export function headPanelView() {
  return el('div', {className: 'head-panel'}, [
    searchEl(),
    userBox()
  ]);
}