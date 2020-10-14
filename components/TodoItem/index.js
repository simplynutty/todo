import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import { Checkbox, DueDate, Description, Item } from './style';

class TodoItem extends React.Component {

  render() {
    const { description, dueDate, id, isComplete, toggleComplete } = this.props;
    const dueDateMoment = moment(dueDate);

    let dueDateFormatted;
    let isOverdue = false;
    
    if (moment(dueDate).isValid()) {
      dueDateFormatted = dueDateMoment.format('MM/DD/YYYY');
      isOverdue = moment().isAfter(dueDateMoment, 'day');
    }

    return (
      <Item key={id} isComplete={isComplete} isOverdue={isOverdue}>
        <Checkbox>
          <input
            checked={isComplete}
            onChange={() => toggleComplete(id)}
            type="checkbox"
          />
        </Checkbox>
        <Description>{description}</Description>
        {dueDateFormatted && (<DueDate>{dueDateFormatted}</DueDate>)}
      </Item>
    );
  }
};

TodoItem.propTypes = {
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  id: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  dueDate: null,
};

export default TodoItem;
