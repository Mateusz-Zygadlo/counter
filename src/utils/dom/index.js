export function qs(selectors) {
  return document.querySelector(selectors)
}

export function qsa(selectors) {
  return [...document.querySelectorAll(selectors)]
}