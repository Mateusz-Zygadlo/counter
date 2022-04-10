function qs(selectors) {
  return document.querySelector(selectors)
}

function qsa(selectors) {
  return [...document.querySelectorAll(selectors)]
}

function updateCount({ operator, actualCount, selector, adding }) {
  switch (String(operator)) {
    case "+":
      selector.innerText = Number(actualCount) + adding
      checkClass({ selector, count: Number(actualCount) + adding})
      break
    case '-':
      selector.innerText = Number(actualCount) - adding
      checkClass({ selector, count: Number(actualCount) - adding})
      break
    default:
      throw new Error("Invalid operator")
  }
}

function resetCount({ selector, startCount }) {
  selector.textContent = Number(startCount)
}

function checkClass({ selector, count }) {
  if(count > 0 && hasClass({ selector, name: 'smaller' })) {
    removeClass({ selector, name: 'smaller'})
    addClass({ selector, name: 'bigger'})
  } else if(count < 0 && hasClass({ selector, name: 'bigger'})) {
    removeClass({ selector, name: 'bigger'})
    addClass({ selector, name: 'smaller'})
  }
}

function hasClass({ selector, name }) {
  return selector.classList.contains(name)
}

function removeClass({ selector, name }) {
  return selector.classList.remove(name)
}

function addClass({ selector, name }) {
  return selector.classList.add(name)
}

const result = qs(".result-container p")
const [decrement, reset, increment] = qsa(".buttons-container button")

increment.addEventListener("click", () =>
  updateCount({
    operator: "+",
    actualCount: result.innerText,
    selector: result,
    adding: 1,
  })
)

decrement.addEventListener("click", () =>
  updateCount({
    operator: "-",
    actualCount: result.innerText,
    selector: result,
    adding: 1,
  })
)

reset.addEventListener("click", () => resetCount({ 
  selector: result,
  startCount: 0
}))