import { Droppable } from '@hello-pangea/dnd'
import React from 'react'
import Item from './Item'

const Column = ({ title, items, id }) => {
  return (
    <div>
        <h3>{title}</h3>
        <Droppable droppableId={`${id}`}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items.map((item, index) => {
                return (
                  <Item key={item.id} item={item} index={index}/>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
    </div>
  )
}

export default Column