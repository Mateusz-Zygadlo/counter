import { hasClass } from './utils/css/index.js'
import { toggleClass } from './utils/css/index.js'

export function setThemeMode({ selector }) {
  selector.addEventListener('click', () => {
    const isDarkMode = hasClass({ selector: document.body, name: 'dark-mode' })
    selector.innerText = `change to ${ isDarkMode ? 'dark' : 'light'} mode`
    document.body.classList.toggle('dark-mode')
    localStorage.setItem('theme-mode', isDarkMode ? 'light-mode' : 'dark-mode')
  })
}

export function betterChangeThemeMode({ selector }) {
  const isDarkModeInSystem = window.matchMedia('(prefers-color-scheme: dark)').matches
  const getThemeModeFromLocalStorage = localStorage.getItem('theme-mode')

  if(isDarkModeInSystem && getThemeModeFromLocalStorage) {
    toggleClass({ selector: document.body, name: getThemeModeFromLocalStorage == 'dark-mode' ? 'dark-mode' : undefined })
  } else if(isDarkModeInSystem && !getThemeModeFromLocalStorage) {
    localStorage.setItem('theme-mode', 'dark-mode')
  } else if(!isDarkModeInSystem && getThemeModeFromLocalStorage) {
    toggleClass({ selector: document.body, name: getThemeModeFromLocal == 'dark-mode' ? 'dark-mode' : undefined})
  } else {
    localStorage.setItem('theme-mode', 'light-mode')
  }

  changeThemeText({ selector })
}

export function changeThemeText({ selector }) {
  const getThemeMode = localStorage.getItem('theme-mode')
  return selector.innerText = `change to ${getThemeMode === 'light-mode' ? 'dark-mode' : 'light-mode'}`
}