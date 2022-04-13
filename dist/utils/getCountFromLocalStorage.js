export function getCountFromLocalStorage({ selector }) {
    const count = localStorage.getItem('count');
    if (!count) {
        localStorage.setItem('count', selector.innerText);
    }
    selector.innerText = `${localStorage.getItem('count')}`;
}
