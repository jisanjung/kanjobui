import React, { useState } from 'react'
import Kanban from '../components/Kanban';

const Home = () => {

  return (
    <div style={{ display: "flex" }}>
      <h1>Home</h1>
        <Kanban/>
    </div>
  )
}

export default Home