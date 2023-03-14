import { BiBrain } from 'react-icons/bi'
import { FcTimeline } from 'react-icons/fc'
import { GiSkills, GiWorld } from 'react-icons/gi'
export const profilePages = [
  { id: 1, name: 'HelloWorld', route: '/profile/helloworld', icon: <GiWorld color="green" /> },
  { id: 2, name: 'Mind', route: '/profile/mind', icon: <BiBrain color="pink" /> },
  { id: 3, name: 'Skills', route: '/profile/skills', icon: <GiSkills color="yellow" /> },
  { id: 4, name: 'History', route: '/profile/history', icon: <FcTimeline /> },
]

export const blogPages = [
  {
    id: 5,
    category: 'TypeScript',
    route: '/blog/TypeScript',
    items: [
      { id: 0, name: 'HelloWorld', route: '/helloworld' },
      { id: 1, name: 'History', route: '/history' },
      { id: 2, name: 'Mind', route: '/mind' },
      { id: 3, name: 'Skils', route: '/skils' },
    ],
  },
  {
    id: 6,
    category: 'React',
    route: '/blog/React',
    items: [
      { id: 0, name: 'HelloWorld', route: '/helloworld' },
      { id: 1, name: 'History', route: '/history' },
      { id: 2, name: 'Mind', route: '/mind' },
      { id: 3, name: 'Skils', route: '/skils' },
    ],
  },
  // {
  //   category: 'Vue',
  //   items: [
  //     { id: 0, name: 'HelloWorld', route: '/helloworld' },
  //     { id: 1, name: 'History', route: '/history' },
  //     { id: 2, name: 'Mind', route: '/mind' },
  //     { id: 3, name: 'Skils', route: '/skils' },
  //   ],
  // },
  // {
  //   category: 'Python',
  //   items: [
  //     { id: 0, name: 'HelloWorld', route: '/helloworld' },
  //     { id: 1, name: 'History', route: '/history' },
  //     { id: 2, name: 'Mind', route: '/mind' },
  //     { id: 3, name: 'Skils', route: '/skils' },
  //   ],
  // },

  // {
  //   category: 'Git',
  //   items: [
  //     { id: 0, name: 'HelloWorld', route: '/helloworld' },
  //     { id: 1, name: 'History', route: '/history' },
  //     { id: 2, name: 'Mind', route: '/mind' },
  //     { id: 3, name: 'Skils', route: '/skils' },
  //   ],
  // },
]
