import { COLOR } from '../constants/color'

/**
 * 不明な色形式をrgbに変換する
 * ※SSRでは使えない・opacity情報は消える
 */

export const unknownColorToHex = (color: string) => {
  if (!globalThis.document) return

  const div = document.createElement('div')
  div.setAttribute('style', `background-color:${color};display:none;`)
  document.body.appendChild(div)
  const rgbColor = getComputedStyle(div).backgroundColor
  document.body.removeChild(div)

  const rgb = rgbColor.match(/\d+/g)?.map((rgbCode) => Number(rgbCode).toString(16).padStart(2, '0'))
  if (!rgb) return
  const [r, g, b] = rgb

  const hex = `#${r}${g}${b}`
  if (!CSS.supports('background', hex)) return

  return hex
}
export type RGB = ReturnType<typeof hexToRGB>

export const hexToRGB = (hex: string) => {
  const r = Number.parseInt(hex.substring(1, 3), 16)
  const g = Number.parseInt(hex.substring(3, 5), 16)
  const b = Number.parseInt(hex.substring(5, 7), 16)
  return {
    r,
    g,
    b,
  }
}

// 人の見やすい光度に変換する 参照元 https://www.w3.org/WAI/GL/wiki/Relative_luminance
const getRGBForCalculateLuminance = (baseColor: number) => {
  const color = baseColor / 255
  if (color <= 0.03928) {
    return color / 12.92
  } 
    return ((color + 0.055) / 1.055)**2.4
  
}

// 相対輝度に変換する
export const getRelativeLuminanceByRGB = (rgb: { r: number; g: number; b: number }) => {
  const { r, g, b } = rgb
  const red = getRGBForCalculateLuminance(r)
  const green = getRGBForCalculateLuminance(g)
  const blue = getRGBForCalculateLuminance(b)
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue
}

// 1 2からコントラスト比を求める
const getContrastRatio = (rgb1: RGB, rgb2: RGB) => {
  const luminance1 = getRelativeLuminanceByRGB(rgb1)
  const luminance2 = getRelativeLuminanceByRGB(rgb2)
  const bright = Math.max(luminance1, luminance2)
  const dark = Math.min(luminance1, luminance2)

  return (bright + 0.05) / (dark + 0.05)
}

// 背景色からテキストの色を求める
export const getFontColor = (backgroundColor: string) => {
  const hex = unknownColorToHex(backgroundColor)
  if (!hex) return
  const rgb = hexToRGB(hex)
  const darkRatio = getContrastRatio(rgb, hexToRGB('#000000'))
  const lightRatio = getContrastRatio(rgb, hexToRGB('#ffffff'))
  return lightRatio < darkRatio ? '#000000' : '#ffffff'
}

export const colorToVar = (color: string) => {
  const varColors = Object.values(COLOR) as string[]
  if (varColors.includes(color)) return `var(--${color})`
  return color
}
