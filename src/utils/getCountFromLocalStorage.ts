interface GetCountFromLocalStorageProps {
  selector: HTMLElement;
}

export function getCountFromLocalStorage({ selector }: GetCountFromLocalStorageProps): void {
  const count = localStorage.getItem('count')

  if(!count) {
    localStorage.setItem('count', selector.innerText)
  }

  selector.innerText = `${localStorage.getItem('count')}`
}