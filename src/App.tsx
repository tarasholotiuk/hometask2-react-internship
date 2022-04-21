import React from 'react';
import Tasks from './components/Tasks'
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <Tasks />
      <Info />

      {/* <Header />
        {arr
          .filter((el) => el.isArchived !== true)
          .map((el, index) => (
            <Item task={el} key={index} />
          ))} */}
    </div>
  );
}

export default App;
