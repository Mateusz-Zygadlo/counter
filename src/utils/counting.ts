import { checkClass } from './css/index'
import { APP_CONFIG } from '../config'

interface UpdateCountProps {
  operator: string;
  actualCount: number;
  selector: HTMLElement;
  adding: number
}

export function updateCount({ operator, actualCount, selector, adding }: UpdateCountProps): void {
  const { OPERATORS: { PLUS, MINUS } } = APP_CONFIG
  
  switch (operator) {
    case PLUS:
      selector.innerText = `${actualCount + adding}`
      checkClass({ selector, count: Number(selector.innerText)})
      break
    case MINUS:
      selector.innerText = `${actualCount - adding}`
      checkClass({ selector, count: Number(selector.innerText)})
      break
    default:
      throw new Error("Invalid operator")
  }
}

interface ResetCountProps {
  selector: HTMLElement;
  startCount: number;
}

export function resetCount({ selector, startCount }: ResetCountProps): void {
  selector.textContent = `${startCount}`
  return checkClass({ selector, count: Number(selector.innerText)})
}