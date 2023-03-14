import * as React from 'react'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { VscMarkdown } from 'react-icons/vsc'
import { FaRegFolder, FaRegFolderOpen } from 'react-icons/fa'

interface Page {
  id: number
  name: string
  route: string
  icon: JSX.Element
}

interface Props {
  profilePages:Page[]
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
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<FaRegFolderOpen />}
      defaultExpandIcon={<FaRegFolder />}
      sx={{ minWidth: 220 }}
      defaultExpanded={['-1', '-2']}

      // sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      <TreeItem
        nodeId="-1"
        label="Profile"
        color="#bdc3cf"
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
      {/* 仮の処理今後考える */}
      <TreeItem
        nodeId="-2"
        label="Blog"
        color="#bdc3cf"
        onClick={() => {
          router.push('/blog')
          setSelectedIndex(-1)
        }}>
        {blogPages.map(({ id, category, route }: any) => (
          <TreeItem
            key={id}
            nodeId={id.toString()}
            label={category}
            sx={{
              color: renderTreeItemColor(id),
              backgroundColor: renderTreeItemBgColor(id),
              '&& .Mui-selected': {
                backgroundColor: renderTreeItemBgColor(id),
              },
            }}
            icon={<VscMarkdown color="#6997d5" />}
            onClick={() => {
              // 追加処理
              // if (!visiblePageIndexs.includes(id)) {
              //   const newIndexs = [...visiblePageIndexs, id]
              //   setVisiblePageIndexs(newIndexs)
              // }

              router.push(route)
              setSelectedIndex(id)
              setCurrentComponent('tree')
            }}></TreeItem>
        ))}
      </TreeItem>
    </TreeView>
  )
}
