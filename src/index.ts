import { qs, qsa } from './utils/dom/index.js'
import { updateCount, resetCount } from './utils/counting.js'
import { APP_CONFIG } from './config.js'
import { setListenerForThemeMode, changeThemeMode, changeMainTextForThemeSelect } from './themeMode.js'
import { getCountFromLocalStorage } from './utils/getCountFromLocalStorage.js'
import { checkClass } from './utils/css/index.js'

const result = qs(".result-container p") as HTMLElement
const themeMode = qs('.change-theme') as HTMLElement
const [decrement, reset, increment] = qsa(".buttons-container button")
const { OPERATORS: { PLUS, MINUS }, ADDING, START_COUNT } = APP_CONFIG

getCountFromLocalStorage({ selector: result })
changeThemeMode()
changeMainTextForThemeSelect({ selector: themeMode })
setListenerForThemeMode({ selector: themeMode})

checkClass({
  selector: result,
  count: Number(result.innerText),
})

increment.addEventListener("click", (): void => {
  updateCount({
    operator: PLUS,
    actualCount: Number(result.innerText),
    selector: result,
    adding: ADDING,
  })
})

decrement.addEventListener("click", (): void => {
  updateCount({
    operator: MINUS,
    actualCount: Number(result.innerText),
    selector: result,
    adding: ADDING,
  })
})

reset.addEventListener("click", (): void => {
  resetCount({ 
    selector: result,
    startCount: START_COUNT
  })
})