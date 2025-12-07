import { el } from "redom";
import heart from "@/assets/heart.svg";
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

export const favorite = (): HTMLElement => {
  return el('button', { class: 'favorite' }, [
          el('sl-icon', { class: 'favorite__icon', src: heart })
        ]);
}