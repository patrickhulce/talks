import type { ShikiSetupReturn } from '@slidev/types'
import { defineShikiSetup } from '@slidev/types'

const noirPrism = {
  name: 'noir-prism',
  type: 'light' as const,
  colors: {
    'editor.background': '#ffffff',
    'editor.foreground': '#000000',
  },
  tokenColors: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#708090' } },
    { scope: ['keyword', 'storage', 'storage.type', 'storage.modifier'], settings: { foreground: '#0077AA' } },
    { scope: ['entity.name.function', 'support.function', 'meta.function-call'], settings: { foreground: '#DD4A68' } },
    { scope: ['string', 'string.quoted', 'string.template'], settings: { foreground: '#669900' } },
    { scope: ['constant.numeric', 'constant.language', 'constant.character', 'variable.other.constant'], settings: { foreground: '#990055' } },
    { scope: ['punctuation', 'meta.brace', 'meta.delimiter'], settings: { foreground: '#999999' } },
    { scope: ['keyword.operator', 'punctuation.separator'], settings: { foreground: '#9A6E3A' } },
    { scope: ['entity.name.tag', 'meta.tag'], settings: { foreground: '#990055' } },
    { scope: ['entity.other.attribute-name'], settings: { foreground: '#669900' } },
    { scope: ['variable', 'variable.other', 'entity.name'], settings: { foreground: '#000000' } },
  ],
}

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      light: noirPrism,
      dark: noirPrism,
    },
  }
})
