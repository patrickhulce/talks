import type { ShikiSetupReturn } from '@slidev/types'
import { defineShikiSetup } from '@slidev/types'

const hudDark = {
  name: 'hud-dark',
  type: 'dark' as const,
  colors: {
    'editor.background': '#0a0a0a',
    'editor.foreground': '#e8e8e8',
  },
  tokenColors: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#6A6A6A' } },
    { scope: ['keyword', 'storage', 'storage.type', 'storage.modifier'], settings: { foreground: '#FF1E4E' } },
    { scope: ['entity.name.function', 'support.function', 'meta.function-call'], settings: { foreground: '#FFB3C1' } },
    { scope: ['string', 'string.quoted', 'string.template'], settings: { foreground: '#C8C8C8' } },
    { scope: ['constant.numeric', 'constant.language', 'constant.character', 'variable.other.constant'], settings: { foreground: '#FFFFFF' } },
    { scope: ['punctuation', 'meta.brace', 'meta.delimiter'], settings: { foreground: '#6A6A6A' } },
    { scope: ['keyword.operator', 'punctuation.separator'], settings: { foreground: '#FF8AA3' } },
    { scope: ['entity.name.tag', 'meta.tag'], settings: { foreground: '#FF1E4E' } },
    { scope: ['entity.other.attribute-name'], settings: { foreground: '#FFB3C1' } },
    { scope: ['variable', 'variable.other', 'entity.name'], settings: { foreground: '#E8E8E8' } },
  ],
}

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      light: hudDark,
      dark: hudDark,
    },
  }
})
