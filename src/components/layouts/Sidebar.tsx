import React from 'react'
import { links } from '../../const/links'
import Link from 'next/link'
import { Box, Paper, Tooltip } from '@mui/material'
import { VscFiles, VscSettingsGear, VscSearch } from 'react-icons/vsc'
import { sideBarHeight } from '../../const/heightSetting'

interface Props {
  expanded: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
  seachFlag: boolean
  setSeachFlag: React.Dispatch<React.SetStateAction<boolean>>
}

export const Sidebar = ({ expanded, setExpanded, seachFlag, setSeachFlag }: Props) => {
  return (
    <Box
      sx={{
        height: sideBarHeight,
        backgroundColor: '#333333',
      }}
      justifyContent="space-between"
      display="flex"
      flexDirection="column"
      component={Paper}
      square
      elevation={0}>
      <Box sx={{ flexGrow: 0 }} display="flex" justifyContent="center" flexDirection="column">
        {/* ドキュメント */}
        <Box
          sx={{
            borderLeft: expanded && !seachFlag ? 'solid 0.12em white' : 'solid 0.12em #333333',
            cursor: 'pointer',
            WebkitTapHighlightColor: 'rgba(0,0,0,0)',
          }}
          onClick={() => {
            seachFlag ? setExpanded(true) : setExpanded(!expanded)
            setSeachFlag(false)
          }}>
          <Box
            sx={{
              flexGrow: 0,
              my: 1.5,
              color: expanded && !seachFlag ? 'white' : '#858585',
              fontSize: 26,
              outline: 'none',
              '&:hover': {
                color: 'white',
              },
            }}
            display="flex"
            justifyContent="center">
            <VscFiles />
          </Box>
        </Box>
        {/* 検索機能 */}
        <Box
          sx={{
            borderLeft: expanded && seachFlag ? 'solid 0.12em white' : 'solid 0.12em #333333',
            cursor: 'pointer',
            WebkitTapHighlightColor: 'rgba(0,0,0,0)',
          }}
          onClick={() => {
            !seachFlag ? setExpanded(true) : setExpanded(!expanded)
            setSeachFlag(true)
          }}>
          <Box
            sx={{
              flexGrow: 0,
              my: 1.5,
              color: expanded && seachFlag ? 'white' : '#858585',
              fontSize: 26,
              outline: 'none',
              '&:hover': {
                color: 'white',
              },
            }}
            display="flex"
            justifyContent="center">
            <VscSearch />
          </Box>
        </Box>

        {links.map((link) => (
          <Tooltip title={link.title} arrow placement="right" key={link.index}>
            <Link target={link.href === '/blog' ? '' : '_blank'} href={link.href}>
              <Box
                sx={{
                  flexGrow: 0,
                  m: 0.5,
                  color: '#858585',
                  fontSize: 26,
                  '&:hover': {
                    color: 'white',
                  },
                  cursor: 'pointer',
                }}
                display="flex"
                justifyContent="center">
                <Box mt={0.7}>{link.icon}</Box>
              </Box>
            </Link>
          </Tooltip>
        ))}
      </Box>

      <Box sx={{ flexGrow: 0, pb: 0.5 }} display="flex" justifyContent="center" flexDirection="column">
        <Tooltip title="coming soon..." arrow placement="right">
          <Box
            sx={{
              flexGrow: 0,
              fontSize: 26,
              color: '#858585',
              cursor: 'pointer',
              '&:hover': {
                color: 'white',
              },
              WebkitTapHighlightColor: 'rgba(0,0,0,0)',
            }}
            display="flex"
            justifyContent="center">
            <Box mt={0.7}>
              <VscSettingsGear />
            </Box>
          </Box>
        </Tooltip>
      </Box>
    </Box>
  )
}
