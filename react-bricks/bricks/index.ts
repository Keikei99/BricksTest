import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import Thumbnail from "./Thumbnail"

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit, Thumbnail], // Custom Bricks
      },
    ],
  },
]

export default bricks
