export function checkClass({ selector, count }) {
  if(count > 0) {
    removeIfHasClassName({ selector, name: 'smaller' })
    addClass({ selector, name: 'bigger'})
  } else if(count < 0) {
    removeIfHasClassName({ selector, name: 'bigger' })
    addClass({ selector, name: 'smaller'})
  }
}

export function removeIfHasClassName({ selector, name }) {
  return hasClass({ selector, name }) ? removeClass({ selector, name }) : null
}

export function hasClass({ selector, name }) {
  return selector.classList.contains(name)
}

export function removeClass({ selector, name }) {
  return selector.classList.remove(name)
}

export function addClass({ selector, name }) {
  return selector.classList.add(name)
}