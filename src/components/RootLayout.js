import React from 'react'

import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store';
import Navigation from './Navigation'
const RootLayout = () => {
  return (
    <>
     <Provider store={store}>
        <Navigation />
        <main>
            <Outlet />
        </main>
     </Provider>
        
    </>
  )
}

export default RootLayout