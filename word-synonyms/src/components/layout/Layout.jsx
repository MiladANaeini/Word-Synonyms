import React from 'react'
import TopNav from './TopNav'
import AppRoutes from '../../routes/Routes'

function Layout() {
  return (
    <div>
     <TopNav/>
     <div>
      <AppRoutes/>
      </div>
    </div>
  )
}

export default Layout