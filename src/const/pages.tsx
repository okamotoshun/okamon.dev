import { BiBrain } from 'react-icons/bi'
import { FcTimeline } from 'react-icons/fc'
import { GiSkills, GiWorld } from 'react-icons/gi'
export const profilePages = [
  { id: 1, name: 'HelloWorld', route: '/profile/helloworld', icon: <GiWorld color="green" /> },
  { id: 2, name: 'History', route: '/profile/history', icon: <FcTimeline /> },
  { id: 3, name: 'Mind', route: '/profile/mind', icon: <BiBrain color="pink" /> },
  { id: 4, name: 'Skills', route: '/profile/skills', icon: <GiSkills color="yellow" /> },
]

export const blogPages = [
  {
    id: 5,
    category: 'TypeScript',
    items: [
      { id: 7, name: 'TypeScript1' },
      { id: 8, name: 'TypeScript2' },
      { id: 9, name: 'TypeScript3' },
      { id: 10, name: 'TypeScript4' },
    ],
  },
  {
    id: 6344252,
    category: 'React',
    items: [
      { id: 11, name: 'React1' },
      { id: 12, name: 'React2' },
      { id: 23, name: 'React3' },
      { id: 55, name: 'React4' },
    ],
  },
  {
    id: 623525334,
    category: 'Vue',
    items: [
      { id: 11, name: 'Vue1' },
      { id: 12, name: 'Vue2' },
      { id: 23, name: 'Vue3' },
      { id: 55, name: 'Vue4' },
    ],
  },
  {
    id: 62333435,
    category: 'JavaScript',
    items: [
      { id: 11, name: 'JavaScript1' },
      { id: 12, name: 'JavaScript2' },
      { id: 23, name: 'JavaScript3' },
      { id: 55, name: 'JavaScript4' },
    ],
  },
  {
    id: 62333435,
    category: 'CSS',
    items: [
      { id: 11, name: 'CSS1' },
      { id: 12, name: 'CSS2' },
      { id: 23, name: 'CSS3' },
      { id: 55, name: 'CSS4' },
    ],
  },
]
