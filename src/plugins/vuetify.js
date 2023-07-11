/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#00796B',
          secondary: '#004D40',
          accent: '#00695C',
          bgColor: '#00796B'
        },
      },
      dark: {
        colors: {
          primary: '#00796B',
          secondary: '#004D40',
          accent: '#1DE9B6',
          bgColor: '#00796B'
        }
      }
    },
  },
})
