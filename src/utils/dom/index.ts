export function qs(selectors: string): Element | null {
  return document.querySelector(selectors)
}

export function qsa(selectors: string): Element[] {
  return [...document.querySelectorAll(selectors)]
}