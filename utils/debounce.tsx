let timer: NodeJS.Timeout

const debounce = (fn: () => void, time: number) => {
  if (timer) clearTimeout(timer)
  timer = setTimeout(fn, time)
}

export default debounce
 