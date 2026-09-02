import { onMounted, ref, type Ref } from 'vue';

/**
 * Print-mode content is opt-in so the regular documentation remains compact.
 * The PDF generator adds `?print=1` and waits for hydration before capture.
 */
export function usePrintMode(): Ref<boolean> {
  const printMode = ref(false);

  onMounted(() => {
    printMode.value = new URLSearchParams(window.location.search).get('print') === '1';
  });

  return printMode;
}
