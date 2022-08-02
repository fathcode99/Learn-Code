import React from 'react';
import {
  Form,
  Button
} from 'react-bootstrap'

// import component
import ToDoItem from './component/TodoItem'

class App extends React.Component{
      constructor(props){
        super(props)
        this.state = {
          activities: [
            {id : 1, name : 'Makan'},
            {id : 2, name : 'Tidur'},
            {id : 3, name : 'Coding'},
            {id : 4, name : 'Ngopi'},
          ]
        }
      }

      showData = () => {
        return (
          this.state.activities.map(item => {
            return <ToDoItem data={item} />
          })
        )
      }

      onAdd = () => {
        // mempersiapkan data to do baru dan id nya
        let newTodo = this.refs.todo.value
        let id = this.state.activities[this.state.activities.length-1].id + 1
        
        // menyiapkan array untuk state yg baru, sebagai penampung krn tdk bisa langsung edit state
        let tempArr = [...this.state.activities]

        // menambahkan data baru ke array tempArr
        tempArr.push({id, name : newTodo})
        // console.log(tempArr)
        this.setState({activities: tempArr})

        // untuk mengosongkan kembali fomr control
        this.refs.todo.value = ''
      }

      render () {
        return (
          <div style={styles.container}>
            <h1>TO DO LIST</h1>
            {this.showData()}
            <div style={styles.input}>
              <Form.Control
                placeholder="Input New To Do"
                ref="todo"
              />
              <Button variant="primary" onClick={this.onAdd} className='ms-2'>Add</Button>
            </div>

          </div>
        )
      }
}

const styles = {
    container : {
      padding : '10px'
    },
    input : {
      width : '25vw',
      display : 'flex'
    }
}

export default App
