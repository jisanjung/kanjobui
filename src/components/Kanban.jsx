import { DragDropContext } from '@hello-pangea/dnd'
import React from 'react'
import Column from './Column';

const testData = [
    {
        id: 1,
        text: "eat"
    },
    {
        id: 2,
        text: "sleep"
    },
    {
        id: 3,
        text: "code"
    }
];

const Kanban = () => {
  return (
    <DragDropContext onDragEnd={(result) => console.log(result)}>
        <Column title="Applied" items={testData} id="applied"/>
        <Column title="Interview" items={[]} id="interview"/>
        <Column title="In Progress" items={[]} id="in_progress"/>
        <Column title="Offer" items={[]} id="offer"/>
    </DragDropContext>
  )
}

export default Kanban