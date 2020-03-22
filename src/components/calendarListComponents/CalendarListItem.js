import React from 'react';

function CalendarLisItem() {
    return (
        <div style={calendarListItemStyle}>
            <div style={titleStyle}>
              Battlefield Bad Company 2
            </div> 
            <div style={dateStyle}>
                12/20/20
            </div>
            <div>
                3pm EST
            </div>
        </div>
    )
}

const calendarListItemStyle = {
    display: 'flex'
}

const titleStyle = {
    paddingRight: '16%'
}

const dateStyle = {
    paddingRight: '12%'
}

export default CalendarLisItem;
