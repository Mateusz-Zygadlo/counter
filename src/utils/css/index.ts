import { APP_CONFIG } from "../../config.js"

interface UtilsCssProps {
  selector: HTMLElement;
  name: string;
}

interface CheckClassProps {
  selector: HTMLElement;
  count: number;
}

export function checkClass({ selector, count }: CheckClassProps): void {
  const { EQUAL_OR_GREATER_THAN_ZERO, LESS_THAN_ZERO } = APP_CONFIG
  
  if(count >= EQUAL_OR_GREATER_THAN_ZERO) {
    removeIfHasClassName({ selector, name: 'smaller' })
    addClass({ selector, name: 'bigger'})
  } else if(count < LESS_THAN_ZERO) {
    removeIfHasClassName({ selector, name: 'bigger' })
    addClass({ selector, name: 'smaller'})
  }
}

export function removeIfHasClassName({ selector, name }: UtilsCssProps): void | null {
  return hasClass({ selector, name }) ? removeClass({ selector, name }) : null
}

export function hasClass({ selector, name }: UtilsCssProps): boolean {
  return selector.classList.contains(name)
}

export function removeClass({ selector, name }: UtilsCssProps): void {
  return selector.classList.remove(name)
}

export function addClass({ selector, name }: UtilsCssProps): void {
  return selector.classList.add(name)
}

export function toggleClass({ selector, name }: UtilsCssProps): boolean {
  return selector.classList.toggle(name)
}