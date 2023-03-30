import { createTheme, darkScrollbar } from '@mui/material'

// ダークカラー設定
export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#232323',
    },
    text: {
      primary: '#E7E8E8',
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
