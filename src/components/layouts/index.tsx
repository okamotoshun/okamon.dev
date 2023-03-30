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
import { last } from 'cheerio/lib/api/traversing'

interface Item {
  id: string
  name: string
  route: string
  category: string
  items?: Page[]
}
interface Page {
  id: string
  name: string
  route: string
  category: string
}

const allPages: any = [...blogPages, ...profilePages]

const getItems = (pages: Item[]): Page[] => {
  const items: Page[] = []
  pages.forEach((page) => {
    if (page.items) {
      page.items.forEach((item) => {
        const category = item.category || page.category
        items.push({
          id: item.id,
          name: item.name,
          category: category,
          route: item.route,
        })
      })
    } else {
      const category = page.category
      items.push({
        id: page.id,
        name: page.name,
        category: category,
        route: page.route,
      })
    }
  })
  return items
}
const allItems = getItems(allPages)
console.log(allItems)

export default function Layout({ children }: any) {
  const router = useRouter()

  const [selectedIndex, setSelectedIndex] = useState('0')
  const [visiblePages, setVisiblePages] = useState<Page[]>([])

  const [seachFlag, setSeachFlag] = useState(false)
  const [expanded, setExpanded] = useState(isBrowser)
  const [sizes, setSizes] = useState([250, 'auto'])

  useEffect(() => {
    setSizes([expanded ? 300 : 0, 'auto'])
  }, [expanded])

  useEffect(() => {
    setExpanded(sizes[0] > 0)
  }, [sizes])

  useEffect(() => {
    console.log(router.pathname)
    if (visiblePages.length === 0 && selectedIndex === '0' && router.pathname !== '/') {
      const { slug } = router.query
      const lastValue = slug ? slug : router.pathname.split('/').pop() // 'helloworld'
      const matchingPage = allPages.find((page: { id: string }) => page.id === lastValue)
      console.log(lastValue)
      console.log(matchingPage)

      if (matchingPage) {
        const newVisiblePages = [
          {
            id: matchingPage.id,
            name: matchingPage.name,
            route: matchingPage.route,
            category: matchingPage.category,
          },
        ]
        setVisiblePages(newVisiblePages)
        setSelectedIndex(matchingPage.id)
      }
    }
  }, [router.pathname, router.query, selectedIndex, visiblePages])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ m: 0, p: 0 }} maxWidth={false} disableGutters>
        <Grid container sx={{ overflow: 'auto', overflowY: 'hidden', overflowX: 'hidden' }}>
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
            <Pane minSize="50%">
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
