import 'split-pane-react/esm/themes/default.css'
import styles from './style/Layout.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { isBrowser } from 'react-device-detect'

import { profilePages } from '../../const/pages'
import blogPages from 'const/blog.json'
import SplitPane, { Pane, SashContent } from 'split-pane-react'
import { DocumentTree } from './DocumentTree'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'
import { FileButtons } from './FileButtons'
import { fileButtonsHeight, pageMinHeight, sideBarHeight, sideBarTreeHeight } from '../../const/heightSetting'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './color/colorSetting'

import { Container, Grid, Stack, Typography } from '@mui/material'

interface Page {
  id: number
  name: string
  route: string
  category: string
}

export default function Layout({ children }: any) {
  const router = useRouter()

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [visiblePages, setVisiblePages] = useState<Page[]>([])

  const [seachFlag, setSeachFlag] = useState(false)
  const [expanded, setExpanded] = useState(isBrowser)
  const [sizes, setSizes] = useState([250, 'auto'])

  useEffect(() => {
    setSizes([expanded ? 250 : 0, 'auto'])
  }, [expanded])

  useEffect(() => {
    setExpanded(sizes[0] > 0)
  }, [sizes])

  // リロード処理時にFileButtonsに格納する処理
  const path = router.pathname
  useEffect(() => {
    if (visiblePages.length === 0 && path === '/') {
      setVisiblePages([
        {
          id: 1,
          name: 'Helloworld',
          route: '/profile/Helloworld',
          category: 'Helloworld',
        },
      ])
      setSelectedIndex(1)
    } else if (path === '/profile/Helloworld') {
      setSelectedIndex(1)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ m: 0, p: 0 }} maxWidth={false} disableGutters>
        <Grid container sx={{ overflow: 'auto' }}>
          {/* SIDEBAR */}
          <Grid item sx={{ width: 50 }}>
            <Sidebar
              seachFlag={seachFlag}
              setSeachFlag={setSeachFlag}
              setExpanded={setExpanded}
              expanded={expanded}
            />
          </Grid>
          <SplitPane
            sizes={sizes}
            style={{ height: sideBarHeight }}
            onChange={setSizes}
            resizerSize={6}
            sashRender={() => <SashContent className={styles.split} />}>
            {/* EXPLORER & SEARCH */}
            <Pane style={{ backgroundColor: '#252527' }}>
              <Grid>
                <Stack sx={{ mt: 1 }}>
                  {seachFlag ? (
                    <Typography color="white" variant="caption" sx={{ ml: 4 }}>
                      SEARCH
                    </Typography>
                  ) : (
                    //EXPLORER
                    <>
                      <Typography color="white" variant="caption" sx={{ ml: 4 }}>
                        EXPLORER
                      </Typography>
                      <Grid sx={{ height: sideBarTreeHeight, overflowY: 'auto' }}>
                        <DocumentTree
                          profilePages={profilePages}
                          blogPages={blogPages}
                          selectedIndex={selectedIndex}
                          setSelectedIndex={setSelectedIndex}
                          visiblePages={visiblePages}
                          setVisiblePages={setVisiblePages}
                        />
                      </Grid>
                    </>
                  )}
                </Stack>
              </Grid>
            </Pane>
            <Pane minSize="60%">
              {/* MAINPREVIEW */}
              <Grid item xs zeroMinWidth>
                <Grid
                  sx={{
                    height: fileButtonsHeight,
                  }}>
                  <FileButtons
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    visiblePages={visiblePages}
                    setVisiblePages={setVisiblePages}
                  />
                </Grid>
                <Grid>
                  <Grid
                    sx={{
                      scrollBehavior: 'smooth',
                      overflowY: router.pathname === '/profile/Helloworld' ? '' : 'auto',
                      height: pageMinHeight,
                    }}>
                    {children}
                  </Grid>
                </Grid>
              </Grid>
            </Pane>
          </SplitPane>

          {/* FOOTER */}
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}
