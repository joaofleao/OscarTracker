export const print = (
  api: string,
  message: string,
  color: 'blue' | 'red' | 'yellow' | 'green' | number,
): void => {
  if (color === 'blue') color = 34
  if (color === 'red') color = 31
  if (color === 'yellow') color = 33
  if (color === 'green') color = 32

  // eslint-disable-next-line no-console
  console.log(`\x1b[${color}m${api} \x1b[0m- ${message}`)
}

export const rgba = (hex: string, alpha = 1): string => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => {
    return parseInt(x, 16)
  })
  return `rgba(${r},${g},${b},${alpha})`
}

export const deepEqual = (obj1: unknown, obj2: unknown): boolean => {
  if (obj1 === obj2) {
    return true
  }

  if (obj1 == null || obj2 == null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false
  }

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false
    }
  }

  return true
}
