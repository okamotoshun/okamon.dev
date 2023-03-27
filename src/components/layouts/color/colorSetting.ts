import { createTheme, darkScrollbar } from '@mui/material'

// ダークカラー設定
export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#232323',
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
