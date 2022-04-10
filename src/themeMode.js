import { hasClass } from './utils/css/index.js'
import { toggleClass, removeClass } from './utils/css/index.js'

function inLocalStorage(key) {
  return localStorage.getItem(key)
}

function changeText({ selector, title }) {
  return selector.innerText = title
}

export function themeMode({ selector }) {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    if(inLocalStorage('theme-mode')) {
      if(localStorage.getItem('theme-mode') == 'light-mode') {
        changeText({ selector, text: 'change to dark mode' })
        return removeClass({ selector: document.body, name: 'dark-mode' })
      }
      changeText({ selector, text: 'change to light mode' })
      return toggleClass({ selector: document.body, name: 'dark-mode' })
    } 
    
    localStorage.setItem('theme-mode', 'dark-mode')
    changeText({ selector, text: 'change to light mode' })
    return toggleClass({ selector: document.body, name: 'dark-mode' })
  } else {
    if(localStorage.getItem('theme-mode')) {
      if(localStorage.getItem('theme-mode') == 'light-mode') {
        changeText({ selector, text: 'change to dark mode' })
        return removeClass({ selector: document.body, name: 'dark-mode' })
      }
    
      changeText({ selector, name: 'change to light mode' })
      return toggleClass({ selector: document.body, name: 'dark-mode' })
    } else {
      localStorage.setItem('theme-mode', 'light-mode')
    }
  }
}

export function setThemeMode({ selector }) {
  selector.addEventListener('click', () => {
    const isDarkMode = hasClass({ selector: document.body, name: 'dark-mode' })
    selector.innerText = `change to ${ isDarkMode ? 'dark' : 'light'} mode`
    document.body.classList.toggle('dark-mode')
    localStorage.setItem('theme-mode', isDarkMode ? 'light-mode' : 'dark-mode')
  })
}