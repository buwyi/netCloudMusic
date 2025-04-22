export function scrollTo(element: HTMLDivElement, to: number, duration: number) {
  let start: number;
  const from = element.scrollTop;
  const change = to - from;

  const animateScroll = (timestamp: number) => {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);

    element.scrollTop = from + change * progress;

    if (progress < 1) {
      window.requestAnimationFrame(animateScroll);
    }
  };

  window.requestAnimationFrame(animateScroll);
}
