'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { ICategory } from '@/types'

interface MainNavProps {
  data: ICategory[]
}

const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname()

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    isActive: pathname === `/category/${route.id}`,
  }))

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.isActive ? 'text-black' : 'text-gray-500',
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
