import React from 'react';
import Header from './components/Header'
import UserInput from './components/UserInput'
import Content from './components/Content'
import CalendarList from './components/calendarListComponents/CalendarList'
import Background from './assets/ghtyj.jpg'
import SlideShow from './components/SlideShow'

import './App.css';

function App() {
  return (
    <div >
      <Header />
      <body style={mainStyle}>
          <SlideShow />
          <div>
            <CalendarList />
        </div>
      </body>
    </div>
  );
}

const mainStyle = {
  backgroundImage: `url(${Background})`,
  position: 'fixed',
  padding: '0',
  margin: '0',
  left: '0',
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  overflowY: 'scroll'
}

export default App;
