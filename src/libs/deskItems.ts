import MockPhone from '../RotatingPhone/MockPhone'
import MovieShowcase from '../MovieDisplay/MovieShowcase'

// Define item types
export type ItemID = 'sticky1' | 'sticky2' | 'sticky3' | 'image1' | 'image2' | 'mockPhone' | 'tablet'

// Define item structure
export interface DeskItem {
  id: ItemID
  type: 'sticky' | 'image' | 'device'
  scale: {
    isSelected?: string
    notSelected?: string
  }
  position: {
    top: string
    left?: string
    right?: string
  }
  size: {
    width?: string
    maxHeight?: string
    maxWidth?: string
    aspectRatio?: string
  }
  rotation?: string
  src?: string
  component?: React.ComponentType<any>
  componentProps?: any
}


export const stickyItems: DeskItem[] = [
  {
    id: 'sticky1',
    type: 'sticky',
    scale: { isSelected: "scale(2)", notSelected: "scale(1)" },
    position: { top: '25%', left: '10%' },
    size: { width: '10%', maxWidth: "725px" },
    rotation: 'rotate(-5deg)',
    src: '/sticky1.png'
  },
  {
    id: 'sticky2',
    type: 'sticky',
    scale: { isSelected: "scale(2)", notSelected: "scale(1)" },
    position: { top: '17%', left: '14%' },
    size: { width: '10%', maxWidth: "725px" },
    rotation: 'rotate(-5deg)',
    src: '/sticky2.png'
  },
  {
    id: 'sticky3',
    type: 'sticky',
    scale: { isSelected: "scale(2)", notSelected: "scale(1)" },
    position: { top: '20%', left: '15%' },
    size: { width: '10%', maxWidth: "725px" },
    rotation: 'rotate(-5deg)',
    src: '/sticky3.png'
  }
]

export const imageItems: DeskItem[] = [
  {
    id: 'image2',
    type: 'image',
    scale: { isSelected: "scale(1.5)", notSelected: "scale(1)", },
    position: { top: '22%', right: '15%' },
    size: { width: '25%', maxWidth: "500px" },
    rotation: 'rotate(-2.5deg)',
    src: '/image2.png'
  },
  {
    id: 'image1',
    type: 'image',
    scale: { isSelected: "scale(1.5)", notSelected: "scale(1)", },
    position: { top: '22%', right: '15%' },
    size: { width: '25%', maxWidth: "500px" },
    rotation: 'rotate(2.5deg)',
    src: '/image1.png'
  },
]


export const deviceItems: DeskItem[] = [
  {
    id: 'tablet',
    type: 'device',
    position: { top: '25%', left: '5%' },
    size: { width: '40%', maxWidth: "900px", },
    scale: { isSelected: "scale(1.5)", notSelected: "scale(1)", },
    rotation: 'rotate(0deg)',
    component: MovieShowcase,
    componentProps: { isActive: true, }
  },
  {
    id: 'mockPhone',
    type: 'device',
    scale: { isSelected: "scale(1.45)", notSelected: "scale(0.75)", },
    position: { top: '10%', right: '0%' },
    size: { width: '13%', maxWidth: "300px", aspectRatio: "9/16" },
    rotation: 'rotate(0deg)',
    component: MockPhone,
    componentProps: { deskActive: true, isActive: false, }
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
