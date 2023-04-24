export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function isLink(str) {
  let url
  try {
    url = new URL(str)
  } catch (_) {
    return false
  }
  return url.protocol === 'http:' || url.protocol === 'https:'
}
