function hasClass (el, cls) {
  if (!el || !el.classList || !cls) return null
  return el.classList.contains(cls) ? el : null
}

export default function parentsHasClass (el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  let classExistEl = hasClass(el, cls)
  while (el && el.tagName !== 'BODY' && !classExistEl) {
    classExistEl = hasClass(el, cls)
    el = el.parentNode
  }
  return classExistEl
}
