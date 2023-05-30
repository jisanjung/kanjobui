import { Draggable } from '@hello-pangea/dnd';
import React from 'react';

const Item = ({ item, index }) => {
  return (
    <Draggable draggableId={`${item?.id}`} index={index}>
        {(provided, snapshot) => (
            <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            >
            <h4>i am an item</h4>
            </div>
        )}
    </Draggable>
  )
}

export default Item