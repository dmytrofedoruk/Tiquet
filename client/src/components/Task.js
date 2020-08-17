// @Packages
import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
import { Draggable } from 'react-beautiful-dnd';

// @Project
import '../styles/components/TaskCard.scss';

const Task = ({ className, title, id, index }) => (
  <Draggable
    index={index}
    draggableId={new Number(id).toString()}
    key={id}>
    {(dragProvided) => (
      <div
        ref={dragProvided.innerRef}
        {...dragProvided.draggableProps}
        {...dragProvided.dragHandleProps}
        className={cn("taskcard", className)}>
        {title}
      </div>
    )}
  </Draggable>
)

Task.propTypes = {
  className: propTypes.string,
  id: propTypes.number,
  title: propTypes.string,
  index: propTypes.number,
}

export default Task;