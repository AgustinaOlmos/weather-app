export const getGradient = (temp?: number) => {
  if (!temp) return 'from-gray-300 via-gray-400 to-gray-500'
  return temp <= 25
    ? 'from-blue-300 via-blue-400 to-blue-500'
    : 'from-orange-300 via-orange-400 to-orange-500'
}
