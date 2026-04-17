declare module 'autosize' {
  type AutosizeTarget = Element | Element[] | NodeList | HTMLCollection;

  interface Autosize {
    (elements: AutosizeTarget): void;
    update(elements: AutosizeTarget): void;
    destroy(elements: AutosizeTarget): void;
  }

  const autosize: Autosize;
  export default autosize;
}
