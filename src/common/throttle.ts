export const throttle = <F extends (...args: any[]) => void>(
  func: F,
  limit: number
): ((...args: Parameters<F>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<F>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
