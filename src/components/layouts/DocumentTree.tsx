import * as React from 'react'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'
import { useRouter } from 'next/router'
import { FolderIcon } from './FolderIcon'
import { FileIcon } from './FileIcon'

interface Page {
  id: string
  name: string
  route: string
  category: string
}

interface Props {
  profilePages: Page[]
  blogPages: any
  selectedIndex: string
  setSelectedIndex: React.Dispatch<React.SetStateAction<string>>
  visiblePages: Page[]
  setVisiblePages: React.Dispatch<React.SetStateAction<Page[]>>
}

export const DocumentTree = ({
  profilePages,
  blogPages,
  selectedIndex,
  setSelectedIndex,
  visiblePages,
  setVisiblePages,
}: Props) => {
  const router = useRouter()

  function renderTreeItemBgColor(index: string) {
    return selectedIndex === index ? 'rgba(144,202,249,0.16)' : '#252527'
  }
  function renderTreeItemColor(index: string) {
    return selectedIndex === index ? 'white' : '#bdc3cf'
  }

  const onClickFile = ({ id, name, route, category }: Page) => {
    router.push(route)
    // setSelectedIndex(id)
    if (!visiblePages.some((page) => page.id === id)) {
      setVisiblePages((prevPages) => [...prevPages, { id, name, route, category }])
    }
  }

  return (
    <TreeView
      aria-label="file system navigator"
      sx={{ minWidth: 220 }}
      defaultExpanded={[]}
      style={{ overflowX: 'clip' }}>
      {/* profileページ */}
      <TreeItem
        icon={<FileIcon src="Home" height={20} width={20} />}
        nodeId="0"
        label="Home"
        sx={{
          // color: renderTreeItemColor(id),
          backgroundColor: renderTreeItemBgColor('1000'),
          '&& .Mui-selected': {
            backgroundColor: renderTreeItemBgColor('1000'),
          },
        }}
        onClick={() => {
          router.push('/')
          setSelectedIndex('0')
        }}></TreeItem>
      <TreeItem
        expandIcon={<FolderIcon src="Profile" />}
        collapseIcon={<FolderIcon src="Profile-open" />}
        nodeId="-1"
        label="Profile"
        onClick={() => {
          // router.push('/')
          // setSelectedIndex(-1)
        }}>
        {profilePages?.map(({ id, name, route, category }) => (
          <TreeItem
            key={id}
            nodeId={id.toString()}
            label={name}
            icon={<FileIcon src={name} height={20} width={20} />}
            sx={{
              // color: renderTreeItemColor(id),
              backgroundColor: renderTreeItemBgColor(id),
              '&& .Mui-selected': {
                backgroundColor: renderTreeItemBgColor(id),
              },
            }}
            onClick={() => {
              onClickFile({ id, name, route, category })
            }}
          />
        ))}
      </TreeItem>
      {/* blogページ */}
      <TreeItem
        expandIcon={<FolderIcon src="Blog" />}
        collapseIcon={<FolderIcon src="Blog-open" />}
        nodeId="-2"
        label="Blog"
        onClick={() => {
          // router.push('/blog')
          // setSelectedIndex(-2)
        }}>
        {blogPages.map(({ id, category, route, items }: any) => (
          <TreeItem
            key={category}
            nodeId={id.toString()}
            label={category}
            expandIcon={<FolderIcon src={category} />}
            collapseIcon={<FolderIcon src={`${category}-open`} />}
            onClick={() => {
              // router.push(route)
              // setSelectedIndex(id)
            }}>
            {items &&
              items.map(({ id, name, route }: Page) => (
                <TreeItem
                  key={id}
                  nodeId={id.toString()}
                  label={name}
                  icon={<FileIcon src={category} />}
                  sx={{
                    backgroundColor: renderTreeItemBgColor(id),
                    '&& .Mui-selected': {
                      backgroundColor: renderTreeItemBgColor(id),
                    },
                    ' && .MuiTreeItem-content': {
                      display: '-webkit-box',
                    },
                    ' && .MuiTreeItem-content .MuiTreeItem-label': {
                      width: '100vw',
                    },
                  }}
                  onClick={() => {
                    onClickFile({ id, name, route, category })
                  }}
                />
              ))}
          </TreeItem>
        ))}
      </TreeItem>
    </TreeView>
  )
}
;<style jsx>{`
  .MuiTreeItem-content {
    display: -webkit-box;
  }

  .MuiTreeItem-content .MuiTreeItem-label {
    width: 100vw;
  }
`}</style>
