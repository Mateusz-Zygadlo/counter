import { checkClass } from './css/index.js'

export function updateCount({ operator, actualCount, selector, adding }) {
  switch (operator) {
    case "+":
      selector.innerText = Number(actualCount) + adding
      checkClass({ selector, count: selector.innerText})
      break
    case '-':
      selector.innerText = Number(actualCount) - adding
      checkClass({ selector, count: selector.innerText})
      break
    default:
      throw new Error("Invalid operator")
  }
}

export function resetCount({ selector, startCount }) {
  return selector.textContent = Number(startCount)
}