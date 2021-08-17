import React from 'react'
import { Navbar } from 'ui/molecules/Navbar/Navbar'
import './Layout.scss'

interface Layout {
  children: React.ReactNode
}

export const Layout: React.FC<Layout> = (props): React.ReactElement => {
  return (
    <div className="layout">
      <div className="layout__top">
        <Navbar />
        <div>{props.children}</div>
      </div>

      <div>Footer</div>
    </div>
  )
}
