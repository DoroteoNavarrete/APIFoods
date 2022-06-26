import React from 'react'
import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import Gluten from '../components/Gluten'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <Veggie />
      <Gluten />
    </motion.div>
  )
}

export default Home
