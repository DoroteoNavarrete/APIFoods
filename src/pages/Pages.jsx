import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import Searched from './Searched'
import Cuisine from './Cuisine'
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion'

function Pages() {

  const location = useLocation();

  return (
        <AnimatePresence exitBeforeEnter>
          <Routes Location={location} key={location.pathname}>
            <Route path={'/'} exact element={<Home />}/>
            <Route path={'/cuisine/:type'} exact element={<Cuisine />}/>
            <Route path={'/searched/:search'} exact element={<Searched />}/>
            <Route path={'/recipe/:name'} exact element={<Recipe />}/>
          </Routes>
        </AnimatePresence>
  )
}

export default Pages