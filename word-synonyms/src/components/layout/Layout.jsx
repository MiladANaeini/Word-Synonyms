import React from 'react'
import TopNav from '../common/TopNav'
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