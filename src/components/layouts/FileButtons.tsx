import { Button, Box, Paper } from '@mui/material'
import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { Container } from '@mui/system'
import { useRouter } from 'next/router'

interface Props {
  pages: {
    id: number
    name: string
    route: string
    icon: JSX.Element
  }[]
  selectedIndex: number
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
  currentComponent: string
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>
  visiblePageIndexs: number[]
  setVisiblePageIndexs: React.Dispatch<React.SetStateAction<number[]>>
}

export const FileButtons = ({
  pages,
  selectedIndex,
  setSelectedIndex,
  currentComponent,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
}: Props) => {
  const router = useRouter()

  const renderPageButton = (id: number, name: string, route: string, icon: JSX.Element) => {
    return (
      <Box
        key={id}
        sx={{
          display: 'inline-block',
          borderRight: 1,
          borderColor: '#252525',
        }}>
        <Button
          key={id}
          disableRipple
          disableElevation
          disableFocusRipple
          onClick={() => {
            setSelectedIndex(id)
            setCurrentComponent('button')
            router.push(route)
          }}
          sx={{
            borderRadius: 0,
            px: 2,
            textTransform: 'none',
            backgroundColor: selectedIndex === id ? '#1e1e1e' : '#2d2d2d',
            color: selectedIndex === id ? 'white' : '#817d7a',
            '&.MuiButtonBase-root:hover': {
              bgcolor: selectedIndex === id ? '#1e1e1e' : '#2d2d2d',
            },
            transition: 'none',
            pb: 0.2,
          }}>
          <Box sx={{ color: '#6997d5', width: 20, height: 20, mr: 0.4, ml: -1 }}>
            {icon}
          </Box>
          {name}
          <Box
            component={Paper}
            sx={{
              ml: 1,
              mr: -1,
              backgroundColor: selectedIndex === id ? '#1e1e1e' : '#2d2d2d',
              color: selectedIndex === id ? 'white' : '#2d2d2d',
              '&.MuiPaper-root:hover': {
                bgcolor: '#333c43',
                color: selectedIndex !== id ? '#817d7a' : 'white',
              },
              width: 20,
              height: 20,
              transition: 'none',
            }}
            elevation={0}
            onClick={(e: any) => {
              e.stopPropagation()
              setVisiblePageIndexs(visiblePageIndexs.filter((x) => x !== id))
            }}>
            <VscChromeClose/>
          </Box>
        </Button>
      </Box>
    )
  }

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: 'inline-block',
        overflowX: 'auto',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
        backgroundColor: '#252527',
        '&::-webkit-scrollbar': {
          height: '3px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#535353',
        },
        '&::-webkit-darkScrollbar-thumb': {
          backgroundColor: '#ffffff',
        },
      }}>
      {pages.map(({ id, name, route, icon }) => renderPageButton(id, name, route, icon))}
    </Container>
  )
}
