import { footerHeight } from '../../const/heightSetting'
import { Box, Grid, Link, Paper, Stack, Typography, Tooltip } from '@mui/material'
import { VscRemote, VscError, VscWarning, VscBell, VscFeedback, VscCheck } from 'react-icons/vsc'
import { IoIosGitBranch } from 'react-icons/io'
import { BiCodeCurly } from 'react-icons/bi'

export const Footer = () => {
  const fontSize = '0.8rem'
  const iconSize = '1rem'
  const bgBlue = '#3279CB'
  const bgBlueHover = '#1f8ad2'
  const bgGreen = '#2E8461'
  const bgGreenHover = '#329171'
  return (
    <Box component={Paper} square elevation={0} sx={{ height: footerHeight, color: 'white' }} display="flex">
      {/* リモート機能表示のみ */}
      <Grid container sx={{ backgroundColor: bgBlue }}>
        <Grid
          item
          sx={{
            width: '35px',
            backgroundColor: bgGreen,
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
              background: bgGreenHover,
            },
          }}
          display="flex">
          <VscRemote fontSize={iconSize} />
        </Grid>
        <Grid item sx={{ width: '200px' }} display="flex">
          <Stack direction="row" spacing={0.5} sx={{ pl: 1 }}>
            <Tooltip title="okamon (Git)" arrow>
              <Stack direction="row" spacing={0.5}>
                <Box
                  component={Link}
                  href="https://github.com/okamotoshun"
                  color="white"
                  target="_blank"
                  display="flex"
                  underline="none"
                  sx={{
                    px: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': {
                      background: bgBlueHover,
                    },
                  }}>
                  <IoIosGitBranch fontSize={iconSize} />
                  <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: fontSize }}>main</Typography>
                </Box>
              </Stack>
            </Tooltip>
            <Tooltip title="No Error No Life" arrow>
              <Stack
                direction="row"
                spacing={0.5}
                sx={{
                  px: 0.5,
                  cursor: 'pointer',
                  '&:hover': {
                    background: bgBlueHover,
                  },
                }}>
                <Box
                  display="flex"
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 0.3,
                  }}>
                  <VscError fontSize={iconSize} />
                </Box>
                <Box
                  display="flex"
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    pt: 0.3,
                  }}>
                  <Typography sx={{ fontSize: fontSize }}>999</Typography>
                </Box>

                <Box
                  display="flex"
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 0.3,
                  }}>
                  <VscWarning fontSize={iconSize} />
                </Box>
                <Box
                  display="flex"
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    pt: 0.3,
                  }}>
                  <Typography sx={{ fontSize: fontSize }}>0</Typography>
                </Box>
              </Stack>
            </Tooltip>
          </Stack>
        </Grid>
        <Grid item sx={{ minWidth: `calc(100% - 235px)` }} display="flex" justifyContent="flex-end">
          <Box display="flex" justifyContent="flex-end">
            <Stack justifyContent="end" direction="row" spacing={0.8} sx={{ pr: 1.5 }}>
              <Box
                display="flex"
                sx={{
                  px: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    background: bgBlueHover,
                  },
                }}>
                <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: fontSize }}>UTF</Typography>
                <Typography sx={{ mt: 0.1, fontSize: fontSize }}>-</Typography>
                <Typography sx={{ mt: 0.1, fontSize: fontSize }}>8</Typography>
              </Box>
              <Box
                display="flex"
                sx={{
                  px: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    background: bgBlueHover,
                  },
                }}>
                <BiCodeCurly fontSize={fontSize} />
                <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: fontSize }}>TypeScript</Typography>
                <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: fontSize }}>JSX</Typography>
              </Box>
              <Box
                display="flex"
                sx={{
                  px: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    background: bgBlueHover,
                  },
                }}>
                <VscCheck fontSize={iconSize} />
                <Typography sx={{ ml: 0.5, mt: 0.1, fontSize: fontSize }}>Prettier</Typography>
              </Box>

              <Box
                display="flex"
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  py: 0.3,
                  px: 0.5,
                  cursor: 'pointer',
                  '&:hover': {
                    background: bgBlueHover,
                  },
                }}>
                <VscFeedback fontSize={iconSize} />
              </Box>
              <Tooltip title="No notification" arrow>
                <Box
                  display="flex"
                  sx={{
                    width: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 0.3,
                    px: 0.5,
                    cursor: 'pointer',
                    '&:hover': {
                      background: bgBlueHover,
                    },
                  }}>
                  <VscBell fontSize={iconSize} />
                </Box>
              </Tooltip>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
