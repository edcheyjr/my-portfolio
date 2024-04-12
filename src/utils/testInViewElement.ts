/**
 * Checks if the specified element is fully within the boundaries of its parent element or the window viewport.
 * @param element The element to check if it is in view.
 * @param parentElement The optional parent element. If provided, the function checks if the element is within this parent element's boundaries.
 * @returns A boolean indicating whether the element is fully in view.
 */
export const isElementFullyInView = (
  element: HTMLElement,
  parentElement?: HTMLElement | Window | null
): boolean => {
  const rect = element.getBoundingClientRect()

  if (parentElement instanceof HTMLElement) {
    const parentRect = parentElement.getBoundingClientRect()
    return (
      rect.top >= parentRect.top &&
      rect.bottom <= parentRect.bottom &&
      rect.left >= parentRect.left &&
      rect.right <= parentRect.right
    )
  } else {
    return rect.top < window.innerHeight && rect.bottom >= 0
  }
}
