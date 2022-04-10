import { APP_CONFIG } from "../../config"

export function checkClass({ selector, count }: any) {
  const { EQUAL_OR_GREATER_THAN_ZERO, LESS_THAN_ZERO } = APP_CONFIG
  
  if(count >= EQUAL_OR_GREATER_THAN_ZERO) {
    removeIfHasClassName({ selector, name: 'smaller' })
    addClass({ selector, name: 'bigger'})
  } else if(count < LESS_THAN_ZERO) {
    removeIfHasClassName({ selector, name: 'bigger' })
    addClass({ selector, name: 'smaller'})
  }
}

export function removeIfHasClassName({ selector, name }: any) {
  return hasClass({ selector, name }) ? removeClass({ selector, name }) : null
}

export function hasClass({ selector, name }: any) {
  return selector.classList.contains(name)
}

export function removeClass({ selector, name }: any) {
  return selector.classList.remove(name)
}

export function addClass({ selector, name }: any) {
  return selector.classList.add(name)
}

export function toggleClass({ selector, name }: any) {
  return selector.classList.toggle(name)
}