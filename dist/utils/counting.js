import { checkClass } from './css/index.js';
import { APP_CONFIG } from '../config.js';
export function updateCount({ operator, actualCount, selector, adding }) {
    const { OPERATORS: { PLUS, MINUS } } = APP_CONFIG;
    switch (operator) {
        case PLUS:
            selector.innerText = `${actualCount + adding}`;
            checkClass({ selector, count: Number(selector.innerText) });
            break;
        case MINUS:
            selector.innerText = `${actualCount - adding}`;
            checkClass({ selector, count: Number(selector.innerText) });
            break;
        default:
            throw new Error("Invalid operator");
    }
}
export function resetCount({ selector, startCount }) {
    selector.textContent = `${startCount}`;
    return checkClass({ selector, count: Number(selector.innerText) });
}
