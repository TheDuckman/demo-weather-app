import { ref, computed } from "vue";

export default function useResponsiveness() {
  const width = ref(window.innerWidth);

  function onResize() {
    width.value = window.innerWidth;
  }
  window.addEventListener("resize", onResize);

  const breakpoints = {
    xs: 600,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };

  const isXs = computed(() => width.value < breakpoints.xs);
  const isSm = computed(
    () => width.value >= breakpoints.xs && width.value < breakpoints.sm,
  );
  const isMd = computed(
    () => width.value >= breakpoints.sm && width.value < breakpoints.md,
  );
  const isLg = computed(
    () => width.value >= breakpoints.md && width.value < breakpoints.lg,
  );
  const isXl = computed(() => width.value >= breakpoints.lg);

  const isMobile = computed(() => isXs.value || isSm.value);

  return { isXs, isSm, isMd, isLg, isXl, isMobile };
}
