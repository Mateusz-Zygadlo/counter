import { hasClass } from './utils/css/index.js'
import { toggleClass, addClass } from './utils/css/index.js'
import { APP_CONFIG } from './config.js'

export function setListenerForThemeMode({ selector }: { selector: HTMLElement}): void {
  const { THEMES: { DARK_MODE, LIGHT_MODE }, THEME_MODE } = APP_CONFIG

  selector.addEventListener('click', () => {
    const isDarkMode = hasClass({ selector: document.body, name: DARK_MODE })
    selector.innerText = `Change to ${ isDarkMode ? DARK_MODE : LIGHT_MODE}`
    document.body.classList.toggle(DARK_MODE)
    localStorage.setItem(THEME_MODE, isDarkMode ? LIGHT_MODE : DARK_MODE)
  })
}

export function changeThemeMode(): void {
  const { THEMES: { DARK_MODE, LIGHT_MODE }, THEME_MODE } = APP_CONFIG
  const isDarkModeInSystem = window.matchMedia('(prefers-color-scheme: dark)').matches
  const getThemeModeFromLocalStorage = localStorage.getItem(THEME_MODE)

  if(isDarkModeInSystem && getThemeModeFromLocalStorage) {
    getThemeModeFromLocalStorage == DARK_MODE ? toggleClass({ selector: document.body, name: DARK_MODE }) : null
  } else if(isDarkModeInSystem && !getThemeModeFromLocalStorage) {
    localStorage.setItem(THEME_MODE, DARK_MODE)
    addClass({ selector: document.body, name: DARK_MODE })
  } else if(!isDarkModeInSystem && getThemeModeFromLocalStorage) {
    getThemeModeFromLocalStorage == DARK_MODE ? toggleClass({ selector: document.body, name: DARK_MODE }) : null
  } else {
    localStorage.setItem(THEME_MODE, LIGHT_MODE)
  }
}

export function changeMainTextForThemeSelect({ selector }: { selector: HTMLElement}): string {
  const { THEMES: { DARK_MODE, LIGHT_MODE }, THEME_MODE } = APP_CONFIG
  const getThemeMode = localStorage.getItem(THEME_MODE)
  return selector.innerText = `Change to ${getThemeMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE}`
}