import partA from './part-a.mdx'
import partB from './part-b.mdx'
import partC from './part-c.mdx'
import {default as chromeTheme} from '@eris/mdx-theme/dist/chrome-theme'

export const theme = chromeTheme

export default [...partA, ...partB, ...partC]
