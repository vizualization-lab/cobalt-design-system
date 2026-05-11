export async function registerElement(loader: () => Promise<unknown>): Promise<void> {
  if (typeof window === 'undefined' || typeof customElements === 'undefined') return;
  await loader();
}
