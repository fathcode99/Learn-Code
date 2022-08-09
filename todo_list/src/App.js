import React from "react";
import NavigationBar from './component/NavBar'
import TodoPages from './pages/TodoPages'

const App = () => {
    return (
      <div>
        <NavigationBar />
        <TodoPages />
      </div>
    )
}

export default App