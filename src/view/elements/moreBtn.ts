import { el } from "redom";
import points from "@/assets/points.svg";
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

export const pointsBtn = (): HTMLElement => {
  return el('button', { class: 'points' }, [
    el('sl-icon', { class: 'favorite__points', src: points })
  ]);
}