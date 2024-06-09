import {
  Bell,
  BookAudio,
  BookOpenCheck,
  FileQuestion,
  LibraryBig,
  Medal,
  Newspaper,
  Package,
  Puzzle,
  Radio,
  StickyNote,
  Swords,
  User,
} from 'lucide-react'
import { MenuItemProps } from '@/shared/ui/Menu'

export const items: MenuItemProps[] = [
  {
    icon: <BookAudio />,
    label: 'Courses',
    itemKey: 'courses',
  },
  {
    icon: <Medal />,
    label: 'Grandmasters',
    itemKey: 'grandmasters',
  },
  {
    icon: <Newspaper />,
    label: 'News',
    itemKey: 'news',
  },
  {
    icon: <LibraryBig />,
    label: 'Books',
    itemKey: 'books',
  },
  {
    icon: <StickyNote />,
    label: 'Afisha',
    itemKey: 'afisha',
  },
  {
    icon: <Swords />,
    label: 'Tournament',
    itemKey: 'tournament',
  },
  {
    icon: <Package />,
    label: 'Modules',
    itemKey: 'modules',
  },
  {
    icon: <BookOpenCheck />,
    label: 'Lessons',
    itemKey: 'lessons',
  },
  {
    icon: <FileQuestion />,
    label: 'Quiz',
    itemKey: 'quiz',
  },
  {
    icon: <Radio />,
    label: 'Streams',
    itemKey: 'streams',
  },
  {
    icon: <Puzzle />,
    label: 'Puzzles',
    itemKey: 'puzzles',
  },
  {
    icon: <User />,
    label: 'Teachers',
    itemKey: 'teachers',
  },
  {
    icon: <Bell />,
    label: 'Notifications',
    itemKey: 'notifications',
  },
]
