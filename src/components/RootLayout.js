import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarPanel from './NavBarPanel'
const RootLayout = () => {
  return (
    <div>
      <NavBarPanel/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
