import { el } from "redom";
import { logoBtnEl } from "@/view/elements/btn";
import { radioBtnEl } from "@/view/elements/radio";

export function asideView() {
  return el('aside', {className: 'aside'}, [
    logoBtnEl(),
    radioBtnEl(),
  ]);
}