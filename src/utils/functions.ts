export const printFetch = (
  api: string,
  message: string,
  color: 'blue' | 'red' | 'yellow' | 'green' | number,
): void => {
  if (color === 'blue') color = 34
  if (color === 'red') color = 31
  if (color === 'yellow') color = 33
  if (color === 'green') color = 32

  console.log(`\x1b[${color}m${api} \x1b[0m- ${message}`)
}

export const rgba = (hex: string, alpha = 1): string => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => {
    return parseInt(x, 16)
  })
  return `rgba(${r},${g},${b},${alpha})`
}
