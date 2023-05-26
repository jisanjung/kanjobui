import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const Home = () => {

  const [column, setColumn] = useState({
    "applied": {
      title: "Applied",
      items: []
    },
    "interview": {
      title: "Interview",
      items: []
    },
    "in_progress": {
      title: "In Progress",
      items: []
    },
    "offer": {
      title: "Offer",
      items: []
    }
  });

  return (
    <div>
      <h1>Home</h1>
      <DragDropContext onDragEnd={e => console.log(e)}>
        
      </DragDropContext>
    </div>
  )
}

export default Home