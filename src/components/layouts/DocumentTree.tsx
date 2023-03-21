import * as React from 'react'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FolderIcon } from './FolderIcon'
import { FileIcon } from './FileIcon'

interface Page {
  id: number
  name: string
  route: string
  icon: JSX.Element
}

interface Props {
  profilePages: Page[]
  selectedIndex: number
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
  currentComponent: string
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>
  visiblePageIndexs: number[]
  setVisiblePageIndexs: React.Dispatch<React.SetStateAction<number[]>>
  blogPages: any
}

export const DocumentTree = ({
  profilePages,
  blogPages,
  selectedIndex,
  setSelectedIndex,
  currentComponent,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
}: Props) => {
  const router = useRouter()
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  const { pathname } = useRouter()

  const page: Page = profilePages?.find((x) => x.route === pathname)!

  useEffect(() => {
    if (page) {
      setSelectedIndex(page.id)
    }
  }, [page, setSelectedIndex])

  function renderTreeItemBgColor(id: number) {
    return selectedIndex === id ? 'rgba(144,202,249,0.16)' : '#252527'
  }

  function renderTreeItemColor(id: number) {
    return selectedIndex === id && currentComponent === 'tree' ? 'white' : '#bdc3cf'
  }

  return (
    <TreeView aria-label="file system navigator" sx={{ minWidth: 220 }} defaultExpanded={['-1', '-2']}>
      {/* profileページ */}
      <TreeItem
        expandIcon={<FolderIcon src="user" />}
        collapseIcon={<FolderIcon src="user-open" />}
        nodeId="-1"
        label="Profile"
        onClick={() => {
          router.push('/')
          setSelectedIndex(-1)
        }}>
        {profilePages?.map(({ id, name, route, icon }) => (
          <TreeItem
            key={id}
            nodeId={id.toString()}
            label={name}
            sx={{
              color: renderTreeItemColor(id),
              backgroundColor: renderTreeItemBgColor(id),
              '&& .Mui-selected': {
                backgroundColor: renderTreeItemBgColor(id),
              },
            }}
            icon={icon}
            onClick={() => {
              if (!visiblePageIndexs.includes(id)) {
                const newIndexs = [...visiblePageIndexs, id]
                setVisiblePageIndexs(newIndexs)
              }
              router.push(route)
              setSelectedIndex(id)
              setCurrentComponent('tree')
            }}
          />
        ))}
      </TreeItem>
      {/* blogページ */}
      <TreeItem
        expandIcon={<FolderIcon src="blog" />}
        collapseIcon={<FolderIcon src="blog-open" />}
        nodeId="-2"
        label="Blog"
        onClick={() => {
          router.push('/blog')
          setSelectedIndex(-1)
        }}>
        {blogPages.map(({ id, category, items }: any) => (
          <TreeItem
            key={id}
            nodeId={id.toString()}
            label={category}
            expandIcon={<FolderIcon src={category} />}
            collapseIcon={<FolderIcon src={`${category}-open`} />}
            sx={{
              color: renderTreeItemColor(id),
              // backgroundColor: renderTreeItemBgColor(id),
              '&& .Mui-selected': {
                backgroundColor: renderTreeItemBgColor(id),
              },
            }}
            onClick={() => {
              // 追加処理
              // if (!visiblePageIndexs.includes(id)) {
              //   const newIndexs = [...visiblePageIndexs, id]
              //   setVisiblePageIndexs(newIndexs)
              // }
              router.push(`/blog/${category}`)
              setSelectedIndex(id)
              setCurrentComponent('tree')
            }}>
            {items &&
              items.map(({ id, name }) => (
                <TreeItem
                  key={id}
                  nodeId={id.toString()}
                  label={name}
                  icon={<FileIcon src={category} />}
                  sx={{
                    color: renderTreeItemColor(id),
                    backgroundColor: renderTreeItemBgColor(id),
                    '&& .Mui-selected': {
                      backgroundColor: renderTreeItemBgColor(id),
                    },
                  }}
                  onClick={() => {
                    // 追加処理
                    // if (!visiblePageIndexs.includes(id)) {
                    //   const newIndexs = [...visiblePageIndexs, id]
                    //   setVisiblePageIndexs(newIndexs)
                    // }
                    router.push(`/blog/${category}`)
                    setSelectedIndex(id)
                    setCurrentComponent('tree')
                  }}
                />
              ))}
          </TreeItem>
        ))}
      </TreeItem>
    </TreeView>
  )
}
