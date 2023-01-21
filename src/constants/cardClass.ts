export const CARD_CLASS = {
  GREEN: 'green',
  GOLD: 'gold',
  PLATINUM: 'platinum',
} as const

export const CARD_CLASSES = Object.values(CARD_CLASS) as ['green', 'gold', 'platinum']
