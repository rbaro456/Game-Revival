import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import CalendarListItem from './CalendarListItem';
function CalendarList() {
    return (
        <div style={calendarListStyle}>
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                    Calendar Sign Up
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" disabled>
                    <CalendarListItem />
                </ListGroup.Item>
                <ListGroup.Item action>
                    This one is a button
                </ListGroup.Item>
            </ListGroup>      
        </div>     
    )
}

const calendarListStyle = {
    margin: '0 auto',
    width: '55%',
    paddingTop: '4%'
    

}

export default CalendarList;
