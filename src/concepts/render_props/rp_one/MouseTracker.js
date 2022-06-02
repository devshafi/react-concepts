import React from 'react'
import Mouse from './Mouse';
import Box from './Box';

export default function MouseTracker() {
    return (

        // explicitly using a props named render
        //<Mouse render={(mouse, handleMouseEvent) => <Box mouse={mouse} mouseMove={handleMouseEvent} />} />

        // passing as a children of mouse
        <Mouse>
           {(mouse,handleMouseEvent)=> <Box mouse={mouse} mouseMove={handleMouseEvent} />} 
        </Mouse>

    )
}
