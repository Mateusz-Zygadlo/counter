export function qs(selectors: any) {
  return document.querySelector(selectors)
}

export function qsa(selectors: any) {
  return [...document.querySelectorAll(selectors)]
}