import React from "react";
import NavigationBar from './component/NavBar'
import TodoPages from './pages/TodoPages'
import AddMinPages from './pages/AddMinPages'

class App extends React.Component{
  render() {
    return (
      <div>
        <NavigationBar />
        <TodoPages />
        <AddMinPages />,
      </div>
    )
  }
}

export default App