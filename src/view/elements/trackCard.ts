import { el } from "redom";
import cover from "../../../public/assets/cover.png";

export function trackCard(title: string, artist: string): HTMLElement {
  return el('sl-card', { className: 'card-image' }, [
            el('img', {
              slot: 'image',
              src: cover,
              alt: 'Album wrapper'
            }),
            el('p', { className: 'card-image__title' }, title),
            el('p', { className: 'card-image__artist' }, artist),
          ]);
}