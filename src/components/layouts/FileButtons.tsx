import { Button, Box, Paper } from '@mui/material'
import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import { FileIcon } from './FileIcon'

interface Page {
  id: string
  name: string
  route: string
  category: string
}

interface Props {
  selectedIndex: string
  setSelectedIndex: React.Dispatch<React.SetStateAction<string>>
  visiblePages: Page[]
  setVisiblePages: React.Dispatch<React.SetStateAction<Page[]>>
}

export const FileButtons = ({ selectedIndex, setSelectedIndex, visiblePages, setVisiblePages }: Props) => {
  const router = useRouter()

  const renderPageButton = (id: string, name: string, route: string, category: string, index: number) => {
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
            // setSelectedIndex(id)
            router.push(route)
          }}
          sx={{
            borderRadius: 0,
            px: 2,
            textTransform: 'none',
            backgroundColor: selectedIndex === id ? '#222222' : '#2d2d2d',
            color: selectedIndex === id ? 'white' : '#817d7a',
            '&.MuiButtonBase-root:hover': {
              bgcolor: selectedIndex === id ? '#222222' : '#2d2d2d',
            },
            transition: 'none',
            pb: 0.2,
          }}>
          <Box sx={{ color: '#6997d5', width: 20, height: 20, mr: 0.4, ml: -1 }}>
            <FileIcon src={category} height={20} width={20} />
          </Box>
          {name}
          <Box
            component={Paper}
            sx={{
              ml: 1,
              mr: -1,
              backgroundColor: selectedIndex === id ? '#222222' : '#2d2d2d',
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
            onClick={(e) => {
              e.stopPropagation()
              const pageLength = visiblePages.length

              const newVisiblePages = [...visiblePages]
              newVisiblePages.splice(index, 1)

              if (pageLength === 1) {
                console.log(pageLength)
                router.push('/')
                setVisiblePages(newVisiblePages)
                setSelectedIndex('-1')
              } else if (pageLength === index + 1) {
                router.push(newVisiblePages[index - 1].route)
              } else {
                router.push(newVisiblePages[index].route)
              }
              setVisiblePages(newVisiblePages)
            }}>
            <VscChromeClose />
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
      {visiblePages.map(({ id, name, route, category }, index) =>
        renderPageButton(id, name, route, category, index),
      )}
    </Container>
  )
}
