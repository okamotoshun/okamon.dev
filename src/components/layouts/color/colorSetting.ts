import { createTheme, darkScrollbar } from '@mui/material'

// ダークカラー設定
export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1e1e1e',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
})
