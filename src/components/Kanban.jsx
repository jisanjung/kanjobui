import { DragDropContext } from '@hello-pangea/dnd'
import React from 'react'
import Column from './Column';
import { APPLIED_COLUMN_TITLE, INTERVIEW_COLUMN_TITLE, IN_PROGRESS_COLUMN_TITLE, OFFER_COLUMN_TITLE } from '../utils/constants';

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
        <Column title={APPLIED_COLUMN_TITLE} items={testData} id={APPLIED_COLUMN_TITLE}/>
        <Column title={INTERVIEW_COLUMN_TITLE} items={[]} id={INTERVIEW_COLUMN_TITLE}/>
        <Column title={IN_PROGRESS_COLUMN_TITLE} items={[]} id={IN_PROGRESS_COLUMN_TITLE}/>
        <Column title={OFFER_COLUMN_TITLE} items={[]} id={OFFER_COLUMN_TITLE}/>
    </DragDropContext>
  )
}

export default Kanban