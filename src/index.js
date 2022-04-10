import { qs, qsa } from './utils/dom/index.js'
import { updateCount, resetCount } from './utils/counting.js'
import { APP_CONFIG } from './config.js'

const result = qs(".result-container p")
const [decrement, reset, increment] = qsa(".buttons-container button")
const { OPERATORS: { PLUS, MINUS }, ADDING, START_COUNT } = APP_CONFIG

increment.addEventListener("click", () =>
  updateCount({
    operator: PLUS,
    actualCount: result.innerText,
    selector: result,
    adding: ADDING,
  })
)

decrement.addEventListener("click", () =>
  updateCount({
    operator: MINUS,
    actualCount: result.innerText,
    selector: result,
    adding: ADDING,
  })
)

reset.addEventListener("click", () => resetCount({ 
  selector: result,
  startCount: START_COUNT
}))