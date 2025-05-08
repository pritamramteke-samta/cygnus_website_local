export function scalePx(px: number, designWidth = 1440): number {
  if (typeof window === 'undefined') return px; // fallback for SSR or non-browser environments

  const screenWidth = window.innerWidth;
  return (px / designWidth) * screenWidth;
}
