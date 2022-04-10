import { qs, qsa } from './utils/dom/index'
import { updateCount, resetCount } from './utils/counting'
import { APP_CONFIG } from './config'
import { setListenerForThemeMode, changeThemeMode, changeMainTextForThemeSelect } from './themeMode'

const result = qs(".result-container p") as HTMLElement
const themeMode = qs('.theme-container h1') as HTMLElement
const [decrement, reset, increment] = qsa(".buttons-container button")
const { OPERATORS: { PLUS, MINUS }, ADDING, START_COUNT } = APP_CONFIG

changeThemeMode()
changeMainTextForThemeSelect({ selector: themeMode })
setListenerForThemeMode({ selector: themeMode})

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