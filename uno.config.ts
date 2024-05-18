import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  theme: {
  },
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWind(),
  ],
  // layers: {
  //   'components': -1,
  //   'default': -3,
  //   'utilities': -2,
  //   'my-layer': 3,
  //   'primevue': 4,
  // },

  transformers: [transformerDirectives(), transformerVariantGroup()],
})
