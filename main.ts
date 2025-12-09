import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';
import { controller } from "./src/controller/controller";

registerIconLibrary('app-icons', {
  resolver: name => `/assets/icons/${name}.svg`
});

document.addEventListener('DOMContentLoaded', (): void => {
  controller();
})
