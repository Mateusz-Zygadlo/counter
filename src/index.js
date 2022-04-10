import { qs, qsa } from './utils/dom/index.js'
import { updateCount, resetCount } from './utils/counting.js'
import { APP_CONFIG } from './config.js'
import { setListenerForThemeMode, changeThemeMode, changeMainTextForThemeSelect } from './themeMode.js'

const result = qs(".result-container p")
const themeMode = qs('.theme-container h1')
const [decrement, reset, increment] = qsa(".buttons-container button")
const { OPERATORS: { PLUS, MINUS }, ADDING, START_COUNT } = APP_CONFIG

changeThemeMode()
changeMainTextForThemeSelect({ selector: themeMode })
setListenerForThemeMode({ selector: themeMode})

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