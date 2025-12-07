import { el } from "redom";
import cover from "@/assets/cover.png";

export function trackCard(title: string, artist: string): HTMLElement {
  return el('sl-card', { class: 'card-image' }, [
            el('img', {
              slot: 'image',
              src: cover,
              alt: 'Album wrapper'
            }),
            el('p', { class: 'card-image__title' }, title),
            el('p', { class: 'card-image__artist' }, artist),
          ]);
}