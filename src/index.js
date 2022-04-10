import { qs, qsa } from './utils/dom/index.js'
import { updateCount, resetCount } from './utils/counting.js'

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