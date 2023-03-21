import 'split-pane-react/esm/themes/default.css'
import styles from './style/Layout.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { isBrowser } from 'react-device-detect'

import { profilePages, blogPages } from '../../const/pages'
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
  icon: JSX.Element
}

// 初期タブ作成関数(プロフィール表示)
const initVisiblePageIndexs = (profilePages: Page[]) => {
  const tabs = []
  for (const page of profilePages) {
    tabs.push(page.id)
  }
  return tabs
}

export default function Layout({ children }: any) {
  const router = useRouter()

  const [seachFlag, setSeachFlag] = useState(false)
  const [expanded, setExpanded] = useState(isBrowser)

  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [currentComponent, setCurrentComponent] = useState('')
  const [visiblePageIndexs, setVisiblePageIndexs] = useState(initVisiblePageIndexs(profilePages))
  const [visiblePages, setVisiblePages] = useState(profilePages)

  const [sizes, setSizes] = useState([250, 'auto'])
  useEffect(() => {
    if (!expanded) {
      setSizes([0, 'auto'])
    } else {
      setSizes([250, 'auto'])
    }
  }, [expanded])

  useEffect(() => {
    if (sizes[0] > 0) {
      setExpanded(true)
    } else if (sizes[0] === 0) {
      setExpanded(false)
    }
  }, [sizes])

  //ここら辺のロジック考える(土曜、日曜日) ======================================================
  const deletedIndex = visiblePages.find((x) => !visiblePageIndexs.includes(x.id))?.id
  useEffect(() => {
    const newPages = []

    for (const id of visiblePageIndexs) {
      const page = profilePages.find((x) => x.id === id)
      if (page) newPages.push(page)
    }
    setVisiblePages(newPages)

    if (visiblePageIndexs.length === 0) {
      setSelectedIndex(-1)
      router.push('/')
      // if (currentComponent === 'blogPages') {
      // }
    } else if (deletedIndex === selectedIndex && deletedIndex > Math.max(...visiblePageIndexs)) {
      setSelectedIndex(Math.max(...visiblePageIndexs))
      const page = profilePages.find((x) => x.id === Math.max(...visiblePageIndexs))
      if (page) router.push(page.route)
    } else if (deletedIndex === selectedIndex && deletedIndex < Math.max(...visiblePageIndexs)) {
      setSelectedIndex(Math.min(...visiblePageIndexs))
      const page = profilePages.find((x) => x.id === Math.min(...visiblePageIndexs))
      if (page) router.push(page.route)
    } else {
    }
  }, [visiblePageIndexs, router, deletedIndex, selectedIndex])
  //ここら辺のロジック考える(土曜、日曜日) ======================================================

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
                          currentComponent={currentComponent}
                          setCurrentComponent={setCurrentComponent}
                          visiblePageIndexs={visiblePageIndexs}
                          setVisiblePageIndexs={setVisiblePageIndexs}
                        />
                      </Grid>
                    </>
                  )}
                </Stack>
              </Grid>
            </Pane>
            <Pane minSize="20%">
              {/* MAINPREVIEW */}
              <Grid item xs zeroMinWidth>
                <Grid
                  sx={{
                    height: fileButtonsHeight,
                  }}>
                  <FileButtons
                    pages={visiblePages}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    currentComponent={currentComponent}
                    setCurrentComponent={setCurrentComponent}
                    visiblePageIndexs={visiblePageIndexs}
                    setVisiblePageIndexs={setVisiblePageIndexs}
                  />
                </Grid>
                <Grid>
                  <Grid
                    sx={{
                      scrollBehavior: 'smooth',
                      overflowY: router.pathname === '/profile/helloworld' ? '' : 'auto',
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
