export const visiblePercent = (ref: React.RefObject<HTMLElement>, scrollY: number): number => {
  const elm = ref.current;
  if (elm) {
    const viewport = window.innerHeight / 3;
    const height = elm.offsetHeight;

    // Calculate percentage of the element that's been seen
    const distance = scrollY + viewport;
    const percentage = Math.round(
      distance / ((viewport + height) / 100) 
    );

    return (Math.min(100, Math.max(0, percentage)));
  }

  return 0;
}