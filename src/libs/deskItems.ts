import MockPhone from '../RotatingPhone/MockPhone'
import MovieShowcase from '../MovieDisplay/MovieShowcase'

// Define item types
export type ItemID = 'sticky1' | 'sticky2' | 'sticky3' | 'image1' | 'image2' | 'mockPhone' | 'tablet'

// Define item structure
export interface DeskItem {
  id: ItemID
  type: 'sticky' | 'image' | 'device'
  position: {
    top: string
    left?: string
    right?: string
  }
  size: {
    width: string
    height?: string
  }
  rotation: string
  src?: string
  component?: React.ComponentType<any>
  componentProps?: any
}


export const stickyItems: DeskItem[] = [
  {
    id: 'sticky1',
    type: 'sticky',
    position: { top: '25%', left: '10%' },
    size: { width: '8%' },
    rotation: 'rotate(-5deg)',
    src: '/sticky1.png'
  },
  {
    id: 'sticky2',
    type: 'sticky',
    position: { top: '22%', left: '14%' },
    size: { width: '8%' },
    rotation: 'rotate(-5deg)',
    src: '/sticky2.png'
  },
  {
    id: 'sticky3',
    type: 'sticky',
    position: { top: '27%', left: '15%' },
    size: { width: '8%' },
    rotation: 'rotate(-5deg)',
    src: '/sticky3.png'
  }
]


export const imageItems: DeskItem[] = [
  {
    id: 'image2',
    type: 'image',
    position: { top: '8%', right: '15%' },
    size: { width: '20%' },
    rotation: 'rotate(-5deg)',
    src: '/image2.png'
  },
  {
    id: 'image1',
    type: 'image',
    position: { top: '8%', right: '15%' },
    size: { width: '20%' },
    rotation: 'rotate(-15deg)',
    src: '/image1.png'
  },
]

// Device items data
export const deviceItems: DeskItem[] = [
  {
    id: 'tablet',
    type: 'device',
    position: { top: '20%', left: '5%' },
    size: { width: '40%', height: 'auto' },
    rotation: 'rotate(0deg)',
    component: MovieShowcase,
    componentProps: { isActive: true }
  },
  {
    id: 'mockPhone',
    type: 'device',
    position: { top: '10%', right: '0%' },
    size: { width: '9%', height: "auto" },
    rotation: 'rotate(0deg)',
    component: MockPhone,
    componentProps: { deskActive: true, isActive: false }
  }
]

// All items combined
export const allItems: DeskItem[] = [...stickyItems, ...imageItems, ...deviceItems]

// Extract draggable item IDs
export const draggableItems = allItems.map(item => item.id)

// Helper functions for organizing items
export const getItemsByType = (type: DeskItem['type']) =>
  allItems.filter(item => item.type === type)

export const getItemById = (id: ItemID) =>
  allItems.find(item => item.id === id)

// Categories for easy access
export const itemCategories = {
  stickies: stickyItems,
  images: imageItems,
  devices: deviceItems,
  all: allItems
} as const
